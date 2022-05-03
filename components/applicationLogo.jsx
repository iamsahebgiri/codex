import React from "react";

export default function ApplicationLogo({ className }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 1.1547C14.7624 0.440172 13.2376 0.440172 12 1.1547L2.14362 6.8453C0.906011 7.55983 0.143616 8.88034 0.143616 10.3094V21.6906C0.143616 23.1197 0.906011 24.4402 2.14362 25.1547L12 30.8453C13.2376 31.5598 14.7624 31.5598 16 30.8453L25.8564 25.1547C27.094 24.4402 27.8564 23.1197 27.8564 21.6906V10.3094C27.8564 8.88034 27.094 7.55983 25.8564 6.8453L16 1.1547ZM16 7.1547C14.7624 6.44017 13.2376 6.44017 12 7.1547L7.33977 9.8453C6.10216 10.5598 5.33977 11.8803 5.33977 13.3094V18.6906C5.33977 20.1197 6.10216 21.4402 7.33977 22.1547L12 24.8453C13.2376 25.5598 14.7624 25.5598 16 24.8453L20.6603 22.1547C21.8979 21.4402 22.6603 20.1197 22.6603 18.6906V13.3094C22.6603 11.8803 21.8979 10.5598 20.6603 9.8453L16 7.1547Z"
        fill="url(#paint0_linear_32_6)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_32_6"
          x1="31.5"
          y1="-1.5"
          x2="7.5"
          y2="30.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00B9FF" />
          <stop offset="1" stop-color="#003AFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
