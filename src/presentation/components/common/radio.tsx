import React from "react";
import NotFound from "./not-found";
import { Space, SpaceProps } from "antd";

type RecordType = {
  value: any;
  [key: string]: any;
};

function Radio() {}

function RadioGroup({
  activeRender,
  items,
  render,
  gap = 10,
  direction = "row",
  className,
  ...rest
}: RadioGroupProps<RecordType>) {
  const handleClick = (value: number) => {
    if (rest.onChange) {
      rest.onChange(value);
    }
  };

  if (Array.isArray(items)) {
    if (items.length === 0) {
      return <NotFound />;
    }
    return (
      <div className={className} style={{ gap: gap, flexDirection: direction }}>
        {items.map((item, index) => (
          <div
            className="flex-1 cursor-pointer"
            onClick={() => handleClick(item.value)}
            key={index}
          >
            {rest.value === item.value ? activeRender(item) : render(item)}
          </div>
        ))}
      </div>
    );
  }
  return null;
}

Radio.ButtonGroup = RadioGroup;

export { Radio };

type RadioGroupProps<RecordType> = {
  defaultActiveIndex?: number; //starts at 0
  items: RecordType[]; //an array of object ([{name: "abc"}, {name: "abcd"}])
  gap?: number;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  render: (item?: RecordType) => React.ReactNode; //specify how to render, eg: render={(item) => <div>{item?.name}</div>}
  activeRender: (item?: RecordType) => React.ReactNode; //specify how to render when focused, eg: activeRender={(item) => (<div className="text-primary">{item?.name}</div>)}
  value?: any;
  onChange?: (value: any) => void;
  className?: string;
};
