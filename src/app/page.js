import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link href={"/malza"}>- 말자로 이동~</Link>
      <Link href={"/malza/RSN"}>- 회사에 있는 말자로 이동~</Link>
    </div>
  );
}
