import { useEffect, useState } from "react";
import { ShipmentDetail, ShipmentDetailsProps } from "./ShipmentDetails.types";
import { mockShipmentDetails } from "./ShipmentDetails.mockData";
import { getTimelineStatus } from "./ShipmentDetails.utils";
import {
  ShipmentContainer,
  ShipmentHeader,
  ShipmentId,
  StatusBadge,
  PriorityBadge,
  InfoGrid,
  InfoItem,
  TrackingSection,
  TrackingNumber,
  Timeline,
  TimelineItem,
  TimelineContent,
  LoadingState,
  ErrorState
} from "./ShipmentDetails.styles";

export default function ShipmentDetails({
  shipmentId,
  shipmentData,
  apiUrl,
  shipment: propShipment,
  onTrackingClick,
  onError,
  onLoad,
  showTimeline = true,
  showTrackingSection = true,
  compactMode = false,
}: ShipmentDetailsProps) {
  const [shipment, setShipment] = useState<ShipmentDetail | null>(
    propShipment || null
  );
  const [loading, setLoading] = useState(Boolean(shipmentId && !propShipment)); // Only loading if we need to fetch
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // If shipment is already provided as prop, use it
    if (propShipment) {
      setShipment(propShipment);
      onLoad?.(propShipment);
      return;
    }

    // If shipmentData is provided as JSON string (for web component usage)
    if (shipmentData) {
      try {
        const parsedShipment = JSON.parse(shipmentData);
        setShipment(parsedShipment);
        onLoad?.(parsedShipment);
        return;
      } catch (err) {
        const errorMsg = "Invalid shipment data format";
        setError(errorMsg);
        onError?.(errorMsg);
        return;
      }
    }

    // If shipmentId is provided, fetch from mock data or API
    if (shipmentId && !propShipment) {
      setLoading(true);
      setError(null);

      // Reduce delay for better UX
      setTimeout(() => {
        if (apiUrl) {
          // If API URL provided, make actual API call
          fetch(`${apiUrl}/shipments/${shipmentId}`)
            .then((response) => {
              if (!response.ok) throw new Error("Shipment not found");
              return response.json();
            })
            .then((data: ShipmentDetail) => {
              setShipment(data);
              setLoading(false);
              onLoad?.(data);
            })
            .catch((err) => {
              const errorMsg = `Failed to load shipment: ${err.message}`;
              setError(errorMsg);
              setLoading(false);
              onError?.(errorMsg);
            });
        } else {
          // Use mock data - immediate response
          const foundShipment = mockShipmentDetails[shipmentId];
          if (foundShipment) {
            setShipment(foundShipment);
            setLoading(false);
            onLoad?.(foundShipment);
          } else {
            const errorMsg = `Shipment ${shipmentId} not found`;
            setError(errorMsg);
            setLoading(false);
            onError?.(errorMsg);
          }
        }
      }, 100); // Minimal delay to avoid flash
    }
  }, [shipmentId, shipmentData, propShipment, apiUrl, onLoad, onError]);

  const handleTrackingClick = () => {
    if (shipment && onTrackingClick) {
      onTrackingClick(shipment.trackingNumber, shipment.carrier);
    }
  };

  if (loading) {
    return (
      <ShipmentContainer>
        <LoadingState>Loading shipment details...</LoadingState>
      </ShipmentContainer>
    );
  }

  if (error) {
    return (
      <ShipmentContainer>
        <ErrorState>
          <h3>Error</h3>
          <p>{error}</p>
        </ErrorState>
      </ShipmentContainer>
    );
  }

  if (!shipment && !loading) {
    // Only show "No Data" if we're not loading and have no shipment
    if (!shipmentId && !shipmentData && !propShipment) {
      return (
        <ShipmentContainer>
          <ErrorState>
            <h3>No Data</h3>
            <p>No shipment data provided</p>
          </ErrorState>
        </ShipmentContainer>
      );
    }

    // If we have an ID but no shipment yet, show loading
    return (
      <ShipmentContainer>
        <LoadingState>Loading shipment details...</LoadingState>
      </ShipmentContainer>
    );
  }

  const timeline = getTimelineStatus(shipment.status);

  return (
    <ShipmentContainer>
      <ShipmentHeader>
        <div>
          <ShipmentId>Shipment {shipment.id}</ShipmentId>
          <div
            style={{
              marginTop: "5px",
              color: "#666",
              fontSize: compactMode ? "0.9rem" : "1rem",
            }}
          >
            Order {shipment.orderId}
          </div>
        </div>
        <div>
          <StatusBadge status={shipment.status}>{shipment.status}</StatusBadge>
          <PriorityBadge priority={shipment.priority}>
            {shipment.priority}
          </PriorityBadge>
        </div>
      </ShipmentHeader>

      <InfoGrid>
        <InfoItem>
          <h3>Customer</h3>
          <p>{shipment.customer}</p>
        </InfoItem>
        <InfoItem>
          <h3>Email</h3>
          <p>{shipment.email}</p>
        </InfoItem>
        <InfoItem>
          <h3>Ship Date</h3>
          <p>{shipment.shipDate}</p>
        </InfoItem>
        <InfoItem>
          <h3>Est. Delivery</h3>
          <p>{shipment.estimatedDelivery}</p>
        </InfoItem>

        {!compactMode && (
          <>
            <InfoItem>
              <h3>Weight</h3>
              <p>{shipment.weight} lbs</p>
            </InfoItem>
            <InfoItem>
              <h3>Dimensions</h3>
              <p>{shipment.dimensions}</p>
            </InfoItem>
            <InfoItem>
              <h3>Package Type</h3>
              <p>{shipment.packageType}</p>
            </InfoItem>
            <InfoItem>
              <h3>Items Count</h3>
              <p>{shipment.items}</p>
            </InfoItem>
          </>
        )}
      </InfoGrid>

      <InfoItem style={{ marginBottom: "20px" }}>
        <h3>Shipping Address</h3>
        <p>{shipment.fullAddress}</p>
      </InfoItem>

      {shipment.specialInstructions && (
        <InfoItem style={{ marginBottom: "20px" }}>
          <h3>Special Instructions</h3>
          <p>{shipment.specialInstructions}</p>
        </InfoItem>
      )}

      {showTrackingSection && (
        <TrackingSection>
          <h3
            style={{
              margin: "0 0 10px 0",
              color: "#666",
              fontSize: "14px",
              textTransform: "uppercase",
            }}
          >
            Tracking Information
          </h3>
          <div style={{ marginBottom: "10px" }}>
            <strong>Carrier:</strong> {shipment.carrier}
          </div>
          <div style={{ marginBottom: "15px" }}>
            <strong>Tracking Number:</strong>
          </div>
          <TrackingNumber
            style={{ cursor: onTrackingClick ? "pointer" : "default" }}
            onClick={handleTrackingClick}
          >
            {shipment.trackingNumber}
          </TrackingNumber>
        </TrackingSection>
      )}

      {showTimeline && (
        <Timeline>
          <h3 style={{ marginBottom: "20px", color: "#333" }}>
            Shipment Progress
          </h3>
          {timeline.map((item, index) => (
            <TimelineItem key={index} isActive={item.isActive}>
              <TimelineContent isActive={item.isActive}>
                <div style={{ fontWeight: item.isActive ? "600" : "normal" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: "14px", color: "#6c757d" }}>
                  {item.description}
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      )}
    </ShipmentContainer>
  );
}
