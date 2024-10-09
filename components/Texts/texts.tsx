import { cva, VariantProps } from "class-variance-authority";

const textStyles = cva("font-sans", {
  variants: {
    intent: {
      Heading: "text-big ",
      Regular: "text-medium",
      Small: "text-small",
      ExtraSmall: "text-extra_small",
    },
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
      negative: "text-negative",
      grey: "text-grey",
      white: "text-white",
      black: "text-black",
    },
    style: {
      bold: "font-bold",
    },
    hover: {
      pointer: "hover:cursor-pointer",
    },
    defaultVarians: {
      intent: "primary",
      spacing: "mSmall",
    },
  },
});

interface ButtonProps extends VariantProps<typeof textStyles> {
  text: string;
}

export default function Text({
  intent,
  color,
  style,
  text,
  hover,
  ...props
}: ButtonProps) {
  return (
    <text className={textStyles({ intent, color, style, hover })} {...props}>
      {text}
    </text>
  );
}
