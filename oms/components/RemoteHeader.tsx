import getConfig from "next/config";
import Script from "next/script";
import { useState, useEffect } from "react";
import styled from "styled-components";

// Skeleton placeholder that matches the header dimensions
const HeaderSkeleton = styled.header`
  background: #fff;
  border-bottom: 1px solid #e9ecef;
  padding: 15px 0;
  height: 62px; /* Match actual header height */
  
  .skeleton-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .skeleton-logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .skeleton-icon {
    width: 32px;
    height: 32px;
    background: #f0f0f0;
    border-radius: 4px;
    animation: pulse 1.5s ease-in-out infinite;
  }
  
  .skeleton-text {
    width: 80px;
    height: 20px;
    background: #f0f0f0;
    border-radius: 4px;
    animation: pulse 1.5s ease-in-out infinite;
  }
  
  .skeleton-user {
    width: 120px;
    height: 16px;
    background: #f0f0f0;
    border-radius: 4px;
    animation: pulse 1.5s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`;

export default function RemoteHeader() {
  const { publicRuntimeConfig: { fulfilmentUrl } } = getConfig();

  const [isLoaded, setIsLoaded] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    // Check if web component is already defined
    if (customElements.get('backoffice-header')) {
      setIsLoaded(true);
      return;
    }

    // Show skeleton after a small delay to avoid flickering for fast loads
    const skeletonTimeout = setTimeout(() => {
      if (!isLoaded) {
        setShowSkeleton(true);
      }
    }, 100);

    // Listen for when the web component gets defined
    const checkWebComponent = () => {
      if (customElements.get('backoffice-header')) {
        setIsLoaded(true);
        setShowSkeleton(false);
        clearTimeout(skeletonTimeout);
      } else {
        requestAnimationFrame(checkWebComponent);
      }
    };
    
    checkWebComponent();

    return () => clearTimeout(skeletonTimeout);
  }, [isLoaded]);

  return (
    <>
      <Script 
        src={fulfilmentUrl + "/web-components-vite/web-components.umd.js"}
        strategy="beforeInteractive"
        onLoad={() => {
          // Additional safety check
          const interval = setInterval(() => {
            if (customElements.get('backoffice-header')) {
              setIsLoaded(true);
              setShowSkeleton(false);
              clearInterval(interval);
            }
          }, 50);
          
          // Clear interval after 5 seconds max to prevent memory leaks
          setTimeout(() => clearInterval(interval), 5000);
        }}
      />

      {showSkeleton && !isLoaded ? (
        <HeaderSkeleton>
          <div className="skeleton-content">
            <div className="skeleton-logo">
              <div className="skeleton-icon" />
              <div className="skeleton-text" />
            </div>
            <div className="skeleton-user" />
          </div>
        </HeaderSkeleton>
      ) : isLoaded ? (
        <backoffice-header />
      ) : (
        // Reserve space immediately to prevent layout shift
        <div style={{ height: '62px' }} />
      )}
    </>
  );
}
