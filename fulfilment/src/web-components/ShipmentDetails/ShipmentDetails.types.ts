export type ShipmentStatus =
  | "preparing"
  | "packed"
  | "shipped"
  | "delivered"
  | "returned";

export type ShipmentPriority = "low" | "normal" | "high" | "urgent";

export interface ShipmentDetail {
  id: string;
  orderId: string;
  customer: string;
  email: string;
  destination: string;
  fullAddress: string;
  carrier: string;
  trackingNumber: string;
  shipDate: string;
  estimatedDelivery: string;
  actualDelivery?: string;
  status: ShipmentStatus;
  priority: ShipmentPriority;
  weight: number;
  dimensions: string;
  items: number;
  packageType: string;
  specialInstructions?: string;
}

export interface ShipmentDetailsProps {
  // Props for web component usage
  shipmentId?: string;
  shipmentData?: string; // JSON string for web component
  apiUrl?: string;

  // React component props
  shipment?: ShipmentDetail;
  onTrackingClick?: (trackingNumber: string, carrier: string) => void;
  onError?: (error: string) => void;
  onLoad?: (shipment: ShipmentDetail) => void;

  // Display options
  showTimeline?: boolean;
  showTrackingSection?: boolean;
  compactMode?: boolean;
}