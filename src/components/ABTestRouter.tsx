
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getABTestVariant } from '../utils/abTesting';

const ABTestRouter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    // Only run A/B test on the root path and if we haven't redirected yet
    if (location.pathname === '/' && !hasRedirected) {
      const variant = getABTestVariant();
      
      if (variant === 'vedic') {
        setHasRedirected(true);
        navigate('/vedicscience', { replace: true });
      } else {
        setHasRedirected(true);
      }
    }
  }, [location.pathname, navigate, hasRedirected]);

  return <>{children}</>;
};

export default ABTestRouter;
