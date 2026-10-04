// Every call-to-action on this site is a link, so Button renders an <a>.
export default function Button({ href, variant = 'primary', external = false, children, ...rest }) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a className={`btn btn--${variant}`} href={href} {...externalProps} {...rest}>
      {children}
    </a>
  )
}
