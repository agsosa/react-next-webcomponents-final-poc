export type FormData = {
  fullName: string;
  email: string;
  phone: string;
  orderNumber?: string;
  priority: 'low' | 'medium' | 'high';
  message: string;
};

export interface CustomerServiceFormProps {
  // Display props
  title?: string;
  subtitle?: string;
  issueName?: string;
  showHeader?: boolean;
  
  // Configuration props
  submitUrl?: string;
  successRedirect?: string;
  errorRedirect?: string;
  
  // Event handlers
  onSubmit?: (data: FormData) => void;
  onSuccess?: (data: FormData, response?: any) => void;
  onError?: (error: string, data?: FormData) => void;
  
  // Initial values
  initialValues?: Partial<FormData>;
  
  // Validation options
  requireOrderNumber?: boolean;
  allowedPriorities?: Array<'low' | 'medium' | 'high'>;
}