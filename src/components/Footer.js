import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <Link to="/">&copy;{new Date().getFullYear()} wordcounter.trevormoir.com</Link>
    </footer>
  )
}
