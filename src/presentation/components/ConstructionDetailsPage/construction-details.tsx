import React from "react";
import { Card, Divider, Space } from "antd";
import { Button, Icon } from "zmp-ui";

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
    <Card title={<div className="text-lg font-bold">Thông tin công trình</div>}>
      <div className="text-sm">
        <div>
          <div className="text-gray5">Mã công trình</div>
          <div className="font-medium">{data.id}</div>
        </div>
        <Divider />
        <div>
          <div className="text-gray5">Loại công trình</div>
          <div className="font-medium">{data.constructionType}</div>
        </div>
        <Divider />
        <div>
          <div className="text-gray5">Loại sơn</div>
          <div className="font-medium">{data.paintType}</div>
        </div>
        <Divider />
        <Space direction="vertical">
          <div>
            <div className="text-gray5">Địa chỉ công trình</div>
            <div className="font-medium">{data.constructionAddress}</div>
          </div>
          <Button
            variant="secondary"
            className="!size-fit !rounded-lg !px-2 !py-1 !text-sm"
            suffixIcon={<Icon icon="zi-location-solid" />}
          >
            Xem vị trí công trình
          </Button>
        </Space>
        <Divider />
        <div>
          <div className="text-gray5">Người liên hệ</div>
          <div className="font-medium">
            {data.contactName} ({data.contactNumber})
          </div>
        </div>
        <Divider />
        <div>
          <div className="text-gray5">Vai trò</div>
          <div className="font-medium">{data.contactRole}</div>
        </div>
        <Divider />
        <div>
          <div className="text-gray5">Giá trị ước tính công trình</div>
          <div className="font-medium">{data.estPrice}</div>
        </div>
        <Divider />
        <div>
          <div className="text-gray5">Thời gian sơn công trình</div>
          <div className="font-medium">{data.date}</div>
        </div>
      </div>
    </Card>
  );
};

export default ConstructionDetails;
