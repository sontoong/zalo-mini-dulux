import React, { FC } from "react";
import { CollapseProps, Collapse as OriginCollapse } from "antd";

const Collapse: FC<Props> = (props) => {
  return <OriginCollapse ghost {...props} />;
};

export { Collapse };

type Props = CollapseProps;
