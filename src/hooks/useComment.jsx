import { useQuery } from "@tanstack/react-query";

const useComment = () => {
  const {
    isPending,
    data: talk = [],
    refetch,
  } = useQuery({
    queryKey: ["talk"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/talk");
      return res.json();
    },
  });
  return [talk, refetch, isPending];
};

export default useComment;
