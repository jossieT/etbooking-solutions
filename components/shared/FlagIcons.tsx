import React from 'react';

export function UsaFlagIcon({ className = 'w-4 h-3' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={`${className} inline-block rounded-[2px] shadow-[0_0_1px_rgba(0,0,0,0.3)] flex-shrink-0 object-cover`}
      aria-hidden="true"
    >
      <g fillRule="evenodd">
        {/* Red background */}
        <path fill="#bd3d44" d="M0 0h640v480H0z" />
        {/* White stripes */}
        <path
          stroke="#ffffff"
          strokeWidth="37"
          d="M0 55.5h640M0 129.5h640M0 203.5h640M0 277.5h640M0 351.5h640M0 425.5h640"
        />
        {/* Blue Canton */}
        <path fill="#192f5d" d="M0 0h296v259H0z" />
        {/* Stars representation */}
        <g fill="#ffffff">
          <polygon points="40,25 45,38 33,30 47,30 35,38" />
          <polygon points="90,25 95,38 83,30 97,30 85,38" />
          <polygon points="140,25 145,38 133,30 147,30 135,38" />
          <polygon points="190,25 195,38 183,30 197,30 185,38" />
          <polygon points="240,25 245,38 233,30 247,30 235,38" />

          <polygon points="65,60 70,73 58,65 72,65 60,73" />
          <polygon points="115,60 120,73 108,65 122,65 110,73" />
          <polygon points="165,60 170,73 158,65 172,65 160,73" />
          <polygon points="215,60 220,73 208,65 222,65 210,73" />

          <polygon points="40,95 45,108 33,100 47,100 35,108" />
          <polygon points="90,95 95,108 83,100 97,100 85,108" />
          <polygon points="140,95 145,108 133,100 147,100 135,108" />
          <polygon points="190,95 195,108 183,100 197,100 185,108" />
          <polygon points="240,95 245,108 233,100 247,100 235,108" />

          <polygon points="65,130 70,143 58,135 72,135 60,143" />
          <polygon points="115,130 120,143 108,135 122,135 110,143" />
          <polygon points="165,130 170,143 158,135 172,135 160,143" />
          <polygon points="215,130 220,143 208,135 222,135 210,143" />

          <polygon points="40,165 45,178 33,170 47,170 35,178" />
          <polygon points="90,165 95,178 83,170 97,170 85,178" />
          <polygon points="140,165 145,178 133,170 147,170 135,178" />
          <polygon points="190,165 195,178 183,170 197,170 185,178" />
          <polygon points="240,165 245,178 233,170 247,170 235,178" />

          <polygon points="65,200 70,213 58,205 72,205 60,213" />
          <polygon points="115,200 120,213 108,205 122,205 110,213" />
          <polygon points="165,200 170,213 158,205 172,205 160,213" />
          <polygon points="215,200 220,213 208,205 222,205 210,213" />

          <polygon points="40,235 45,248 33,240 47,240 35,248" />
          <polygon points="90,235 95,248 83,240 97,240 85,248" />
          <polygon points="140,235 145,248 133,240 147,240 135,248" />
          <polygon points="190,235 195,248 183,240 197,240 185,248" />
          <polygon points="240,235 245,248 233,240 247,240 235,248" />
        </g>
      </g>
    </svg>
  );
}

export function EthiopiaFlagIcon({ className = 'w-4 h-3' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={`${className} inline-block rounded-[2px] shadow-[0_0_1px_rgba(0,0,0,0.3)] flex-shrink-0 object-cover`}
      aria-hidden="true"
    >
      <path fill="#078930" d="M0 0h640v160H0z" />
      <path fill="#fcdd09" d="M0 160h640v160H0z" />
      <path fill="#da121a" d="M0 320h640v160H0z" />
      <circle cx="320" cy="240" r="105" fill="#0f47af" />
      <g fill="#fcdd09">
        <polygon points="320,165 338,220 395,220 349,254 366,308 320,274 274,308 291,254 245,220 302,220" />
        <line x1="320" y1="240" x2="320" y2="148" stroke="#fcdd09" strokeWidth="6" />
        <line x1="320" y1="240" x2="408" y2="212" stroke="#fcdd09" strokeWidth="6" />
        <line x1="320" y1="240" x2="374" y2="312" stroke="#fcdd09" strokeWidth="6" />
        <line x1="320" y1="240" x2="266" y2="312" stroke="#fcdd09" strokeWidth="6" />
        <line x1="320" y1="240" x2="232" y2="212" stroke="#fcdd09" strokeWidth="6" />
      </g>
    </svg>
  );
}
