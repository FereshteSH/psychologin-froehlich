import React from "react";

type QuoteProps = {
  text: string;
  author: string;
};

export default function Quote({ text, author }: QuoteProps) {
  return (
    <div className="relative p-4 rounded-lg max-w-md mx-auto text-justify overflow-hidden w-50">
      
      <img
        src="/images/RightDoubleQuote.svg"
        alt="Right quotation mark"
        className="absolute -top-20 left-1/2 ml-15 -translate-x-1/2 opacity-10 -z-0 select-none w-80 h-80 pointer-events-none "
      />

      {/* Quote Text */}
      <p className="relative !text-[11px] z-10  !text-[#243433] -mb-5">
        {text}
      </p>

      {/* Author */}
      <p className="relative mt-4 font-medium !text-[11px]  z-10">
        {author}
      </p>
      </div>
  );
}
