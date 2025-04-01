import { Input, InputProps } from "antd";
import React, { FC } from "react";
import SearchIcon from "../../static/search-icon.svg";

type SearchBarProps = InputProps & {
  placeholder?: string;
};

export const SearchBar: FC<SearchBarProps> = ({ placeholder, ...rest }) => {
  return (
    <Input
      size="large"
      placeholder={placeholder}
      prefix={<img src={SearchIcon} />}
      className="border-none bg-blue2 pl-5 text-sm"
      {...rest}
    />
  );
};
