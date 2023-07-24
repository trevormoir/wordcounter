import { NavLink } from 'react-router-dom';

export const Header = ({heading, subHeading}) => {
  return (
    <header>
      <section className="header">
        <h1 data-testid="heading">{heading}</h1>
        <p data-testid="subHeading">{subHeading}</p>
      </section>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Word Counter</NavLink>
        <NavLink to="/joke" className="link">Chuck Norris Facts</NavLink>
      </nav>
    </header>
  )
}
