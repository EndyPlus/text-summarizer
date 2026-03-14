"use client";

import { useEffect, useState } from "react";
import SkeletonElement from "./SkeletonElement";
import getRandomNumber from "@/src/helpers/utils/getRandomNumber";

function ListItemSkeleton() {
  const [textLength, setTextLength] = useState(100);

  useEffect(() => {
    function initTextLength() {
      setTextLength(getRandomNumber(95, 100));
    }

    initTextLength();
  }, []);

  return (
    <SkeletonElement
      className={`h-3.5 shrink-0`}
      style={{ width: `${textLength}%` }}
    />
  );
}

export default function SummarizedTextSkeleton() {
  const [arrLength, setArrLength] = useState(15);

  useEffect(() => {
    function initArrLength() {
      setArrLength(getRandomNumber(10, 20));
    }

    initArrLength();
  }, []);

  return (
    <ul className="flex w-full flex-col gap-y-1.5 overflow-y-auto p-5">
      {Array.from({ length: arrLength }).map((_, id) => {
        return <ListItemSkeleton key={id} />;
      })}
    </ul>
  );
}
