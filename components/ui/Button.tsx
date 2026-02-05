"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
    size?: "sm" | "md" | "lg" | "icon";
    isLoading?: boolean;
    children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
        const variants = {
            primary: "bg-indigo-500/10 text-indigo-100 border border-indigo-500/50 hover:bg-indigo-500/20 transition-all",
            secondary: "bg-white/5 text-white/90 border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm",
            outline: "border border-white/20 bg-transparent hover:bg-white/10 text-white transition-all",
            ghost: "hover:bg-white/5 text-muted-foreground hover:text-white transition-all",
            link: "text-indigo-400 underline-offset-4 hover:underline transition-all",
        };

        const sizes = {
            sm: "h-8 px-4 text-xs",
            md: "h-11 px-6 py-2",
            lg: "h-13 px-10 text-lg",
            icon: "h-10 w-10 p-0 flex items-center justify-center",
        };

        return (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.02 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-semibold transition-all focus-visible:outline-none whitespace-nowrap",
                    variants[variant],
                    sizes[size],
                    className
                )}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && (
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                )}
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
