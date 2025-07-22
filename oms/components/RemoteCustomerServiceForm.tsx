import dynamic from "next/dynamic";
import useEventListener from "../hooks/useEventListener";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "customer-service-form": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          title?: string;
          subtitle?: string;
          "issue-name"?: string;
          "show-header"?: string;
          "submit-url"?: string;
          "success-redirect"?: string;
          "error-redirect"?: string;
          "initial-values"?: string;
          "require-order-number"?: string;
          "allowed-priorities"?: string;
        },
        HTMLElement
      >;
    }
  }
}

interface RemoteCustomerServiceFormProps {
  title?: string;
  subtitle?: string;
  issueName?: string;
  showHeader?: boolean;
  submitUrl?: string;
  successRedirect?: string;
  errorRedirect?: string;
  initialValues?: {
    fullName?: string;
    email?: string;
    phone?: string;
    orderNumber?: string;
    priority?: 'low' | 'medium' | 'high';
    message?: string;
  };
  requireOrderNumber?: boolean;
  allowedPriorities?: Array<'low' | 'medium' | 'high'>;
  onSubmit?: (data: any) => void;
  onSuccess?: (data: any, response?: any) => void;
  onError?: (error: string, data?: any) => void;
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
  allowedPriorities = ['low', 'medium', 'high'],
  onSubmit,
  onSuccess,
  onError
}: RemoteCustomerServiceFormProps) {
  
  // Set up event listeners for form events
  useEventListener("customer-service-form", "onSubmit", (event) => {
    console.log("Customer service form submitted", event);
    if (onSubmit) {
      onSubmit(event.detail);
    }
  });

  useEventListener("customer-service-form", "onSuccess", (event) => {
    console.log("Customer service form success", event);
    if (onSuccess) {
      onSuccess(event.detail.data, event.detail.response);
    }
  });

  useEventListener("customer-service-form", "onError", (event) => {
    console.log("Customer service form error", event);
    if (onError) {
      onError(event.detail.error, event.detail.data);
    }
  });

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
});

export type { RemoteCustomerServiceFormProps };