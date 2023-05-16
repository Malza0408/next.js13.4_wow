"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function RSN() {
  const router = useRouter();

  const [slug, setSlug] = useState(0);
  return (
    <section style={{ border: "2px solid green", padding: "10px" }}>
      <div>RSN 회사 페이지입니다.</div>
      <button onClick={() => router.back()}>이전page로 이동해봐</button>
      <br />
      <button onClick={() => setSlug(Math.floor(Math.random() * 10))}>
        Random Slug 생성
      </button>
      <h3>생성된 slug는 {slug} 입니다.</h3>
      <Link href={`/malza/rsn/${slug}`}>slug로 이동좀 해봐</Link>
    </section>
  );
}

export default RSN;
