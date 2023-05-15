"use client";

import Link from "next/link";
import React from "react";

function Malza() {
  return (
    <>
      <div>Malza page입니다</div>
      <br />
      <Link href={"/"}>- 메인으로 이동</Link>
      <br />
      <Link href={"/malza/RSN"}>- 회사로 이동</Link>
    </>
  );
}

export default Malza;
