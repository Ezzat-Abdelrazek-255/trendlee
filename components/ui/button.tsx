import { cn } from "@/utils";
import React, { ButtonHTMLAttributes } from "react";

type ButtonVariants = "primary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  asChild?: boolean;
}

const Button = ({
  variant = "primary",
  className,
  children,
  asChild = false,
  ...props
}: ButtonProps) => {
  const styles: {
    [key in ButtonVariants]: string;
  } = {
    primary:
      "relative z-0 rounded-full  px-[2.4rem] py-[1.6rem] text-black after:absolute after:inset-0 after:z-hidden after:bg-primary/50 after:blur-[1.2rem] after:content-[''] font-medium bg-gradient-to-b from-primary to-primary-dark/80 backdrop-blur-sm",
    outline:
      "rounded-full border-[1px] border-primary px-[3.2rem] py-[2.4rem] text-[2.4rem] leading-[85%]",
  };

  const Component = asChild
    ? React.Children.only(children)
    : React.createElement("button");

  const ReactElement = Component as React.ReactElement;

  return React.cloneElement(ReactElement, {
    ...props,
    className: cn(styles[variant], className, ReactElement.props.className),
    children: asChild ? ReactElement.props.children : children,
  });
};

export default Button;
