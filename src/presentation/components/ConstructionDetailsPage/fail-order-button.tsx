import React, { useState } from "react";
import { ElevateButton } from "../common/button";
import { createPortal } from "react-dom";
import { Icon, Picker, Sheet } from "zmp-ui";
import { Form, Input } from "antd";

export const FailOrderButton = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);

  const onFinish = (values: any) => {
    console.log(values);
    setVisible(false);
  };

  return (
    <>
      <ElevateButton
        text="Thất bại"
        className="bg-red3 text-sm drop-shadow-red3"
        onClick={() => setVisible(true)}
      />
      {createPortal(
        <Sheet
          title="Nhập lý do thất bại"
          visible={visible}
          onClose={() => {
            setVisible(false);
            form.resetFields();
          }}
          mask
          handler
          swipeToClose
          unmountOnClose
          style={{ background: "#F7F8FA" }}
        >
          <Form
            form={form}
            onFinish={onFinish}
            autoComplete="off"
            className="px-5"
            onFinishFailed={(value) => console.log(value)}
          >
            <Form.Item
              name="reason"
              label="Chọn lý do thất bại"
              rules={[{ required: true }]}
              getValueFromEvent={(e) => e.option.value}
              className="drop-shadow"
            >
              <Picker
                mask
                maskClosable
                title="Chọn lý do"
                placeholder="Chọn lý do"
                suffix={<Icon icon="zi-chevron-down" />}
                data={[
                  {
                    options: [
                      {
                        key: "key1",
                        value: 1,
                        displayName:
                          "Công trình do công ty/ nhà thầu xây dựng chỉ định loại sơn khác",
                      },
                    ],
                    name: "option",
                  },
                ]}
                action={{
                  text: "Close",
                  close: true,
                }}
                inputClass="!text-sm !border-0"
                formatPickedValueDisplay={(value) => {
                  return value.option?.displayName;
                }}
              />
            </Form.Item>
            <Form.Item
              name="description"
              label="Mô tả"
              rules={[{ type: "string", required: true }]}
            >
              <Input.TextArea
                placeholder="Nhập lý do khác hoặc tên loại sơn khác"
                autoSize={{ minRows: 2, maxRows: 6 }}
                className="border-0 p-3 drop-shadow"
              />
            </Form.Item>
            <Form.Item>
              <ElevateButton
                text="Xác nhận"
                className="w-full bg-greenBtn text-sm drop-shadow-greenBtn"
                onClick={() => form.submit()}
              />
            </Form.Item>
          </Form>
        </Sheet>,
        document.body,
      )}
    </>
  );
};
