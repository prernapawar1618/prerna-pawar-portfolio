"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface CardProps extends HTMLMotionProps<"div"> { }

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={cn(
                    "rounded-xl border border-border bg-black/40 backdrop-blur-sm shadow-sm p-6 text-card-foreground",
                    className
                )}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";

export { Card };
