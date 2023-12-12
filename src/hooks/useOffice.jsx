import { useQuery } from "@tanstack/react-query";

const useOffice = () => {
  const {
    isPending,
    data: office = [],
    refetch,
  } = useQuery({
    queryKey: ["office"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/office");
      return res.json();
    },
  });
  return [office, refetch, isPending];
};

export default useOffice;
