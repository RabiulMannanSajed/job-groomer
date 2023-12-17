import { useQuery } from "@tanstack/react-query";

const useApplier = () => {
  const {
    isPending,
    data: apply = [],
    refetch,
  } = useQuery({
    queryKey: ["apply"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/apply");
      return res.json();
    },
  });
  return [apply, refetch, isPending];
};
export default useApplier;
/*
 */
