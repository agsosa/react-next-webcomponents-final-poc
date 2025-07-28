// This is a higher-order component (HOC) that wraps a given (web) component 
// with a StyledThemeProvider and all other necessary app providers so web components 
// can function correctly in the remote apps.

import StyledThemeProvider from "@/components/StyledThemeProvider";

const withProviders = (Component: React.ComponentType<any>) => {
  return function WrappedComponent(props: any) {
    return (
      <StyledThemeProvider>
        <Component {...props} />
      </StyledThemeProvider>
    );
  };
};

export default withProviders;
