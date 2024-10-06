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
    defaultVarians: {
      intent: "primary",
      spacing: "mSmall",
    },
  },
});

interface ButtonProps extends VariantProps<typeof textStyles> {
  text: string;
}

export default function Text({ intent, color, text, ...props }: ButtonProps) {
  return (
    <text className={textStyles({ intent, color })} {...props}>
      {text}
    </text>
  );
}
