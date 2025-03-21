import { DatePicker } from "antd";
import React, { FC } from "react";
import CalendarIcon from "../../static/calendar-icon.svg";

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
        className="size-full flex-1 rounded-lg border-none bg-gray1 text-sm shadow hover:bg-gray1"
        format={format}
        suffixIcon={<img src={CalendarIcon} />}
      />
    );
  }

  return (
    <DatePicker
      value={value}
      onChange={onChange}
      picker={picker}
      className="size-full flex-1 rounded-sm border-none bg-gray1 text-sm shadow hover:bg-gray1"
      format={format}
      suffixIcon={<img src={CalendarIcon} />}
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
