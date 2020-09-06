import * as React from "react";

function SvgClear(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#666" />
      <path
        d="M17.743 16.543a.829.829 0 010 1.2.778.778 0 01-.6.257.778.778 0 01-.6-.257L12 13.2l-4.543 4.543a.778.778 0 01-.6.257.778.778 0 01-.6-.257.829.829 0 010-1.2L10.8 12 6.257 7.457a.829.829 0 010-1.2.829.829 0 011.2 0L12 10.8l4.543-4.543a.829.829 0 011.2 0 .829.829 0 010 1.2L13.2 12l4.543 4.543z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgClear;
