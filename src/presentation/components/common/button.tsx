import React, { FC } from "react";

type ElevateButtonProps = {
  text?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ElevateButton: FC<ElevateButtonProps> = ({
  text,
  className,
  ...rest
}) => {
  return (
    <button
      className={`flex-1 rounded p-3 text-white shadow-sm hover:brightness-110 ${className}`}
      {...rest}
    >
      {text}
    </button>
  );
};

export { ElevateButton };
