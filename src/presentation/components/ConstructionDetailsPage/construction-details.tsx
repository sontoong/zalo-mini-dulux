import React from "react";
import { Card, Divider, Space } from "antd";
import { Button, Icon } from "zmp-ui";
import LocationIcon from "../../static/location-icon.svg";

const ConstructionDetails = () => {
  const data = {
    id: "1234",
    constructionType: "Bệnh viện",
    paintType: "Sơn Dulux 1",
    constructionAddress: "456 Hai Bà Trưng, quận 1, HCM",
    contactName: "Phạm Văn Hai",
    contactNumber: "0929383844",
    contactRole: "Chủ nhà",
    estPrice: "1.2334.000 vnđ",
    date: "12/04/2025",
  };

  return (
    <Card styles={{ body: { padding: "12px" } }}>
      <div className="text-sm">
        <div className="font-title text-lg font-bold">Thông tin công trình</div>
        <Divider className="my-3" />
        <div className="flex flex-col gap-2">
          <div className="font-normal text-gray5">Mã công trình</div>
          <div className="font-medium text-black">{data.id}</div>
        </div>
        <Divider className="my-3" />
        <div className="flex flex-col gap-2">
          <div className="font-normal text-gray5">Loại công trình</div>
          <div className="font-medium text-black">{data.constructionType}</div>
        </div>
        <Divider className="my-3" />
        <div className="flex flex-col gap-2">
          <div className="font-normal text-gray5">Loại sơn</div>
          <div className="font-medium text-black">{data.paintType}</div>
        </div>
        <Divider className="my-3" />
        <Space direction="vertical">
          <div className="flex flex-col gap-2">
            <div className="font-normal text-gray5">Địa chỉ công trình</div>
            <div className="font-medium text-black">
              {data.constructionAddress}
            </div>
          </div>
          <Button
            variant="secondary"
            className="!size-fit !rounded-lg !bg-blue2 !py-1 !pl-2 !pr-0 !text-sm !font-normal"
            suffixIcon={
              <img
                src={LocationIcon}
                className="absolute top-1/2 -translate-y-1/2"
              />
            }
          >
            Xem vị trí công trình
          </Button>
        </Space>
        <Divider className="my-3" />
        <div className="flex flex-col gap-2">
          <div className="font-normal text-gray5">Người liên hệ</div>
          <div className="font-medium text-black">
            {data.contactName} ({data.contactNumber})
          </div>
        </div>
        <Divider className="my-3" />
        <div className="flex flex-col gap-2">
          <div className="font-normal text-gray5">Vai trò</div>
          <div className="font-medium text-black">{data.contactRole}</div>
        </div>
        <Divider className="my-3" />
        <div className="flex flex-col gap-2">
          <div className="font-normal text-gray5">
            Giá trị ước tính công trình
          </div>
          <div className="font-medium text-black">{data.estPrice}</div>
        </div>
        <Divider className="my-3" />
        <div className="flex flex-col gap-2">
          <div className="font-normal text-gray5">Thời gian sơn công trình</div>
          <div className="font-medium text-black">{data.date}</div>
        </div>
      </div>
    </Card>
  );
};

export default ConstructionDetails;
