import React, { ReactNode } from "react";

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <main className="w-full px-10 xl:px-0 xl:max-w-screen-xl lg:flex-row flex-col mx-auto ">
      {children}
    </main>
  );
}

export default Wrapper;
