import React from "react";
import {
  InputNumber as OriginInputNumber,
  InputNumberProps,
  ConfigProvider,
} from "antd";

function InputNumber(props: TCustomInputNumber) {
  return (
    <ConfigProvider
      theme={{
        components: { InputNumber: { paddingBlock: 0, paddingInline: 0 } },
      }}
    >
      <OriginInputNumber min={0} changeOnWheel className="p-0" {...props} />
    </ConfigProvider>
  );
}

function InputNumberCurrency({
  locale = "vi-VN",
  currency = "VND",
  ...props
}: TCustomInputNumber) {
  const currencyFormatter =
    (currency: Intl.NumberFormatOptions["currency"]) =>
    (value: number | undefined) => {
      if (!value) {
        return "";
      }
      return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
      }).format(value);
    };

  const currencyParser = (val: any) => {
    try {
      // for when the input gets clears
      if (typeof val === "string" && !val.length) {
        val = "0.0";
      }

      // detecting and parsing between comma and dot
      const group = new Intl.NumberFormat(locale)
        .format(1111)
        .replace(/1/g, "");
      const decimal = new Intl.NumberFormat(locale)
        .format(1.1)
        .replace(/1/g, "");
      let reversedVal = val.replace(new RegExp("\\" + group, "g"), "");
      reversedVal = reversedVal.replace(new RegExp("\\" + decimal, "g"), ".");
      //  => 1232.21 €

      // removing everything except the digits and dot
      reversedVal = reversedVal.replace(/[^0-9.]/g, "");
      //  => 1232.21

      // appending digits properly
      const digitsAfterDecimalCount = (reversedVal.split(".")[1] || []).length;
      const needsDigitsAppended = digitsAfterDecimalCount > 2;

      if (needsDigitsAppended) {
        reversedVal = reversedVal * Math.pow(10, digitsAfterDecimalCount - 2);
      }

      return Number.isNaN(reversedVal) ? 0 : reversedVal;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <OriginInputNumber
      min={0}
      changeOnWheel
      formatter={currencyFormatter(currency)}
      parser={currencyParser}
      controls={false}
      {...props}
    />
  );
}

InputNumber.Currency = InputNumberCurrency;

export { InputNumber };

type TCustomInputNumber = Omit<InputNumberProps<number>, "style"> & {
  currency?: string;
  locale?: string;
};
