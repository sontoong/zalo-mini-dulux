import React, { useState } from "react";
import { ElevateButton } from "../common/button";
import { createPortal } from "react-dom";
import { Icon, Picker, Sheet } from "zmp-ui";
import { Input } from "antd";
import { Form } from "../common/form";

export const FailOrderButton = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);

  const onFinish = (values: any) => {
    console.log(values);
    setVisible(false);
    form.resetFields();
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
          title={
            (
              <span className="font-title">Nhập lý do thất bại</span>
            ) as unknown as string
          }
          visible={visible}
          onClose={() => {
            setVisible(false);
            form.resetFields();
          }}
          mask
          handler={false}
          swipeToClose
          unmountOnClose
          style={{ background: "#F7F8FA", paddingTop: "20px" }}
        >
          <div className="text-center text-sm">
            Vui lòng nhập lý do công trình thất bại
          </div>
          <Form
            form={form}
            onFinish={onFinish}
            autoComplete="off"
            className="flex flex-col gap-5 px-5 pt-3"
            onFinishFailed={(value) => console.log(value)}
          >
            <Form.Item
              name="reason"
              label="Chọn lý do thất bại"
              labelCol={{ className: "!pb-0" }}
              rules={[{ required: true }]}
              getValueFromEvent={(e) => e.option.value}
              className="drop-shadow"
              style={{ marginBottom: "0px" }}
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
              labelCol={{ className: "!pb-0" }}
              rules={[{ type: "string", required: true }]}
              style={{ marginBottom: "0px" }}
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
