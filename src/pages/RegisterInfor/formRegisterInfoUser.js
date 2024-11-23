import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Button } from "antd";

const RegisterInfoUser = ({ initialData, onSubmit, prev }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: initialData?.name || "",
      email: initialData?.email || "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data); // Truyền dữ liệu lên component cha
      })}
    >
      <h2>Thêm thông tin cá nhân</h2>
      <div className="mb-3">
        <label>Tên</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </div>
      <div className="mb-3">
        <label>Email</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </div>
      {prev && (
        <Button style={{ margin: "0 8px" }} onClick={prev}>
          Quay lại
        </Button>
      )}
      <Button type="primary" htmlType="submit" className="mt-3">
        Tiếp tục
      </Button>
    </form>
  );
};

export default RegisterInfoUser;
