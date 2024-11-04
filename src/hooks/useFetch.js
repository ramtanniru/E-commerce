import useSWR from 'swr';

export const useFetch = (url) => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);
  return { data, error };
};
