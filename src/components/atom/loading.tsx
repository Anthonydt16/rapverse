import React from "react";

export const Loading = () => (
  <div className="flex h-full items-center justify-center gap-3">
    <div className="loading-dot bg-[#d24dff]" />
    <div className="loading-dot bg-[#d24dff]" />
    <div className="loading-dot bg-[#d24dff]" />

    <style>
      {`
        .loading-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          animation: pulse 1.2s infinite;
          box-shadow: 0 0 10px #d24dff;
        }

        .loading-dot:nth-child(1) {
          animation-delay: 0s;
        }
        .loading-dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        .loading-dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes pulse {
          0%, 80%, 100% {
            transform: scale(0.8);
            opacity: 0.5;
            box-shadow: 0 0 8px #d24dff;
          }
          40% {
            transform: scale(1.3);
            opacity: 1;
            box-shadow: 0 0 24px #d24dff;
          }
        }
      `}
    </style>
  </div>
);

export default Loading;
