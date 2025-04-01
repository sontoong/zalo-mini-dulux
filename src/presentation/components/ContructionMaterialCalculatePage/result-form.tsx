import { Card, Divider } from "antd";
import React from "react";

export const Result = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* Diện tích */}
      <Card
        title={
          <div className="font-title text-lg font-bold">Kết quả diện tích</div>
        }
        styles={{
          header: {
            padding: "10px 16px",
          },
          body: {
            padding: "8px 16px",
          },
        }}
        className="rounded-none pb-5"
      >
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <div className="font-title text-xs font-bold text-gray5">
              Tỷ lệ sử dụng sơn ngoại thất
            </div>
            <div className="text-base font-semibold">40%</div>
          </div>
          <Divider className="my-0" />
          <div className="flex justify-between">
            <div className="font-title text-xs font-bold text-gray5">
              Diện tích ngoài trời
            </div>
            <div className="text-base font-semibold">1.203,4 m2</div>
          </div>
          <Divider className="my-0" />
          <div className="flex justify-between">
            <div className="font-title text-xs font-bold text-gray5">
              Diện tích trong nhà
            </div>
            <div className="text-base font-semibold">1.203,4 m2</div>
          </div>
        </div>
      </Card>
      {/* Vật tư */}
      <Card
        title={
          <div className="font-title text-lg font-bold">Kết quả vật tư</div>
        }
        styles={{
          header: {
            padding: "10px 16px",
          },
          body: {
            padding: "8px 16px",
          },
        }}
        className="rounded-none"
      >
        <div className="flex flex-col gap-5">
          {/* Trong nhà */}
          <div className="flex flex-col gap-3">
            <div className="font-title text-[15px] font-bold text-gray6">
              Vật tư trong nhà
            </div>
            <div className="flex justify-between">
              <div className="font-title text-xs font-bold text-gray5">
                Bột trét
              </div>
              <div className="text-base font-semibold">1.203 kg</div>
            </div>
            <Divider className="my-0" />
            <div className="flex justify-between">
              <div className="font-title text-xs font-bold text-gray5">
                Sơn lót
              </div>
              <div className="text-base font-semibold">1.203 lít</div>
            </div>
            <Divider className="my-0" />
            <div className="flex justify-between">
              <div className="font-title text-xs font-bold text-gray5">
                Sơn phủ
              </div>
              <div className="text-base font-semibold">1.203 lít</div>
            </div>
          </div>
          {/* Ngoài trời */}
          <div className="flex flex-col gap-3">
            <div className="font-title text-[15px] font-bold text-gray6">
              Vật tư ngoài trời
            </div>
            <div className="flex justify-between">
              <div className="font-title text-xs font-bold text-gray5">
                Bột trét
              </div>
              <div className="text-base font-semibold">1.203 kg</div>
            </div>
            <Divider className="my-0" />
            <div className="flex justify-between">
              <div className="font-title text-xs font-bold text-gray5">
                Sơn lót
              </div>
              <div className="text-base font-semibold">1.203 lít</div>
            </div>
            <Divider className="my-0" />
            <div className="flex justify-between">
              <div className="font-title text-xs font-bold text-gray5">
                Sơn phủ
              </div>
              <div className="text-base font-semibold">1.203 lít</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
