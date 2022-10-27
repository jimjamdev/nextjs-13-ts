'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
        <div className="error">
            <p>Something went wrong on FAQs!</p>
            <button onClick={() => reset()}>Reset error boundary</button>
        </div>
  );
}
