import { Input } from "antd";
import React, { FC } from "react";
import SearchIcon from "../../static/search-icon.svg";

type SearchBarProps = {
  placeholder?: string;
};

export const SearchBar: FC<SearchBarProps> = ({ placeholder }) => {
  return (
    <Input
      size="large"
      placeholder={placeholder}
      prefix={<img src={SearchIcon} />}
      className="border-none bg-blue2"
    />
  );
};
