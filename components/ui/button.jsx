import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Button = forwardRef(
  ({ className, children, type = "button", disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          `w-auto
        rounded-full
        bg-black
        border-transparent
        px-5
        py-3
        disabled:cursor-not-allowed
        disabled:opacity-50
        text-white
        font-semibold
        hover:opacity-50
        transition
        `,
          className
        )}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default Button;
