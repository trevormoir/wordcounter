export const Subheader = ({heading, subHeading}) => {
  return (
    <section className="subheader">
      <h1 data-testid="heading">{heading}</h1>
      <p data-testid="subHeading">{subHeading}</p>
    </section>
  )
}
