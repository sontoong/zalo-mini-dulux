import React, { useState } from "react";
import { ElevateButton } from "../common/button";
import { Icon, Sheet } from "zmp-ui";
import { createPortal } from "react-dom";
import { Card } from "antd";
import { ImageUpload, UploadImage } from "../common/image-upload";
import { InputNumber } from "../common/input-number";
import { Form } from "../common/form";

export const ConfirmOrderButton = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [images, setImages] = useState<UploadImage[]>([]);

  const onFinish = (values: any) => {
    console.log(values);
    setVisible(false);
    form.resetFields();
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
          handler={false}
          swipeToClose
          unmountOnClose
          style={{ background: "#F7F8FA", paddingTop: "20px" }}
          height={"700px"}
        >
          <Form
            form={form}
            onFinish={onFinish}
            autoComplete="off"
            className="flex flex-1 flex-col gap-3 px-5"
          >
            <Form.Item
              name="price"
              label="Giá trị đơn hàng"
              labelCol={{ className: "!pb-0" }}
              rules={[{ type: "number", required: true }]}
              style={{ marginBottom: "0px" }}
            >
              <InputNumber.Currency
                placeholder="Giá trị đơn hàng"
                className="w-full border-0 px-3 py-2 shadow"
              />
            </Form.Item>
            <Form.Item noStyle>
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
                    className="rounded-[4px] bg-greenBtn p-[6px] text-xs text-white"
                  >
                    Chụp ảnh
                  </button>
                }
                className="shadow"
                styles={{
                  header: {
                    borderBottom: "1px solid rgba(200, 200, 200, 0.7)",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                  },
                  body: {
                    padding: "12px 12px 20px 12px",
                  },
                }}
              >
                <ImageUpload
                  images={images}
                  setImages={setImages}
                  maxCount={3}
                />
              </Card>
            </Form.Item>
          </Form>
          <div className="w-full px-5 py-10">
            <ElevateButton
              text="Xác nhận"
              className="w-full bg-greenBtn text-sm drop-shadow-greenBtn"
              onClick={() => form.submit()}
            />
          </div>
        </Sheet>,
        document.body,
      )}
    </>
  );
};
