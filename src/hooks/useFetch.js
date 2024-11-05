export const useFetch = async (func,url) => {
  const res = await fetch(url);
  const data = await res.json();
  func(data);
};
