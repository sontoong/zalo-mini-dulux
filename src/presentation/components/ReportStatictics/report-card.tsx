import { Card, Divider, Space } from "antd";
import React, { FC } from "react";
import { Update, CheckCircle, Cancel } from "@mui/icons-material";

export const ReportCard: FC = ({}) => {
  return (
    <>
      {/* Đang theo dõi */}
      <Card className="bg-yellow1">
        <div className="flex flex-col gap-2">
          <Space>
            <div className="rounded-full bg-yellow2 p-1 text-yellow5">
              <Update />
            </div>
            <div className="text-sm font-bold text-yellow6">Đang theo dõi</div>
          </Space>
          <div>
            <span className="text-xl font-semibold">1.400</span>{" "}
            <span className="text-2xs">công trình</span>
          </div>
          <Divider className="m-0" />
          <div>
            <span className="text-xl font-semibold">1.400.000.000</span>
            <span className="text-2xs"> vnđ</span>
          </div>
          <div className="absolute bottom-6 right-5 rounded-xl bg-white px-2 py-1 text-2xs text-gray5 shadow">
            Giá trị ước tính
          </div>
        </div>
      </Card>
      {/* Thành công */}
      <Card className="bg-green1">
        <div className="flex flex-col gap-2">
          <Space>
            <div className="rounded-full bg-green2 p-1 text-green3">
              <CheckCircle />
            </div>
            <div className="text-sm font-bold text-green4">Thành công</div>
          </Space>
          <div>
            <span className="text-xl font-semibold">1.400</span>{" "}
            <span className="text-2xs">công trình</span>
          </div>
          <Divider className="m-0" />
          <div>
            <span className="text-xl font-semibold">1.400.000.000</span>
            <span className="text-2xs"> vnđ</span>
          </div>
          <div className="absolute bottom-6 right-5 rounded-xl bg-white px-2 py-1 text-2xs text-gray5 shadow">
            Giá trị ước tính
          </div>
        </div>
      </Card>
      {/* Thất bại */}
      <Card className="bg-red1">
        <div className="flex flex-col gap-2">
          <Space>
            <div className="rounded-full bg-red6 p-1 text-red4">
              <Cancel />
            </div>
            <div className="text-sm font-bold text-red4">Thất bại</div>
          </Space>
          <div>
            <span className="text-xl font-semibold">1.400</span>{" "}
            <span className="text-2xs">công trình</span>
          </div>
          <Divider className="m-0" />
          <div>
            <span className="text-xl font-semibold">1.400.000.000</span>
            <span className="text-2xs"> vnđ</span>
          </div>
          <div className="absolute bottom-6 right-5 rounded-xl bg-white px-2 py-1 text-2xs text-gray5 shadow">
            Giá trị ước tính
          </div>
        </div>
      </Card>
    </>
  );
};
