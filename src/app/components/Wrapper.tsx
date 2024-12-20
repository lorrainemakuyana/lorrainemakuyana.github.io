import React, { ReactNode } from "react";

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <main className="h-screen w-screen">
      <div className="mx-auto h-full w-full flex-col overflow-y-auto overflow-x-hidden px-10 lg:flex-row xl:max-w-screen-xl xl:px-0">
        {children}
      </div>
    </main>
  );
}

export default Wrapper;
