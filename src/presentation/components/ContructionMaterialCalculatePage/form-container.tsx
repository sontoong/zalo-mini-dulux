import React, { useState } from "react";
import AreaForm from "./area-form";
import { ElevateButton } from "../common/button";
import clsx from "clsx";
import { MaterialForm } from "./material-form";
import { Result } from "./result-form";
import { Steps } from "../common/steps";
import successIcon from "../../static/success-icon.svg";
import { Form } from "../common/form";

const FormContainer = () => {
  const [areaForm] = Form.useForm();
  const [materialForm] = Form.useForm();

  const [current, setCurrent] = useState<number>(0);
  const [finish, setFinish] = useState<boolean>(false);

  const goNext = () => {
    setCurrent((prev) => prev + 1);
  };

  const onChange = (clickedIndex: number) => {
    if (!finish && clickedIndex > current) {
      return;
    }
    setCurrent(clickedIndex);
  };

  const steps = [
    {
      title: <div className="font-title text-sm font-bold">Tính diện tích</div>,
      content: <AreaForm form={areaForm} />,
    },
    {
      title: <div className="font-title text-sm font-bold">Tính vật tư</div>,
      content: <MaterialForm form={materialForm} />,
    },
    {
      title: <div className="font-title text-sm font-bold">Kết quả</div>,
      content: <Result />,
    },
  ];

  return (
    <Form.Provider
      onFormFinish={(name) => {
        if (name === "areaForm") {
          if (finish) {
            setFinish(false);
          }
          goNext();
        }
        if (name === "materialForm") {
          goNext();
          setFinish(true);
        }
      }}
    >
      <div className="relative flex h-full flex-col gap-2">
        <div className="bg-white px-4 py-3">
          <Steps
            onChange={onChange}
            current={current}
            items={steps}
            setStatus={({ item, index }) => {
              return finish
                ? index === current
                  ? "active"
                  : "completed"
                : null;
            }}
            render={({ index, itemStatus }) => (
              <>
                {itemStatus === "active" ? (
                  index === 2 ? (
                    <div className="flex size-[40px] items-center justify-center">
                      <img
                        src={successIcon}
                        alt="Success"
                        className="size-[40px]"
                      />
                    </div>
                  ) : (
                    <div className="flex size-[40px] items-center justify-center rounded-full bg-step-gradient text-xl text-white">
                      {index + 1}
                    </div>
                  )
                ) : itemStatus === "completed" ? (
                  <div className="flex size-[40px] items-center justify-center">
                    <img
                      src={successIcon}
                      alt="Success"
                      className="size-[40px]"
                    />
                  </div>
                ) : itemStatus === "error" ? (
                  <div className="flex size-[40px] items-center justify-center">
                    <img
                      src={successIcon}
                      alt="Success"
                      className="size-[40px]"
                    />
                  </div>
                ) : (
                  <div className="flex size-[40px] items-center justify-center rounded-full border border-gray-300 bg-gray2 text-xl text-gray-500">
                    {index + 1}
                  </div>
                )}
              </>
            )}
          />
        </div>
        {/* Render content for each step */}
        <div>{steps[current]?.content}</div>
        <div
          className={clsx(
            "fixed bottom-0 left-0 flex w-full justify-center rounded-t-xl bg-white px-[105px] pb-[24px] pt-[12px] drop-shadow-top-card",
            { hidden: current >= steps.length - 1 },
          )}
        >
          {current === 0 && (
            <ElevateButton
              text="Tính diện tích"
              className="bg-greenBtn drop-shadow-greenBtn"
              onClick={() => {
                areaForm.submit();
              }}
            />
          )}
          {current === 1 && (
            <ElevateButton
              text="Xem kết quả"
              className="bg-greenBtn drop-shadow-greenBtn"
              onClick={() => {
                materialForm.submit();
              }}
            />
          )}
        </div>
      </div>
    </Form.Provider>
  );
};

export default FormContainer;
