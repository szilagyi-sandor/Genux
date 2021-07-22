// CHECKED 1.0
import { useEffect, useRef } from "react";

// Helpful for aborting async calls that would set the Components state
// in a callback.
export const useIsMounted = () => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted.current;
};
