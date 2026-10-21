
const asset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

export default function Logo({ className = '', priority = false }) {
  return (
    <img
      className={`brand-logo ${className}`.trim()}
      src={asset('images/logo.png')}
      alt="SNEHA PRO — Audio | Visual | Lighting"
      width="320"
      height="94"
      decoding={priority ? 'sync' : 'async'}
    />
  )
}
