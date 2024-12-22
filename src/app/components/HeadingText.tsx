import React from 'react'

function HeadingText({text}: {text: string}) {
  return (
    <div className="bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] bg-clip-text font-raleway text-3xl text-transparent">
      {text}
    </div>
  );
}

export default HeadingText