import { LeftOutlined, StarFilled } from "@ant-design/icons";
import { Button, Drawer, Form } from "antd";
import React, { useMemo, useState } from "react";
import { Radio } from "../common/radio";
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";

const ViewImage = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const initialValues = {
    imageId: 0,
  };

  const currImg = useMemo(() => {
    return images.find((img) => img.value === form.getFieldValue("imageId"));
  }, [form.getFieldValue("imageId")]);

  return (
    <Form form={form} initialValues={initialValues}>
      <Button onClick={showDrawer}>Xem ảnh</Button>
      {currImg ? (
        <div>
          <span className="break-all">{`${currImg?.server_files}${currImg?.filepath}${currImg?.filename}`}</span>
          <img
            src={`${currImg?.server_files}${currImg?.filepath}${currImg?.filename}`}
            alt=""
          />
        </div>
      ) : null}
      <Drawer
        onClose={onClose}
        open={open}
        width={"100%"}
        closeIcon={<LeftOutlined className="text-[24px] text-white" />}
        styles={{
          header: {
            paddingTop: "var(--zaui-safe-area-inset-top, 16px)",
            borderBottom: "none",
            backgroundColor: "#2f2f2f",
          },
          body: {
            padding: 0,
            backgroundColor: "#2f2f2f",
          },
        }}
      >
        <div className="flex size-full flex-col">
          <div className="flex flex-1 items-center">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              className="h-full"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index} className="!flex items-center">
                  <Form.Item
                    shouldUpdate={(prevValues, curValues) =>
                      prevValues.imageId !== curValues.imageId
                    }
                    noStyle
                  >
                    {({ getFieldValue }) => (
                      <div className="relative max-h-[500px] w-full">
                        <StarFilled
                          className={clsx(
                            "absolute right-3 top-3 text-[18px] text-white",
                            {
                              "text-[#FCDF3A]":
                                img.value === getFieldValue("imageId"),
                            },
                          )}
                        />
                        <img
                          src={`${img?.server_files}${img?.filepath}${img?.filename}`}
                          alt=""
                          className="size-full max-h-[500px] object-contain"
                        />
                      </div>
                    )}
                  </Form.Item>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <Form.Item name="imageId" noStyle>
            <Radio.ButtonGroup
              items={images}
              render={(img) => (
                <div className="relative h-[91px]">
                  <StarFilled className="absolute right-1 top-1 text-[18px] text-white" />
                  <img
                    src={`${img?.server_files}${img?.filepath}${img?.filename}`}
                    className="size-full object-cover"
                  />
                </div>
              )}
              activeRender={(img) => (
                <div className="relative h-[91px]">
                  <StarFilled className="absolute right-1 top-1 text-[18px] text-[#FCDF3A]" />
                  <img
                    src={`${img?.server_files}${img?.filepath}${img?.filename}`}
                    className="size-full object-cover"
                  />
                </div>
              )}
              gap={0}
              className="flex w-full"
            />
          </Form.Item>
        </div>
      </Drawer>
    </Form>
  );
};

export default ViewImage;

type Image = {
  id: number;
  server_files: string;
  filepath: string;
  filename: string;
};

const image = {
  id: Date.now(),
  server_files: "https://img.azicloud.vn",
  filepath: "/upload/pango/eventai/31123/",
  filename: "10114634-a6a5-43ff-9474-b6ea27c0d17e638780779653198467.png",
};

const images: (Image & { value: number })[] = Array.from(
  { length: 5 },
  (_, index) => ({
    ...image,
    value: index,
  }),
);
