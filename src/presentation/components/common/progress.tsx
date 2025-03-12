import React, { FC } from "react";
import {
  ConfigProvider,
  Progress as OriginProgress,
  ProgressProps,
} from "antd";

export const Progress: FC<Props> = ({ textColor, ...rest }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Progress: {
            circleTextColor: textColor ?? "#000",
          },
        },
      }}
    >
      <OriginProgress {...rest} />
    </ConfigProvider>
  );
};

type Props = {
  textColor?: string;
} & ProgressProps;
