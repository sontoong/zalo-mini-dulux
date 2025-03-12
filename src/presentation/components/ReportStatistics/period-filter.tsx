import React, { FC } from "react";
import { Icon, Picker } from "zmp-ui";

type Props = {
  value?: any;
  onChange?: any;
};

const PeriodFilter: FC<Props> = ({ value, onChange }) => {
  return (
    <Picker
      value={{ period: value }}
      onChange={onChange}
      mask
      maskClosable
      title="Giai đoạn"
      placeholder="Chọn giai đoạn"
      suffix={<Icon icon="zi-chevron-down" className="mr-1" />}
      data={[
        {
          options: [
            { value: "month", displayName: "Theo tháng" },
            { value: "quarter", displayName: "Theo quý" },
            { value: "year", displayName: "Theo năm" },
          ],
          name: "period",
        },
      ]}
      action={{
        text: "Close",
        close: true,
      }}
      inputClass="!text-sm !bg-gray1  !border-none !h-full "
    />
  );
};

export { PeriodFilter };
