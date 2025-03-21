import { Card, Divider, Space } from "antd";
import React, { FC } from "react";
import { CheckCircle, Cancel } from "@mui/icons-material";
import FollowingIcon from "../../static/report-following-icon.svg";

export const ReportCard: FC = ({}) => {
  return (
    <>
      {/* Đang theo dõi */}
      <Card
        className="rounded-xl bg-yellow1"
        styles={{ body: { padding: "12px" } }}
      >
        <div className="flex flex-col gap-2">
          <Space>
            <div className="flex size-[28px] items-center justify-center rounded-full bg-yellow2 p-1 text-yellow5">
              <img src={FollowingIcon} />
            </div>
            <div className="font-title text-sm font-bold text-yellow6">
              Đang theo dõi
            </div>
          </Space>
          <div>
            <span className="text-xl font-semibold text-gray6">1,400</span>{" "}
            <span className="text-2xs text-gray5">công trình</span>
          </div>
          <Divider className="m-0" />
          <div>
            <span className="text-xl font-semibold text-gray6">
              1,400,000,000
            </span>
            <span className="text-2xs text-gray5"> vnđ</span>
          </div>
          <div className="absolute bottom-3 right-3 rounded-xl bg-white px-2 py-1 text-2xs text-gray5 shadow">
            Giá trị ước tính
          </div>
        </div>
      </Card>
      {/* Thành công */}
      <Card
        className="rounded-xl bg-green1"
        styles={{ body: { padding: "12px" } }}
      >
        <div className="flex flex-col gap-2">
          <Space>
            <div className="flex size-[28px] items-center justify-center rounded-full bg-green2 p-1 text-green3">
              <CheckCircle className="!text-lg" />
            </div>
            <div className="font-title text-sm font-bold text-green4">
              Thành công
            </div>
          </Space>
          <div>
            <span className="text-xl font-semibold text-gray6">1,400</span>{" "}
            <span className="text-2xs text-gray5">công trình</span>
          </div>
          <Divider className="m-0" />
          <div>
            <span className="text-xl font-semibold text-gray6">
              1,400,000,000
            </span>
            <span className="text-2xs text-gray5"> vnđ</span>
          </div>
          <div className="absolute bottom-3 right-3 rounded-xl bg-white px-2 py-1 text-2xs text-gray5 shadow">
            Giá trị ước tính
          </div>
        </div>
      </Card>
      {/* Thất bại */}
      <Card
        className="rounded-xl bg-red1"
        styles={{ body: { padding: "12px" } }}
      >
        <div className="flex flex-col gap-2">
          <Space>
            <div className="flex size-[28px] items-center justify-center rounded-full bg-red6 p-1 text-red4">
              <Cancel className="!text-lg" />
            </div>
            <div className="font-title text-sm font-bold text-red4">
              Thất bại
            </div>
          </Space>
          <div>
            <span className="text-xl font-semibold text-gray6">1,400</span>{" "}
            <span className="text-2xs text-gray5">công trình</span>
          </div>
          <Divider className="m-0" />
          <div>
            <span className="text-xl font-semibold text-gray6">
              1,400,000,000
            </span>
            <span className="text-2xs text-gray5"> vnđ</span>
          </div>
          <div className="absolute bottom-3 right-3 rounded-xl bg-white px-2 py-1 text-2xs text-gray5 shadow">
            Giá trị ước tính
          </div>
        </div>
      </Card>
    </>
  );
};
