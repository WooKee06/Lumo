import { useEffect, useRef, useState } from 'react';

export function useSeach(query: string) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const controllerRef = useRef<any>(null);
  const requestIdRef = useRef(0);

  useEffect(() => {
    if (!query) return;

    const id = ++requestIdRef.current;

    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const controller = new AbortController();
    controllerRef.current = controller;

    async function Fetchdata() {
      try {
        setLoading(true);

        const res = await fetch(`http://localhost:3000/api/tracks?q=${query}`);

        const json = await res.json();
        if (id !== requestIdRef.current) return;

        setData(json);
      } catch (error: any) {
        if (error.name !== 'AbortError') {
          console.error(error);
        }
      } finally {
        if (id === requestIdRef.current) {
          setLoading(false);
        }
      }
    }

    Fetchdata();
  }, [query]);

  return [data, loading];
}
