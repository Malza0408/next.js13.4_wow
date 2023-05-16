"use client";

import { useRouter } from "next/navigation";
import React from "react";

function RsnSlug() {
  const router = useRouter();
  return (
    <section style={{ border: "2px solid skyblue" }}>
      <h3>Rsn Slug page</h3>
      <button onClick={() => router.back()}>뒤로가기</button>
    </section>
  );
}

export default RsnSlug;
