import React from "react";
import { PeriodFilter } from "./period-filter";
import { DateFilter } from "./date-filter";
import { Form } from "antd";

const Filters = () => {
  const [form] = Form.useForm();

  const initialValues = {
    period: "month",
    date: "",
  };

  return (
    <Form name="filters" initialValues={initialValues} form={form}>
      <div className="flex h-[29px] items-center gap-3">
        <Form.Item
          name="period"
          getValueFromEvent={(e) => e.period.value}
          noStyle
        >
          <PeriodFilter />
        </Form.Item>
        <Form.Item
          shouldUpdate={(prev, cur) => prev.period !== cur.period}
          noStyle
        >
          {({ getFieldValue }) => {
            const period = getFieldValue("period");
            return <DateFilter period={period} />;
          }}
        </Form.Item>
      </div>
    </Form>
  );
};

export default Filters;
