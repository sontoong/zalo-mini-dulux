import React, { FC } from "react";
import { Circle, Engineering, Share, CorporateFare } from "@mui/icons-material";
import { Progress } from "../common/progress";
import { Space } from "antd";

const ReportCard: FC = ({}) => {
  return (
    <div className="grid gap-3">
      {/* Số công trình */}
      <div className="from-blue-gradient-from to-blue-gradient-to col-span-1 rounded-[20px] bg-gradient-to-br px-1 py-3">
        <div className="flex flex-col items-center gap-5 text-white">
          <div className="rounded-xl bg-white/20 px-2 py-1 text-center text-sm font-bold text-white shadow">
            Số công trình
          </div>
          <Progress
            type="circle"
            percent={70}
            size={80}
            strokeColor="white"
            strokeWidth={10}
            trailColor="#ffffffa0"
            textColor="white"
          />
          <div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Circle fontSize="inherit" />
                <div className="whitespace-nowrap text-sm">Thực đạt</div>
              </div>
              <div className="text-xl font-semibold">12,324</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Circle fontSize="inherit" className="text-yellow3" />
                <div className="whitespace-nowrap text-sm">Kế hoạch</div>
              </div>
              <div className="text-xl font-semibold">14,000</div>
            </div>
          </div>
        </div>
      </div>
      {/* Số thầu mở mới */}
      <div className="from-green-gradient-from to-green-gradient-to col-span-1 rounded-[20px] bg-gradient-to-br px-1 py-3">
        <div className="flex flex-col items-center gap-5 text-white">
          <div className="rounded-xl bg-white/20 px-2 py-1 text-center text-sm font-bold text-white shadow">
            Số thầu mở mới
          </div>
          <Progress
            type="circle"
            percent={70}
            size={80}
            strokeColor="white"
            strokeWidth={10}
            trailColor="#ffffffa0"
            textColor="white"
          />
          <div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Circle fontSize="inherit" />
                <div className="whitespace-nowrap text-sm">Thực đạt</div>
              </div>
              <div className="text-xl font-semibold">12,324</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Circle fontSize="inherit" className="text-yellow3" />
                <div className="whitespace-nowrap text-sm">Kế hoạch</div>
              </div>
              <div className="text-xl font-semibold">14,000</div>
            </div>
          </div>
        </div>
      </div>
      {/* Doanh số */}
      <div className="from-orange-gradient-from to-orange-gradient-to col-span-2 rounded-[20px] bg-gradient-to-br py-3 pl-3 opacity-80">
        <div className="flex size-full items-end gap-5 text-white">
          <div className="flex flex-col items-center gap-3">
            <div className="rounded-xl bg-white/20 px-2 py-1 text-center text-sm font-bold text-white shadow">
              Doanh số
            </div>
            <Progress
              type="circle"
              percent={70}
              size={80}
              strokeColor="white"
              strokeWidth={10}
              trailColor="#ffffffa0"
              textColor="white"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <div className="flex items-center justify-around">
              <div className="flex items-center gap-1">
                <Circle fontSize="inherit" />
                <div className="whitespace-nowrap text-sm">Thực đạt</div>
              </div>
              <div className="text-xl font-semibold">12,324,000</div>
            </div>
            <div className="flex items-center justify-around">
              <div className="flex items-center gap-1">
                <Circle fontSize="inherit" className="text-yellow3" />
                <div className="whitespace-nowrap text-sm">Kế hoạch</div>
              </div>
              <div className="text-xl font-semibold">14,000,000</div>
            </div>
          </div>
        </div>
      </div>
      {/* Nhà thầu mời được */}
      <div className="flex flex-col items-center gap-1 rounded-[20px] bg-blue2 p-3">
        <Space>
          <Engineering
            className="rounded-full bg-[#b8b8b81a] p-1 text-blue4"
            fontSize="medium"
          />
          <div>Nhà thầu mời được</div>
        </Space>
        <div className="text-2xl font-semibold">120</div>
      </div>
      {/* Affiliate thành công */}
      <div className="flex flex-col items-center gap-1 rounded-[20px] bg-blue2 p-3">
        <Space>
          <Share
            className="rounded-full bg-[#b8b8b81a] p-1 text-green3"
            fontSize="medium"
          />
          <div>Affiliate thành công</div>
        </Space>
        <div className="text-2xl font-semibold">120</div>
      </div>
      {/* Giá trị ước tính */}
      <div className="col-span-2 flex flex-col items-center gap-2 rounded-[20px] bg-[#FFF4EA] p-3">
        <Space>
          <CorporateFare
            className="rounded-full bg-[#b8b8b81a] p-2 text-[#FEA853]"
            fontSize="large"
          />
          <div>Giá trị ước tính</div>
        </Space>
        <div className="text-2xl font-semibold">
          10,234,000,000 <span className="text-gray4 text-sm">VNĐ</span>
        </div>
      </div>
    </div>
  );
};
export { ReportCard };
