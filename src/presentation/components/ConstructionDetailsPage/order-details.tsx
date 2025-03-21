import { Card, Divider, Space } from "antd";
import React from "react";
import Receipt from "../../static/receipt.png";
import CameraIcon from "../../static/camera-icon.svg";

const OrderDetails = () => {
  const data = {
    price: "1.2334.000 vnđ",
    images: [Receipt, Receipt],
  };

  return (
    <Card styles={{ body: { padding: "12px" } }}>
      <div className="text-sm">
        <div className="font-title text-lg font-bold">Thông tin đơn hàng</div>
        <Divider className="my-3" />
        <div className="flex flex-col gap-2">
          <div className="font-normal text-gray5">Giá trị đơn hàng</div>
          <div className="font-medium">{data.price}</div>
        </div>
        <Divider className="my-3" />
        <div>
          <Space>
            <button className="bg-blue1 relative size-[30px] rounded-lg border border-solid border-blue3 text-blue4">
              <img
                src={CameraIcon}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </button>
            <div className="text-xs">Chụp hình chứng từ mua hàng</div>
          </Space>
          <div className="mt-3 flex gap-2">
            {data.images.map((image, index) => (
              <div key={index} className="size-[70px] overflow-hidden rounded">
                <img src={image} className="size-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default OrderDetails;
