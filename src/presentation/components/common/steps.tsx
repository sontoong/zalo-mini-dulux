import clsx from "clsx";
import React, { useEffect, useMemo, useState } from "react";
import { CheckOutlined } from "@ant-design/icons";
import { Divider } from "antd";

function Steps({ items, render, onChange, current, status }: Props) {
  const [currentInternalState, setCurrentInternalState] = useState<number>(0);

  const getCurItemStatus = (index: number) => {
    // Status is defined, force all
    if (status) return status;

    // Status if undefined
    if (index === currentInternal) return "active";
    if (index < currentInternal) return "completed";
    return "inactive";
  };

  const currentInternal = useMemo(
    () => (current !== undefined ? current : currentInternalState),
    [current, currentInternalState],
  );

  const goTo = (index: number) => {
    setCurrentInternalState(index);
    onChange?.(index);
  };

  return (
    <div className="flex justify-between">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <>
            <div
              className={clsx(
                "flex flex-1 cursor-pointer flex-col items-center gap-3 text-center",
                {
                  "cursor-default": getCurItemStatus(index) === "error",
                },
              )}
              onClick={() => goTo(index)}
            >
              {render ? (
                render({ item, index, itemStatus: getCurItemStatus(index) })
              ) : getCurItemStatus(index) != "completed" ? (
                <div
                  className={clsx(
                    "flex aspect-square size-5 items-center justify-center rounded-full",
                    {
                      "bg-blue-500": getCurItemStatus(index) === "active",
                      "bg-red-500": getCurItemStatus(index) === "error",
                      "bg-gray-400": getCurItemStatus(index) === "inactive",
                    },
                  )}
                >
                  {index + 1}
                </div>
              ) : (
                <CheckOutlined />
              )}
              <>{item.title}</>
            </div>
          </>
          {index < items.length - 1 ? (
            <Divider className="min-w-min max-w-10" />
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
}

export { Steps };

type Props = {
  items: ItemProps[];
  render?: ({
    item,
    index,
    itemStatus,
  }: {
    item: ItemProps;
    index: number;
    itemStatus: Status;
  }) => React.ReactNode;
  onChange?: (current: number) => void;
  current?: number;
  status?: Status;
};

type ItemProps = {
  title: React.ReactNode;
  content: React.ReactNode;
};

type Status = "active" | "inactive" | "completed" | "error";
