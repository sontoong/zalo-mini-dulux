import { Card, FormInstance, Input } from "antd";
import React from "react";
import { Form } from "../common/form";
import { MultiSheetSelect } from "../common/multi-sheet-select";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import { InputNumber } from "../common/input-number";

const AreaForm = ({ form }: Props) => {
  return (
    <Card
      title={<div className="font-title text-lg font-bold">Tính diện tích</div>}
      styles={{
        header: {
          padding: "10px 16px",
        },
        body: {
          padding: "8px 16px",
        },
      }}
      className="rounded-none pb-24"
    >
      <Form form={form} name="areaForm" className="flex flex-col gap-2">
        <Form.Item
          label={
            <div className="font-title text-xs font-bold">Loại công trình</div>
          }
          name="constructionType"
          labelCol={{ className: "!pb-0" }}
          style={{ marginBottom: 0 }}
          getValueFromEvent={(e) => e.code}
        >
          <MultiSheetSelect
            title="Chọn loại công trình"
            drawerTitle="Chọn loại công trình"
            items={constructions}
            drawerItems={constructions2}
            renderItem={(construction) => (
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <div className="text-sm">{construction.name}</div>
                </div>
                <div className="flex w-[100px] justify-end">
                  <RightOutlined />
                </div>
              </div>
            )}
          >
            {({ open, value }) => (
              <Input
                readOnly
                variant="borderless"
                onFocus={open}
                placeholder="Chọn loại công trình"
                className="w-full rounded bg-blue1 p-[12px] shadow"
                suffix={<DownOutlined />}
                value={
                  constructions2.find((construction) => {
                    return construction.code === value;
                  })?.name
                }
              />
            )}
          </MultiSheetSelect>
        </Form.Item>
        <Form.Item
          label={<div className="font-title text-xs font-bold">Hệ số</div>}
          name="coefficient"
          labelCol={{ className: "!pb-0" }}
          style={{ marginBottom: 0 }}
        >
          <InputNumber
            variant="borderless"
            placeholder="Vd: 1, 233, 4"
            className="w-full rounded bg-blue1 p-[12px] shadow"
          />
        </Form.Item>
        <Form.Item
          label={
            <div className="font-title text-xs font-bold">Chiều sâu (m)</div>
          }
          name="depth"
          labelCol={{ className: "!pb-0" }}
          style={{ marginBottom: 0 }}
        >
          <InputNumber
            variant="borderless"
            placeholder="Vd: 1, 233, 4"
            className="w-full rounded bg-blue1 p-[12px] shadow"
            suffix="m"
          />
        </Form.Item>
        <Form.Item
          label={
            <div className="font-title text-xs font-bold">Chiều ngang (m)</div>
          }
          name="length"
          labelCol={{ className: "!pb-0" }}
          style={{ marginBottom: 0 }}
        >
          <InputNumber
            variant="borderless"
            placeholder="Vd: 1, 233, 4"
            className="w-full rounded bg-blue1 p-[12px] shadow"
            suffix="m"
          />
        </Form.Item>
        <Form.Item
          label={<div className="font-title text-xs font-bold">Tòa nhà</div>}
          name="building"
          labelCol={{ className: "!pb-0" }}
          style={{ marginBottom: 0 }}
        >
          <InputNumber
            variant="borderless"
            placeholder="Vd: 1, 233, 4"
            className="w-full rounded bg-blue1 p-[12px] shadow"
          />
        </Form.Item>
        <Form.Item
          label={<div className="font-title text-xs font-bold">Số tầng</div>}
          name="floor"
          labelCol={{ className: "!pb-0" }}
          style={{ marginBottom: 0 }}
        >
          <InputNumber
            variant="borderless"
            placeholder="Vd: 5"
            className="w-full rounded bg-blue1 p-[12px] shadow"
          />
        </Form.Item>
        <Form.Item
          label={
            <div className="font-title text-xs font-bold">Số tầng hầm</div>
          }
          name="basement"
          labelCol={{ className: "!pb-0" }}
          style={{ marginBottom: 0 }}
        >
          <InputNumber
            variant="borderless"
            placeholder="Vd: 6"
            className="w-full rounded bg-blue1 p-[12px] shadow"
          />
        </Form.Item>
        <Form.Item
          label={
            <div className="font-title text-xs font-bold">
              Hiện trạng sơn ngoại thất
            </div>
          }
          name="status"
          labelCol={{ className: "!pb-0" }}
          style={{ marginBottom: 0 }}
          getValueFromEvent={(e) => e.code}
        >
          <MultiSheetSelect
            title="Chọn hiện trạng"
            drawerTitle="Chọn hiện trạng"
            items={status}
            renderItem={(status) => (
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <div className="text-sm">{status.name}</div>
                </div>
                <div className="flex w-[100px] justify-end">
                  <RightOutlined />
                </div>
              </div>
            )}
          >
            {({ open, value }) => (
              <Input
                readOnly
                variant="borderless"
                onFocus={open}
                placeholder="Chọn hiện trạng"
                className="w-full rounded bg-blue1 p-[12px] shadow"
                suffix={<DownOutlined />}
                value={
                  status.find((status) => {
                    return status.code === value;
                  })?.name
                }
              />
            )}
          </MultiSheetSelect>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AreaForm;

type Props = {
  form: FormInstance;
};

const constructions = [
  {
    name: "Công trình nhà dân",
    code: "1",
  },
  {
    name: "Công trình thương mại",
    code: "2",
  },
  {
    name: "Khác",
    code: "3",
  },
];

const constructions2 = [
  {
    name: "Bệnh viện",
    code: "11",
  },
  {
    name: "Trường học",
    code: "12",
  },
];

const status = [
  {
    name: "Hiện trạng 1",
    code: "1",
  },
];
