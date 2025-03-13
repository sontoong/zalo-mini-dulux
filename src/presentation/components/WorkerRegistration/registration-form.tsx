import { Checkbox, Form, Input } from "antd";
import React from "react";
import { ElevateButton } from "../common/button";
import { useNavigate } from "zmp-ui";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  function onSubmit() {
    navigate("/worker-registration-result");
  }

  return (
    <Form
      form={form}
      className="flex h-full flex-col justify-between"
      onFinish={onSubmit}
    >
      <div>
        <Form.Item
          name="name"
          label="Họ và tên"
          rules={[{ type: "string", required: true }]}
        >
          <Input
            placeholder="Ví dụ: Nguyễn Văn A"
            variant="borderless"
            className="bg-white p-3 text-sm shadow"
          />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Số điện thoại"
          rules={[{ type: "string", required: true }]}
          messageVariables={{ label: "số điện thoại" }}
        >
          <Input
            placeholder="Ví dụ: 12343445"
            variant="filled"
            className="bg-blue2 p-3 text-sm"
          />
        </Form.Item>
      </div>
      <div>
        <Form.Item
          name="check1"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Vui lòng chấp nhận.")),
            },
          ]}
          valuePropName="checked"
        >
          <Checkbox className="text-xs">
            Nhấn quan tâm OA Nhà thầu chuyên nghiệp Dulux để nhận các thông tin
            mới nhất bạn nhé
          </Checkbox>
        </Form.Item>
        <Form.Item
          name="check2"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Vui lòng chấp nhận.")),
            },
          ]}
          valuePropName="checked"
        >
          <Checkbox className="text-xs">
            Vui lòng cấp quyền truy cập vị trí để xác định vị trí công trình.
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <ElevateButton
            text="Hoàn thành"
            className="w-full bg-greenBtn text-sm drop-shadow-greenBtn"
          />
        </Form.Item>
      </div>
    </Form>
  );
};

export default RegistrationForm;
