import { useQuery } from "@tanstack/react-query";

const useTutorial = () => {
  const {
    isPending,
    data: tutorial = [],
    refetch,
  } = useQuery({
    queryKey: ["tutorial"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/tutorial");
      return res.json();
    },
  });
  return [tutorial, refetch, isPending];
};

export default useTutorial;
