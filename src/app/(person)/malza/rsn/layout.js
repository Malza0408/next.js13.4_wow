"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";

export default function Layout(props) {
  const [count, setCount] = useState(0);
  const segment = useSelectedLayoutSegment();

  return (
    <div
      style={{ border: "2px solid yellow", height: "100%", padding: "20px" }}
    >
      <h1>Active segment: {segment}</h1>

      <button onClick={() => setCount((cur) => cur + 1)}>2뎁스 업</button>
      <br />
      <button onClick={() => setCount((cur) => cur - 1)}>2뎁스 다운</button>
      <br />
      <p>여긴 2depth 레이아웃입니다.</p>
      <b>변경된 2뎁스 카운터는 : {count}</b>
      {props.children}
      {props.team}
      {props.analytics}
    </div>
  );
}
