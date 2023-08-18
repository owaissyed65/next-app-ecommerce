"use client";
import { formatter } from "@/lib/utils";
import React, { useState, useEffect } from "react";

const Currency = ({price}) => {
  const [isMounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!isMounted) return "loading";
  return <div className="font-semibold">{formatter.format(price)}</div>;
};

export default Currency;
