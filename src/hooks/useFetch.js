'use client'

import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      }
      fetchData();
  }, [url])

  return { data }
}

export default useFetch;