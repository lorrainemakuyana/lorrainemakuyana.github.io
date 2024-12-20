import React, { ReactNode } from "react";

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto w-full flex-col px-10 lg:flex-row xl:max-w-screen-xl xl:px-0">
      {children}
    </main>
  );
}

export default Wrapper;
