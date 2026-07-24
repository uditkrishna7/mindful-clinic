import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-xl border border-transparent bg-clip-padding text-sm font-medium transition-all duration-300 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20",

        outline:
          "border-border bg-background text-foreground hover:-translate-y-1 hover:bg-muted hover:shadow-lg",

        secondary:
          "bg-secondary text-secondary-foreground hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/30",

        ghost:
          "hover:bg-muted hover:text-foreground",

        destructive:
          "bg-destructive text-white hover:-translate-y-1 hover:shadow-lg",

        link:
          "text-primary underline-offset-4 hover:underline",
      },

      size: {
        default:
          "h-10 gap-2 px-5",

        xs:
          "h-8 gap-1 rounded-lg px-3 text-xs",

        sm:
          "h-9 gap-1.5 rounded-lg px-4 text-sm",

        lg:
          "h-12 gap-2 px-7 text-base",

        icon:
          "size-10",

        "icon-xs":
          "size-8 rounded-lg",

        "icon-sm":
          "size-9 rounded-lg",

        "icon-lg":
          "size-12",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);


function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        buttonVariants({
          variant,
          size,
          className,
        })
      )}
      {...props}
    />
  );
}


export {
  Button,
  buttonVariants,
};