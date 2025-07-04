import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useWishes() {
  const { data, error, isLoading } = useSWR("/api/wishes/wishesList", fetcher);
  return {
    wishes: data?.wishes ?? [],
    isLoading,
    error,
  };
}
