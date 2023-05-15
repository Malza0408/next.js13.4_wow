"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

function RSN() {
  const router = useRouter();
  return (
    <>
      <div>RSN 회사 페이지입니다.</div>
      <button onClick={() => router.back()}>이전page로 이동해봐</button>
    </>
  );
}

export default RSN;
