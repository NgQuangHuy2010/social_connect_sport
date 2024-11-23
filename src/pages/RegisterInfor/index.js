import React, { useState } from "react";
import { Button, Steps, message } from "antd";
import ChooseSport from "./formChooseSport";
import RegisterInfoUser from "./formRegisterInfoUser";

const RegisterInformation = () => {
  const [current, setCurrent] = useState(0);

  // State lưu trữ dữ liệu từ các bước
  const [formData, setFormData] = useState({
    sports: [],
    userInfo: {},
  });

  // Lưu dữ liệu từ các bước
  const handleStepData = (step, data) => {
    if (step === 0) {
      setFormData((prev) => ({ ...prev, sports: data }));
    } else if (step === 1) {
      setFormData((prev) => ({ ...prev, userInfo: data }));
    }
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleComplete = () => {
    // Log dữ liệu từ cả 2 form khi hoàn tất
    console.log("Dữ liệu đăng ký:", formData);
    message.success("Đăng ký thành công!");
  };

  const steps = [
    {
      title: "Chọn các môn thể thao yêu thích",
      content: (
        <ChooseSport
          initialData={formData.sports}
          onSubmit={(data) => {
            handleStepData(0, data);
            next();
          }}
        />
      ),
    },
    {
      title: "Thêm thông tin cá nhân",
      content: (
        <RegisterInfoUser
          initialData={formData.userInfo}
          onSubmit={(data) => {
            handleStepData(1, data);
            next();
          }}
          prev={prev}
        />
      ),
    },
    {
      title: "Hoàn thành",
      content: (
        <div>
          <h3>Đăng ký thành công</h3>
        </div>
      ),
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <div className="p-5 m-5">
      <Steps current={current} items={items} />
      <div style={{ marginTop: 16 }}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {/* Nút Hoàn tất ở bước cuối */}
        {current === steps.length - 1 && (
          <>
            <Button type="primary" onClick={handleComplete}>
              Hoàn tất
            </Button>
            <Button style={{ margin: "0 8px" }} onClick={prev}>
              Quay lại
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default RegisterInformation;
