import { useMutation } from "@tanstack/react-query";
import { update } from "../services/api.services";
import { useNavigate } from "react-router-dom";

const UseUpdate = ({
  resource,
  id,
}: {
  resource: string;
  id: number | string;
}) => {
  const router = useNavigate();
  return useMutation({
    mutationFn: async (payload: any) =>
      await update({ resource, payload: { ...payload, id: Number(id) } }),
    onSuccess: () => {
      router("/");
    },
  });
};

export default UseUpdate;
