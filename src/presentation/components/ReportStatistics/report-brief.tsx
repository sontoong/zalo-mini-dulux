import { Card, Space } from "antd";
import React from "react";
import { Tag } from "../common/tag";
import CorporateIcon from "../../static/report-intro-icon.svg";

export const ReportBrief = () => {
  return (
    <Card
      className="rounded-xl shadow-kpi"
      styles={{ body: { padding: "20px 12px" } }}
    >
      <div className="flex flex-col gap-3">
        <Space>
          <div className="flex size-[32px] items-center justify-center rounded-full bg-blue2 p-1 text-blue4">
            <img src={CorporateIcon} />
          </div>
          <div className="text-xs">Được giới thiệu</div>
        </Space>
        <div className="text-gray7 text-2xl font-semibold">10,000</div>
        <Tag
          color="#08C267"
          className="w-fit rounded-xl !bg-white px-2 py-1 text-xs"
        >
          80% công trình thành công
        </Tag>
      </div>
    </Card>
  );
};
