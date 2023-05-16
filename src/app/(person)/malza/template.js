"use client";

import { useState } from "react";

export default function Template({ children }) {
  const [count, setCount] = useState(0);
  return (
    <div style={{ border: "2px dashed blue", padding: "10px" }}>
      <button onClick={() => setCount((cur) => cur + 1)}>템플릿 업</button>
      <br />
      <button onClick={() => setCount((cur) => cur - 1)}>템플릿 다운</button>
      <p>여긴 템플릿입니다~ 레이아웃이 더 상위네요!</p>
      <p>템플릿의 상태가 유지되나요~? 안되네요!!</p>
      {count}
      {children}
    </div>
  );
}
