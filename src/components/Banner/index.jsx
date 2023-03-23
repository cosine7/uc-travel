import './index.scss'

export default function Banner({
  image,
  title,
  subtitle,
  content,
}) {
  return (
    <header 
      className="banner"
      style={{ backgroundImage: `url(${require(`@images/banners/${image}`)})` }}
    >
      <div className="mask">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        {content && content.map(p => <h4 key={p}>{p}</h4>)}
      </div>
    </header>
  )
}