import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "hover:bg-black text-white font-bold py-[12px] px-[42px] rounded rounded-lg",
  {
    variants: {
      intent: {
        primary: "bg-primary ",
        secondary: "bg-secondary",
        negative: "bg-negative",
      },
      spacing: {
        mSmall: "m-small",
        mMedium: "m-medium",
        mBig: "m-big",
      },
      defaultVarians: {
        intent: "primary",
        spacing: "mSmall",
      },
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  text: string;
  onClick: (event: any) => void;
}

export default function Button({
  intent,
  spacing,
  text,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonStyles({ intent, spacing })}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
}
