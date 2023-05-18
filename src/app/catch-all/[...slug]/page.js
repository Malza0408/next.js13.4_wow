"use client";

import React, { useState } from "react";

function CatchAll() {
  const [error, setError] = useState(100);

  if (error === undefined) throw new Error("asdsad");

  return (
    <>
      <div>모든 경로 잡아버리기~[...slug]</div>
      <button onClick={() => setError(undefined)}>에러 발생시키기</button>
    </>
  );
}

export default CatchAll;
