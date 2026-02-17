import { useEffect, useState } from 'react';

export function useDebouce(value: string, delay = 500) {
  const [debouceValue, setDebouceValue] = useState<string>(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouceValue(value);
    }, delay);

    return () => clearTimeout(id);
  }, [value, delay]);

  return debouceValue;
}
