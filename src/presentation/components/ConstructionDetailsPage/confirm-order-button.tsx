import React, { useState } from "react";
import { ElevateButton } from "../common/button";
import { Sheet } from "zmp-ui";
import { createPortal } from "react-dom";
import { Card } from "antd";
import { ImageUpload, UploadImage } from "../common/image-upload";
import { InputNumber } from "../common/input-number";
import { Form } from "../common/form";
import CameraIcon from "../../static/camera-icon.svg";

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
          title={
            (
              <span className="font-title">Ghi nhận thông tin đơn hàng</span>
            ) as unknown as string
          }
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
                      className="bg-blue1 relative size-[30px] rounded-lg border border-solid border-blue3 text-blue4"
                    >
                      <img
                        src={CameraIcon}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      />
                    </button>
                    <div className="flex flex-col">
                      <div className="text-xs text-black">
                        Chụp hình chứng từ mua hàng
                      </div>
                      <div className="text-2xs font-normal text-gray5">
                        (Tối đa 3 hình)
                      </div>
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
                className="pt-2 shadow"
                styles={{
                  header: {
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
                  className={"customSizedUpload"}
                  itemRender={(originNode, file) => (
                    <div
                      {...originNode.props}
                      style={{
                        width: 71,
                        height: 71,
                        backgroundImage: `url(${file.url})`,
                        backgroundSize: "cover",
                      }}
                    />
                  )}
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
