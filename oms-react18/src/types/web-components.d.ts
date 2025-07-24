declare global {
  namespace JSX {
    interface IntrinsicElements {
      "backoffice-header": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "app-title"?: string;
          username?: string;
          onLoad?: () => void;
        },
        HTMLElement
      >;
      "shipment-details": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "shipment-id"?: string;
          "shipment-data"?: string;
          "api-url"?: string;
          "show-timeline"?: string;
          "show-tracking-section"?: string;
          "compact-mode"?: string;
        },
        HTMLElement
      >;
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
          onSubmit?: (data: any) => void;
          onSuccess?: (data: any, response?: any) => void;
          onError?: (error: string, data?: any) => void;
        },
        HTMLElement
      >;
    }
  }
}

export {};