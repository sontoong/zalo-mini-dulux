import { DatePicker, Form, Input, Space } from "antd";
import React from "react";
import { InputNumber } from "../common/input-number";
import { ElevateButton } from "../common/button";
import { DownOutlined, RightOutlined, SearchOutlined } from "@ant-design/icons";
import { MultiSheetSelect } from "../common/multi-sheet-select";

const PostForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form form={form} onFinish={onFinish}>
      {/* Thông tin công trình */}
      <div>
        {/* Title */}
        <div className="mb-2 text-xl font-bold">Thông tin công trình</div>
        <Form.Item
          name="constructId"
          label="Mã công trình"
          rules={[{ type: "string", required: true }]}
        >
          <Input
            variant="filled"
            placeholder="Mã công trình"
            className="bg-blue2 p-[12px]"
          />
        </Form.Item>
        <Form.Item
          name="constructionType"
          label="Loại công trình"
          rules={[{ required: true }]}
          getValueFromEvent={(e) => e.code}
        >
          <MultiSheetSelect
            title="Chọn nhóm công trình"
            drawerTitle="Chọn loại công trình"
            items={constructions}
            drawerItems={constructions2}
            renderItem={(construction) => (
              <div
                className="flex items-start justify-between"
                // onClick={() => fakeAPi({ code: construction.code })}
              >
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
                variant="borderless"
                onClick={open}
                placeholder="Chọn cửa hàng bán sơn"
                className="w-full bg-white p-[12px] shadow"
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
          name="price"
          label="Giá trị ước tính"
          rules={[{ type: "number", required: true }]}
        >
          <InputNumber.Currency
            variant="borderless"
            placeholder="Ví dụ: 1200"
            className="w-full bg-white p-[12px] shadow"
          />
        </Form.Item>
        <Form.Item
          name="paintType"
          label="Loại sơn"
          rules={[{ required: true }]}
          getValueFromEvent={(e) => e.code}
        >
          <MultiSheetSelect
            title="Chọn nhóm sơn"
            drawerTitle="Chọn loại sơn"
            items={paints}
            drawerItems={paints2}
            renderItem={(paint) => (
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <div className="text-sm">{paint.name}</div>
                </div>
                <div className="flex w-[50px] justify-end">
                  <RightOutlined />
                </div>
              </div>
            )}
          >
            {({ open, value }) => (
              <Input
                variant="borderless"
                onClick={open}
                placeholder="Chọn loại sơn"
                className="w-full bg-white p-[12px] shadow"
                suffix={<DownOutlined />}
                value={
                  paints2.find((paint) => {
                    return paint.code === value;
                  })?.name
                }
              />
            )}
          </MultiSheetSelect>
        </Form.Item>
        <Form.Item
          name="area"
          label="Diện tích sơn"
          rules={[{ type: "number", required: true }]}
        >
          <InputNumber
            variant="borderless"
            placeholder="Ví dụ: 1200"
            className="w-full bg-white p-[12px] shadow"
            suffix="m2"
          />
        </Form.Item>
        <Form.Item
          name="source"
          label="Nguồn"
          rules={[{ required: true }]}
          getValueFromEvent={(e) => e.code}
        >
          <MultiSheetSelect
            title="Chọn nguồn"
            items={sources}
            renderItem={(source) => (
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <div className="text-sm">{source.name}</div>
                </div>
                <div className="flex w-[100px] justify-end">
                  <RightOutlined />
                </div>
              </div>
            )}
          >
            {({ open, value }) => (
              <Input
                variant="borderless"
                onClick={open}
                placeholder="Chọn nguồn"
                className="w-full bg-white p-[12px] shadow"
                suffix={<DownOutlined />}
                value={
                  sources.find((source) => {
                    return source.code === value;
                  })?.name
                }
              />
            )}
          </MultiSheetSelect>
        </Form.Item>
        <Form.Item
          name="status"
          label="Tình trạng công trình"
          rules={[{ required: true }]}
          getValueFromEvent={(e) => e.code}
        >
          <MultiSheetSelect
            title="Chọn tình trạng công trình"
            items={statuses}
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
                variant="borderless"
                onClick={open}
                placeholder="Chọn tình trạng công trình"
                className="w-full bg-white p-[12px] shadow"
                suffix={<DownOutlined />}
                value={
                  statuses.find((status) => {
                    return status.code === value;
                  })?.name
                }
              />
            )}
          </MultiSheetSelect>
        </Form.Item>
        <Form.Item
          name="time"
          label="Dự kiến thời gian sơn"
          rules={[{ required: true }]}
        >
          <DatePicker
            variant="borderless"
            placeholder="Nhập thời gian sơn dự kiến"
            className="w-full bg-white p-[12px] shadow"
            showTime
            showHour
            format="HH[ giờ, ]DD/MM/YYYY"
          />
        </Form.Item>
        <Form.Item
          name="store"
          label="Cửa hàng bán sơn"
          rules={[{ required: true }]}
          getValueFromEvent={(e) => e.code}
        >
          <MultiSheetSelect
            title="Cửa hàng bán sơn"
            searchBar={
              <Input
                size="large"
                placeholder="Tìm cửa hàng bán sơn"
                prefix={<SearchOutlined />}
                className="border-none"
              />
            }
            items={stores}
            renderItem={(store) => (
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <div className="text-sm">{store.name}</div>
                  <div className="text-xs text-gray5">{store.address}</div>
                </div>
                <div className="flex w-[100px] justify-between">
                  <div className="text-xs">Mã: {store.code}</div>
                  <RightOutlined />
                </div>
              </div>
            )}
          >
            {({ open, value }) => (
              <Input
                variant="borderless"
                onClick={open}
                placeholder="Chọn cửa hàng bán sơn"
                className="w-full bg-white p-[12px] shadow"
                suffix={<DownOutlined />}
                value={stores.find((store) => store.code === value)?.name}
              />
            )}
          </MultiSheetSelect>
        </Form.Item>
      </div>
      {/* Địa chỉ */}
      <div>
        {/* Title */}
        <div className="mb-2 text-xl font-bold">Địa chỉ</div>
        <Form.Item
          name="city"
          label="Tỉnh/thành phố"
          rules={[{ required: true }]}
          getValueFromEvent={(e) => e.code}
        >
          <MultiSheetSelect
            title="Tỉnh/thành phố"
            items={cities}
            renderItem={(city) => (
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <div className="text-sm">{city.name}</div>
                </div>
                <div className="flex w-[100px] justify-end">
                  <RightOutlined />
                </div>
              </div>
            )}
          >
            {({ open, value }) => (
              <Input
                variant="borderless"
                onClick={open}
                placeholder="Chọn tỉnh/thành phố"
                className="w-full bg-white p-[12px] shadow"
                suffix={<DownOutlined />}
                value={cities.find((city) => city.code === value)?.name}
              />
            )}
          </MultiSheetSelect>
        </Form.Item>
        <Form.Item
          name="district"
          label="Quận/huyện"
          rules={[{ required: true }]}
          getValueFromEvent={(e) => e.code}
        >
          <MultiSheetSelect
            title="Quận/huyện"
            items={districts}
            renderItem={(district) => (
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <div className="text-sm">{district.name}</div>
                </div>
                <div className="flex w-[100px] justify-end">
                  <RightOutlined />
                </div>
              </div>
            )}
          >
            {({ open, value }) => (
              <Input
                variant="borderless"
                onClick={open}
                placeholder="Chọn quận/huyện"
                className="w-full bg-white p-[12px] shadow"
                suffix={<DownOutlined />}
                value={
                  districts.find((district) => district.code === value)?.name
                }
              />
            )}
          </MultiSheetSelect>
        </Form.Item>
        <Form.Item
          name="subdistrict"
          label="Phường/xã"
          rules={[{ required: true }]}
          getValueFromEvent={(e) => e.code}
        >
          <MultiSheetSelect
            title="Phường/xã"
            items={subdistricts}
            renderItem={(subdistrict) => (
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <div className="text-sm">{subdistrict.name}</div>
                </div>
                <div className="flex w-[100px] justify-end">
                  <RightOutlined />
                </div>
              </div>
            )}
          >
            {({ open, value }) => (
              <Input
                variant="borderless"
                onClick={open}
                placeholder="Chọn phường/xã"
                className="w-full bg-white p-[12px] shadow"
                suffix={<DownOutlined />}
                value={
                  subdistricts.find((subdistrict) => subdistrict.code === value)
                    ?.name
                }
              />
            )}
          </MultiSheetSelect>
        </Form.Item>
        <Form.Item
          name="address"
          label="Địa chỉ"
          rules={[{ type: "string", required: true }]}
        >
          <Input
            variant="borderless"
            placeholder="Ví dụ: 123, Đakao"
            className="bg-white p-[12px] shadow"
          />
        </Form.Item>
      </div>
      {/* Thông tin liên hệ */}
      <div>
        {/* Title */}
        <div className="mb-2 text-xl font-bold">Thông tin liên hệ</div>
        <Form.Item
          name="role"
          label="Vai trò"
          getValueFromEvent={(e) => e.code}
        >
          <MultiSheetSelect
            title="Chọn vai trò"
            items={roles}
            renderItem={(role) => (
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <div className="text-sm">{role.name}</div>
                </div>
                <div className="flex w-[100px] justify-end">
                  <RightOutlined />
                </div>
              </div>
            )}
          >
            {({ open, value }) => (
              <Input
                variant="borderless"
                onClick={open}
                placeholder="Chọn vai trò"
                className="w-full bg-white p-[12px] shadow"
                suffix={<DownOutlined />}
                value={
                  roles.find((role) => {
                    return role.code === value;
                  })?.name
                }
              />
            )}
          </MultiSheetSelect>
        </Form.Item>
        <Form.Item name="phone" label="Số điện thoại">
          <Input
            variant="borderless"
            placeholder="Ví dụ: 0934354545"
            className="bg-white p-[12px] shadow"
          />
        </Form.Item>
        <Form.Item name="name" label="Tên">
          <Input
            variant="borderless"
            placeholder="Ví dụ: Nguyễn Văn Hà"
            className="bg-white p-[12px] shadow"
          />
        </Form.Item>
      </div>
      {/* Thông tin liên hệ 2*/}
      <div>
        {/* Title */}
        <div className="mb-2 text-xl font-bold">Thông tin liên hệ 2</div>
        <Form.Item name="phone2" label="Số điện thoại">
          <Input
            variant="borderless"
            placeholder="Ví dụ: 0934354545"
            className="bg-white p-[12px] shadow"
          />
        </Form.Item>
        <Form.Item name="name2" label="Tên">
          <Input
            variant="borderless"
            placeholder="Ví dụ: Nguyễn Văn Hà"
            className="bg-white p-[12px] shadow"
          />
        </Form.Item>
      </div>
      {/* Submit */}
      <Form.Item>
        <ElevateButton
          text="Hoàn thành"
          className="w-full bg-greenBtn text-sm drop-shadow-greenBtn"
        />
      </Form.Item>
    </Form>
  );
};

export default PostForm;

const stores = [
  {
    name: "Cửa hàng Dulux 5",
    address: "50 Nguyễn Văn Trỗi, quận 3, Tp.hcm",
    code: "1233434",
  },
  {
    name: "Cửa hàng Dulux 4",
    address: "50 Nguyễn Văn Trỗi, quận 3, Tp.hcm",
    code: "12334341",
  },
];

const cities = [
  {
    name: "Hồ Chí Minh",
    code: "1233434",
  },
  {
    name: "Hà Nội",
    code: "12334341",
  },
];

const districts = [
  {
    name: "Quận 1",
    code: "1233434",
  },
  {
    name: "Quận 2",
    code: "12334341",
  },
];

const subdistricts = [
  {
    name: "Phường 1",
    code: "1233434",
  },
  {
    name: "Phường 2",
    code: "12334341",
  },
];

const sources = [
  {
    name: "Nguồn 1",
    code: "1",
  },
  {
    name: "Nguồn 2",
    code: "2",
  },
];

const statuses = [
  {
    name: "Tình trạng 1",
    code: "1",
  },
  {
    name: "Tình trạng 2",
    code: "2",
  },
];

const roles = [
  {
    name: "Vai trò 1",
    code: "1",
  },
  {
    name: "Vai trò 2",
    code: "2",
  },
];

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

const paints = [
  {
    name: "Sơn ngoại thất - Siêu cao cấp",
    code: "1",
  },
  {
    name: "Sơn nội thất - Siêu cao cấp",
    code: "2",
  },
];

const paints2 = [
  {
    name: "Dulux Weathershield Royal Shine - RS86",
    code: "11",
  },
  {
    name: "Dulux Weathershield PowerFlexx - Mờ_GJ8",
    code: "12",
  },
  {
    name: "Dulux Weathershield PowerFlexx - Bóng_GJ8B",
    code: "13",
  },
];
