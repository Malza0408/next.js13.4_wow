"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";

export default function Layout({ children }) {
  const [count, setCount] = useState(0);
  const segment = useSelectedLayoutSegment();

  return (
    <div style={{ border: "2px solid blue", height: "100%", padding: "20px" }}>
      <h1>Active segment: {segment}</h1>

      <button onClick={() => setCount((cur) => cur + 1)}>1뎁스 업</button>
      <br />
      <button onClick={() => setCount((cur) => cur - 1)}>1뎁스 다운</button>
      <br />
      <p>여긴 1depth 레이아웃입니다.</p>
      <b>변경된 1뎁스 카운터는 : {count}</b>
      {children}
    </div>
  );
}
