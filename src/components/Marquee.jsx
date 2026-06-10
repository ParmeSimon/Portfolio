const items = ['React', 'Symfony', 'Flutter', 'Firebase', 'TypeScript', 'Next.js', 'PHP', 'SQL', 'Unity', 'CI/CD']

export default function Marquee() {
  const track = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}
