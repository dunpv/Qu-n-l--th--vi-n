import { useMutation, useQueryClient } from "@tanstack/react-query";
import { add } from "../services/api.services";

const useCreate = ({ resource }: { resource: string }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: any) => await add({ resource, payload }),
    // nếu xóa thành công
    onSuccess: () => {
      // gọi lại API để lấy dữ liệu mới nhất
      queryClient.invalidateQueries({
        queryKey: [resource],
      });
    },
  });
};

export default useCreate;
