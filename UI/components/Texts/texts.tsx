import { cva, VariantProps } from "class-variance-authority";

const textStyles = cva("font-sans", {
  variants: {
    intent: {
      ExtraHeading: "text-[32px]",
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
      darkGray: "text-darkGray",
    },
    style: {
      bold: "font-bold",
    },
    mt: {
      big: "mt-big",
      medium: "mt-medium",
      small: "mt-small",
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
  text: string | undefined;
}

export default function Text({
  intent,
  color,
  style,
  mt,
  text,
  hover,
  ...props
}: ButtonProps) {
  return (
    <text
      className={textStyles({ intent, color, style, hover, mt })}
      {...props}
    >
      {text}
    </text>
  );
}
