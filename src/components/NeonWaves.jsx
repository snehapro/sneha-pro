export default function NeonWaves({ variant = 'mid' }) {
  const paths =
    variant === 'hero'
      ? [
          'M-40 170 C 180 40, 340 210, 560 90 S 920 30, 1280 160',
          'M-20 130 C 220 10, 420 190, 680 70 S 1020 20, 1320 140',
        ]
      : [
          'M-40 110 C 200 10, 380 160, 620 70 S 980 10, 1280 120',
          'M-10 80 C 260 -10, 480 150, 760 50 S 1100 0, 1320 90',
        ]

  return (
    <svg className={`neon-waves neon-waves-${variant}`} viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={`wave-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff1a3c" stopOpacity="0" />
          <stop offset="22%" stopColor="#ff2a4a" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#ff6b82" stopOpacity="1" />
          <stop offset="78%" stopColor="#ff1a3c" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ff1a3c" stopOpacity="0" />
        </linearGradient>
        <filter id={`glow-${variant}`}>
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {paths.map((d, i) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke={`url(#wave-${variant})`}
          strokeWidth={i === 0 ? 2.2 : 1.4}
          filter={`url(#glow-${variant})`}
          opacity={i === 0 ? 0.95 : 0.55}
        />
      ))}
    </svg>
  )
}
