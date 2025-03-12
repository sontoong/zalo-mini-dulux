import { SearchOutlined } from "@mui/icons-material";
import { Input } from "antd";
import React, { FC } from "react";

type SearchBarProps = {
  placeholder?: string;
};

export const SearchBar: FC<SearchBarProps> = ({ placeholder }) => {
  return (
    <Input
      size="large"
      placeholder={placeholder}
      prefix={<SearchOutlined />}
      className="border-none bg-blue2"
    />
  );
};
