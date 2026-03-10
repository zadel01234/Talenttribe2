export default function TribalDivider() {
  return (
    <div className="w-full overflow-hidden py-2">
      <svg viewBox="0 0 1200 30" className="w-full" xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: 20 }).map((_, i) => (
          <g key={i} transform={`translate(${i * 60 + 30}, 15)`}>
            <polygon
              points="0,-12 14,0 0,12 -14,0"
              fill="none"
              stroke="#f5a000"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <polygon points="0,-6 7,0 0,6 -7,0" fill="#f5a000" opacity="0.25" />
          </g>
        ))}
      </svg>
    </div>
  )
}
