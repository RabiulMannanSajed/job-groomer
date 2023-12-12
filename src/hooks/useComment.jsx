import { useQuery } from "@tanstack/react-query";

const useComment = () => {
  const {
    isPending,
    data: comment = [],
    refetch,
  } = useQuery({
    queryKey: ["comment"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/comment");
      return res.json();
    },
  });
  return [comment, refetch, isPending];
};

export default useComment;
