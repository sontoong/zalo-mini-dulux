import { App, GetProp, UploadFile, UploadProps } from "antd";
import React, { useState } from "react";
import { Modal, Upload } from "antd";
import { RequiredFields } from "../../utils/types";
import { v4 as uuidv4 } from "uuid";
import { Image } from "@mui/icons-material";

function ImageUpload(props: UploadImageProps) {
  const { message } = App.useApp();
  const { images, setImages, maxCount = 1 } = props;

  const imagesWithUid = images.map((image) => {
    return {
      ...image,
      uid: image.uid ?? uuidv4(),
    };
  });

  const onChange: UploadProps["onChange"] = ({ fileList }) => {
    setImages(fileList);
  };

  const uploadConditions = (file: FileType) => {
    if (file.type != "image/jpeg" && file.type != "image/png") {
      message.error("You can only upload JPG/PNG file!");
      return false;
    }
    if (!file.size || file.size / 1024 / 1024 > 2) {
      message.error("Image size must be smaller than 2MB!");
      return false;
    }
    return true;
  };

  return (
    <UploadImg
      fileListLength={images.length}
      listType="picture-card"
      maxCount={maxCount}
      fileList={imagesWithUid}
      onChange={onChange}
      uploadConditions={uploadConditions}
    />
  );
}

function UploadImg(
  props: RequiredFields<
    Omit<UploadProps, "beforeUpload" | "onPreview" | "accept">,
    "listType" | "maxCount"
  > & {
    uploadConditions?: (file: FileType) => boolean;
    fileListLength: number;
  },
) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const beforeUpload = (file: FileType) => {
    if (props.uploadConditions && !props.uploadConditions(file)) {
      return Upload.LIST_IGNORE;
    }
    return false;
  };

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name ||
        file.url!.substring(file.url!.lastIndexOf("/") + 1).split("?")[0],
    );
  };

  return (
    <>
      <Upload
        {...props}
        onPreview={handlePreview}
        beforeUpload={beforeUpload}
        accept="image/png, image/jpeg"
        multiple
      >
        {props.fileListLength < props.maxCount ? (
          <div style={{ border: 0, background: "none" }}>
            <Image className="!text-[50px] text-gray3" />
          </div>
        ) : null}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
}

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
export type UploadImage = Omit<UploadFile, "uid">;
type UploadImageProps = {
  images: UploadImage[] | UploadFile[];
  setImages: React.Dispatch<React.SetStateAction<UploadImage[]>>;
  maxCount?: UploadProps["maxCount"];
};

export { ImageUpload };
