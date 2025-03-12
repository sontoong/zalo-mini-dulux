import { Card, Space, Tag } from "antd";
import React from "react";
import { CorporateFare } from "@mui/icons-material";

export const ReportBrief = () => {
  return (
    <Card className="shadow-kpi">
      <div className="flex flex-col gap-3">
        <Space>
          <div className="rounded-full bg-blue2 p-1 text-blue4">
            <CorporateFare />
          </div>
          <div className="text-xs">Được giới thiệu</div>
        </Space>
        <div className="text-2xl font-semibold">10,000</div>
        <Tag color="green" className="w-fit rounded-lg text-xs">
          80% công trình thành công
        </Tag>
      </div>
    </Card>
  );
};
