import React, { useState } from "react";
import { ElevateButton } from "../common/button";
import { Icon, Sheet } from "zmp-ui";
import { createPortal } from "react-dom";
import { Card, Form, Input } from "antd";
import { ImageUpload, UploadImage } from "../common/image-upload";
import { InputNumber } from "../common/input-number";

export const ConfirmOrderButton = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [images, setImages] = useState<UploadImage[]>([]);

  const onFinish = (values: any) => {
    console.log(values);
    setVisible(false);
    setImages([]);
  };

  return (
    <>
      <ElevateButton
        text="Xác nhận"
        className="bg-greenBtn text-sm drop-shadow-greenBtn"
        onClick={() => setVisible(true)}
      />
      {createPortal(
        <Sheet
          title="Ghi nhận thông tin đơn hàng"
          visible={visible}
          onClose={() => {
            setVisible(false);
            form.resetFields();
            setImages([]);
          }}
          mask
          handler
          swipeToClose
          unmountOnClose
          style={{ background: "#F7F8FA" }}
          // defaultSnapPoint={0.5}
          // snapPoints={() => [0.5, 0.8]}
        >
          <Form
            form={form}
            onFinish={onFinish}
            autoComplete="off"
            className="px-5"
          >
            <Form.Item
              name="price"
              label="Giá trị đơn hàng"
              rules={[{ type: "number", required: true }]}
            >
              <InputNumber.Currency
                placeholder="Giá trị đơn hàng"
                className="w-full border-0 p-3 drop-shadow"
              />
            </Form.Item>
            <Form.Item>
              <Card
                title={
                  <div className="flex gap-3">
                    <button
                      type="button"
                      className="size-[30px] rounded-lg border border-solid border-blue4 bg-blue3 text-blue4"
                    >
                      <Icon icon="zi-camera" size={20} />
                    </button>
                    <div className="flex flex-col">
                      <div className="text-xs">Chụp hình chứng từ mua hàng</div>
                      <div className="text-2xs text-gray5">(Tối đa 3 hình)</div>
                    </div>
                  </div>
                }
                extra={
                  <button
                    type="button"
                    className="rounded-md bg-greenBtn p-[6px] text-xs text-white"
                  >
                    Chụp ảnh
                  </button>
                }
                className="drop-shadow"
              >
                <ImageUpload
                  images={images}
                  setImages={setImages}
                  maxCount={3}
                />
              </Card>
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
