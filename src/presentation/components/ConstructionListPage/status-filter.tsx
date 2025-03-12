import React from "react";
import { Icon, Picker } from "zmp-ui";

const StatusFilter = () => {
  return (
    <Picker
      mask
      maskClosable
      title="Trạng thái"
      placeholder="Chọn trạng thái"
      suffix={<Icon icon="zi-chevron-down" className="mr-1" />}
      data={[
        {
          options: [{ key: "key1", value: 1, displayName: "Đang theo dõi" }],
          name: "option",
        },
      ]}
      action={{
        text: "Close",
        close: true,
      }}
      inputClass="!text-sm h-full !pr-0"
    />
  );
};

export { StatusFilter };
