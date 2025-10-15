import { Button, Skeleton, Table } from "antd";
import Title from "antd/es/typography/Title";
import type { IProduct } from "../interfaces/IProduct";
import { Link } from "react-router-dom";
import useDelete from "../hooks/useDelete";
import useList from "../hooks/useList";

const { Column } = Table;
const ProductList = () => {
  const { data, isLoading, error } = useList({ resource: "BOOKS" });

  const { mutate, isPending } = useDelete({ resource: "BOOKS" });

  if (error) return <div>Error: {error.message}</div>;
  const onHandleDelete = (id: number) => {
    // call API xóa sản phẩm
    const confirm = window.confirm("Are you sure?");
    if (!confirm) return;
    mutate(id);
  };

  return (
    <div>
      <Title level={2}>Danh sách sách</Title>
      <Button type="primary">
        <Link to="/admin/products/add" style={{ color: "#fff" }}>
          Thêm mới
        </Link>
      </Button>

      <Skeleton loading={isLoading}>
        <Table dataSource={data}>
          <Column title="Tên sách" dataIndex="tenSach" key="tenSach" />
          <Column title="Mô tả" dataIndex="moTa" key="moTa" />
          <Column
            title="Năm suất bản"
            dataIndex="namXuatBan"
            key="namXuatBan"
          />
          <Column
            title="Nhà xuất bản"
            dataIndex="nhaXuatBan"
            key="nhaXuatBan"
          />
          <Column title="Tác giả" dataIndex="tacGia" key="tacGia" />
          <Column
            render={(item: IProduct) => {
              return (
                <div>
                  <Button type="primary">
                    <Link to={`/admin/products/edit/${item.id}`}>Edit</Link>
                  </Button>
                  <Button
                    type="primary"
                    danger
                    onClick={() => onHandleDelete(item.id)}
                  >
                    {isPending ? "Deleting..." : "Delete"}
                  </Button>
                </div>
              );
            }}
          />
        </Table>
      </Skeleton>
    </div>
  );
};

export default ProductList;
