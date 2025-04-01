import { Card, Divider, FormInstance } from "antd";
import React from "react";
import { Form } from "../common/form";
import { InputNumber } from "../common/input-number";

export const MaterialForm = ({ form }: Props) => {
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
        title={<div className="font-title text-lg font-bold">Tính vật tư</div>}
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
        <Form form={form} name="materialForm" className="flex flex-col gap-2">
          <Form.Item
            label={
              <div className="font-title text-xs font-bold">
                Độ phủ hoàn thiện - Sơn phủ ngoài trời
              </div>
            }
            name="outside"
            labelCol={{ className: "!pb-0" }}
            style={{ marginBottom: 0 }}
          >
            <InputNumber
              variant="borderless"
              placeholder="Nhập giá trị"
              className="w-full rounded bg-blue1 p-[12px] shadow"
              suffix="m2/lít/2 lớp"
            />
          </Form.Item>
          <Form.Item
            label={
              <div className="font-title text-xs font-bold">
                Độ phủ hoàn thiện - Sơn phủ trong nhà
              </div>
            }
            name="inside"
            labelCol={{ className: "!pb-0" }}
            style={{ marginBottom: 0 }}
          >
            <InputNumber
              variant="borderless"
              placeholder="Nhập giá trị"
              className="w-full rounded bg-blue1 p-[12px] shadow"
              suffix="m2/lít/2 lớp"
            />
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

type Props = {
  form: FormInstance;
};
