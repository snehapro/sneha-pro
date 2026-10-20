export default function Logo({ className = '', priority = false }) {
  return (
    <img
      className={`brand-logo ${className}`.trim()}
      src="/images/logo.jpg"
      alt="SNEHA PRO — Audio | Visual | Lighting"
      width="320"
      height="94"
      decoding={priority ? 'sync' : 'async'}
    />
  )
}
