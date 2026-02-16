import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type ButtonProps = HTMLMotionProps<"button"> & {
  disableScale?: boolean;
  tapScale?: number;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      disableScale = false,
      tapScale = 0.96,
      whileHover,
      whileTap,
      transition,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const resolvedWhileHover = disableScale ? undefined : whileHover;
    const resolvedWhileTap =
      disableScale || whileTap ? whileTap : { scale: tapScale };

    return (
      <motion.button
        ref={ref}
        type={type}
        whileHover={resolvedWhileHover}
        whileTap={resolvedWhileTap}
        transition={
          transition ?? { type: "spring", stiffness: 280, damping: 18 }
        }
        className={`cursor-pointer transition-transform ${className}`}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;
