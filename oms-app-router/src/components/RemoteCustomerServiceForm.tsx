"use client";
import dynamic from "next/dynamic";
import useEventListener from "../hooks/useEventListener";
import Skeleton from "./Skeleton";

type FormData = {
  fullName?: string;
  email?: string;
  phone?: string;
  orderNumber?: string;
  priority?: "low" | "medium" | "high";
  message?: string;
};

interface RemoteCustomerServiceFormProps {
  title?: string;
  subtitle?: string;
  issueName?: string;
  showHeader?: boolean;
  submitUrl?: string;
  successRedirect?: string;
  errorRedirect?: string;
  initialValues?: FormData;
  requireOrderNumber?: boolean;
  allowedPriorities?: Array<"low" | "medium" | "high">;
  onSubmit?: (data: any) => void;
  onSuccess?: (data: any, response?: any) => void;
  onError?: (error: string, data?: any) => void;
}

enum Event {
  OnSubmit = "onSubmit",
  OnSuccess = "onSuccess",
  OnError = "onError",
}

function RemoteCustomerServiceForm({
  title = "Soporte al Cliente",
  subtitle,
  issueName,
  showHeader = true,
  submitUrl,
  successRedirect,
  errorRedirect,
  initialValues,
  requireOrderNumber = false,
  allowedPriorities = ["low", "medium", "high"],
  onSubmit,
  onSuccess,
  onError,
}: RemoteCustomerServiceFormProps) {
  // Setup handlers for custom events
  const handleSubmit = (event: CustomEvent) => {
    console.log("Customer service form submitted", event);

    // Call the parent onSubmit handler if provided
    if (onSubmit) {
      onSubmit(event.detail);
    }
  };

  const handleSuccess = (
    event: CustomEvent<{ data: FormData; response: object }>
  ) => {
    console.log("Customer service form success", event);

    // Call the parent onSuccess handler if provided
    if (onSuccess) {
      onSuccess(event.detail.data, event.detail.response);
    }
  };

  const handleError = (event: CustomEvent<{ error: string; data?: FormData }>) => {
    console.log("Customer service form error", event);

    // Call the parent onError handler if provided
    if (onError) {
      onError(event.detail.error, event.detail.data);
    }
  };

  // Set up event listeners for form events
  const elementName = "customer-service-form"
  useEventListener(elementName, Event.OnSubmit, handleSubmit);
  useEventListener(elementName, Event.OnSuccess, handleSuccess);
  useEventListener(elementName, Event.OnError, handleError);

  return (
    <customer-service-form
      title={title}
      subtitle={subtitle}
      issue-name={issueName}
      show-header={showHeader ? "true" : "false"}
      submit-url={submitUrl}
      success-redirect={successRedirect}
      error-redirect={errorRedirect}
      initial-values={JSON.stringify(initialValues || {})}
      require-order-number={requireOrderNumber ? "true" : "false"}
      allowed-priorities={JSON.stringify(allowedPriorities)}
    />
  );
}

export default dynamic(() => Promise.resolve(RemoteCustomerServiceForm), {
  ssr: false,
  loading: () => <Skeleton style={{ width: "100%", height: "879px" }} />,
});

export type { RemoteCustomerServiceFormProps };
