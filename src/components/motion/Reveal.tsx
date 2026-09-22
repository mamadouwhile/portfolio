"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { fadeInUp } from "@/lib/animations";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
};

/** Apparition douce au scroll (fade + léger décalage vertical). */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}
