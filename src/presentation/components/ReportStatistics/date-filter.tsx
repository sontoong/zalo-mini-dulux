import { DatePicker } from "antd";
import React, { FC } from "react";

type Props = {
  value?: any;
  onChange?: any;
  period: string;
};

const DateFilter: FC<Props> = ({ value, onChange, period }) => {
  const picker = periods[period];
  const format = formats[period];

  if (picker === "year") {
    return (
      <DatePicker.RangePicker
        value={value}
        onChange={onChange}
        picker={picker}
        className="size-full rounded-lg border-none bg-gray1 text-sm hover:bg-gray1"
        format={format}
      />
    );
  }

  return (
    <DatePicker
      value={value}
      onChange={onChange}
      picker={picker}
      className="size-full rounded-lg border-none bg-gray1 text-sm hover:bg-gray1"
      format={format}
    />
  );
};

export { DateFilter };

const periods = {
  month: "month",
  quarter: "quarter",
  year: "year",
} as const;

const formats = {
  month: "[Tháng] M - YYYY",
  quarter: "[Quý] Q - YYYY",
  year: "YYYY",
} as const;
