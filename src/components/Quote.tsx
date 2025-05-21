import React from "react";

type QuoteProps = {
  text: string;
  author: string;
};

export default function Quote({ text, author }: QuoteProps) {
  return (
    <div className="relative p-4 rounded-lg max-w-md mx-auto text-center overflow-hidden">
      <img
        src="/images/RightDoubleQuote.svg"
        alt="Right quotation mark"
        className="absolute top-2 left-1/2 -translate-x-1/2 opacity-10 -z-0 select-none w-20 h-auto pointer-events-none"
      />

      {/* Quote Text */}
      <p className="relative text-base text-gray-800 z-10 leading-relaxed">
        {text}
      </p>

      {/* Author */}
      <p className="relative mt-4 font-medium text-sm text-gray-700 z-10">
        {author}
      </p>
    </div>
  );
}
