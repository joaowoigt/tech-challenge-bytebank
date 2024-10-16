import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "hover:bg-black font-bold  py-[12px] px-[42px] rounded rounded-lg",
  {
    variants: {
      intent: {
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-white",
        negative: "bg-negative text-white",
        secondaryVariant:
          "bg-black text-secondary outline outline-2 outline-secondary",
      },
      spacing: {
        mSmall: "m-small",
        mMedium: "m-medium",
        mBig: "m-big",
      },
      defaultVarians: {
        intent: "primary",
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
