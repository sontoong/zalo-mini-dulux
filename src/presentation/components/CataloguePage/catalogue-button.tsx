import React, { FC } from "react";
import PDFIcon from "../../static/pdf-icon.svg";
import { DownloadOutlined } from "@ant-design/icons";
import { useNavigate } from "zmp-ui";

export const CatalogueButton: FC<Props> = ({ file, name, size }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-start justify-between"
      onClick={() =>
        navigate(`/view-pdf`, { state: { file: file, name: name } })
      }
    >
      <div className="flex gap-3">
        <div className="size-[48px]">
          <img
            src={PDFIcon}
            alt="pdf-icon"
            className="size-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="font-title text-[15px] font-bold">{name}</div>
          <div className="text-xs font-normal text-gray5">{size}</div>
        </div>
      </div>
      <DownloadOutlined className="size-[14px] text-gray5" />
    </div>
  );
};

type Props = {
  name: string;
  size: string;
  file: string;
};
