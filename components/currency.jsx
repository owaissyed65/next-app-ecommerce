"use client";
import { formatter } from "@/lib/utils";
import React, { useState, useEffect } from "react";

const currency = (price) => {
  const [isMounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!isMounted) return null;
  return <div className="font-semibold">{formatter.format(price)}</div>;
};

export default currency;
