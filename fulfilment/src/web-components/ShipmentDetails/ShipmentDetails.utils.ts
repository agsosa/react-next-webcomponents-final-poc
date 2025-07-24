import { ShipmentStatus } from './types';

export const getTimelineStatus = (status: ShipmentStatus) => {
  const timeline = [
    {
      step: "preparing",
      label: "Order Preparing",
      description: "Items being gathered and prepared",
    },
    {
      step: "packed",
      label: "Package Packed",
      description: "Items packed and ready for pickup",
    },
    {
      step: "shipped",
      label: "Package Shipped",
      description: "Package picked up by carrier",
    },
    {
      step: "delivered",
      label: "Package Delivered",
      description: "Package delivered to destination",
    },
  ];

  const statusOrder: ShipmentStatus[] = [
    "preparing",
    "packed",
    "shipped",
    "delivered",
  ];
  const currentIndex = statusOrder.indexOf(status);

  return timeline.map((item, index) => ({
    ...item,
    isActive: index <= currentIndex,
  }));
};