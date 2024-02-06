import { PropsWithChildren } from "react";
import { CustomButtonProps } from "./types";

const CustomButton = (props: PropsWithChildren<CustomButtonProps>) => {
  return (
    <button {...props} disabled={props.isLoading}>
      {props.isLoading ? "Loading..." : props.children}
    </button>
  );
};

export default CustomButton;
