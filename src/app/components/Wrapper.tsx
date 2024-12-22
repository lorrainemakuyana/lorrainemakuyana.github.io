import React, { ReactNode } from "react";
import Header from "./Header";

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <main className="h-screen w-screen bg-zinc-900">
      <Header />
      <div className="mx-auto w-full lg:w-2/3 xl:max-w-screen-md">
        {children}
      </div>
    </main>
  );
}

export default Wrapper;
