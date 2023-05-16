import React from "react";

function Layout({ children }) {
  return (
    <section style={{ border: "1px solid gray", padding: "10px" }}>
      <h2>이건 그룹핑 폴더의 레이아웃이지롱~</h2>
      {children}
    </section>
  );
}

export default Layout;
