import React from "react";
import { Collapse } from "../common/collapse";
import { Card } from "antd";
import { fontSize } from "@mui/system";
import { RightOutlined } from "@ant-design/icons";

const QuestionSection = () => {
  return (
    <Card
      title={<div className="text-[15px] font-semibold">Sơn Dulux</div>}
      className="shadow-faqs"
      style={{ padding: "12px 0" }}
      styles={{
        header: {
          padding: "0 12px",
          border: "none",
          minHeight: "0",
          marginBottom: "12px",
        },
        body: { padding: "0" },
      }}
    >
      <div className="flex flex-col gap-3">
        {data.map((item, index) => (
          <Collapse
            key={index}
            items={[{ ...item, ...panelStyle }]}
            expandIconPosition="end"
            expandIcon={({ isActive }) => (
              <RightOutlined rotate={isActive ? -90 : 90} />
            )}
          />
        ))}
      </div>
    </Card>
  );
};

export default QuestionSection;

const panelStyle = {
  style: { padding: "0 12px" },
  styles: {
    header: { padding: "0", fontSize: "14px" },
    body: {
      padding: "10px",
      fontSize: "12px",
      backgroundColor: "#F4F5F466",
      marginTop: "8px",
    },
  },
};

const data = [
  {
    key: "1",
    label: "Sơn là gì? Tại sao phải dùng sơn?",
    children: (
      <p>
        Sơn là một loại vật liệu phủ bề mặt, thường ở dạng lỏng hoặc bột, được
        sử dụng để bảo vệ, trang trí, và tăng tính thẩm mỹ cho các bề mặt. Sau
        khi sơn được thi công, nó sẽ khô lại, tạo thành một lớp màng cứng bám
        chắc trên bề mặt vật liệu. Sơn có thể được áp dụng trên nhiều loại bề
        mặt như gỗ, kim loại, bê tông, tường, nhựa, và các vật liệu khác.
      </p>
    ),
  },
  {
    key: "2",
    label: "Sơn là gì? Tại sao phải dùng sơn?",
    children: (
      <p>
        Sơn là một loại vật liệu phủ bề mặt, thường ở dạng lỏng hoặc bột, được
        sử dụng để bảo vệ, trang trí, và tăng tính thẩm mỹ cho các bề mặt. Sau
        khi sơn được thi công, nó sẽ khô lại, tạo thành một lớp màng cứng bám
        chắc trên bề mặt vật liệu. Sơn có thể được áp dụng trên nhiều loại bề
        mặt như gỗ, kim loại, bê tông, tường, nhựa, và các vật liệu khác.
      </p>
    ),
  },
  {
    key: "3",
    label: "Sơn là gì? Tại sao phải dùng sơn?",
    children: (
      <p>
        Sơn là một loại vật liệu phủ bề mặt, thường ở dạng lỏng hoặc bột, được
        sử dụng để bảo vệ, trang trí, và tăng tính thẩm mỹ cho các bề mặt. Sau
        khi sơn được thi công, nó sẽ khô lại, tạo thành một lớp màng cứng bám
        chắc trên bề mặt vật liệu. Sơn có thể được áp dụng trên nhiều loại bề
        mặt như gỗ, kim loại, bê tông, tường, nhựa, và các vật liệu khác.
      </p>
    ),
  },
  {
    key: "4",
    label: "Sơn là gì? Tại sao phải dùng sơn?",
    children: (
      <p>
        Sơn là một loại vật liệu phủ bề mặt, thường ở dạng lỏng hoặc bột, được
        sử dụng để bảo vệ, trang trí, và tăng tính thẩm mỹ cho các bề mặt. Sau
        khi sơn được thi công, nó sẽ khô lại, tạo thành một lớp màng cứng bám
        chắc trên bề mặt vật liệu. Sơn có thể được áp dụng trên nhiều loại bề
        mặt như gỗ, kim loại, bê tông, tường, nhựa, và các vật liệu khác.
      </p>
    ),
  },
];
