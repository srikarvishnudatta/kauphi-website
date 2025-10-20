import { ComponentProps } from "react";

type LabelProps = ComponentProps<"label"> & {};

export default function Label(props: LabelProps) {
  return <label {...props} />;
}
