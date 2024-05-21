import { useEffect } from 'react';

const useBodyOverflow = (condition: boolean) => {
  useEffect(() => {
    document.body.style.overflow = condition ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [condition]);
};

export default useBodyOverflow;
