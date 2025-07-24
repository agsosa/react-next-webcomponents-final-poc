import styled from "styled-components";

// Styled components (self-contained for web component)
export const ShipmentContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", sans-serif;
  width: 100%;
`;

export const ShipmentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #dee2e6;
`;

export const ShipmentId = styled.h2`
  color: #333;
  margin: 0;
  font-size: 1.5rem;
`;

export const StatusBadge = styled.span<{ status: string }>`
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  background: ${(props) => {
    switch (props.status) {
      case "preparing":
        return "#fff3cd";
      case "packed":
        return "#d1ecf1";
      case "shipped":
        return "#d4edda";
      case "delivered":
        return "#d1e7dd";
      case "returned":
        return "#f8d7da";
      default:
        return "#e9ecef";
    }
  }};
  color: ${(props) => {
    switch (props.status) {
      case "preparing":
        return "#856404";
      case "packed":
        return "#0c5460";
      case "shipped":
        return "#155724";
      case "delivered":
        return "#0f5132";
      case "returned":
        return "#721c24";
      default:
        return "#495057";
    }
  }};
`;

export const PriorityBadge = styled.span<{ priority: string }>`
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  background: ${(props) => {
    switch (props.priority) {
      case "urgent":
        return "#dc3545";
      case "high":
        return "#fd7e14";
      case "normal":
        return "#6c757d";
      case "low":
        return "#28a745";
      default:
        return "#6c757d";
    }
  }};
  color: white;
  margin-left: 10px;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

export const InfoItem = styled.div`
  h3 {
    color: #666;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
    text-transform: uppercase;
  }

  p {
    color: #333;
    font-size: 16px;
    margin: 0;
  }
`;

export const TrackingSection = styled.div`
  background: #f8f9fa;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const TrackingNumber = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  font-family: monospace;
  letter-spacing: 1px;
`;

export const Timeline = styled.div`
  margin-top: 30px;
`;

export const TimelineItem = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  &:before {
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${(props) => (props.isActive ? "#28a745" : "#dee2e6")};
    margin-right: 15px;
    flex-shrink: 0;
  }
`;

export const TimelineContent = styled.div<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "#333" : "#6c757d")};
  font-weight: ${(props) => (props.isActive ? "600" : "normal")};
`;

export const LoadingState = styled.div`
  padding: 20px 0;
  text-align: center;
  color: #666;
  font-style: italic;
`;

export const ErrorState = styled.div`
  padding: 20px;
  text-align: center;
  color: #666;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
`;