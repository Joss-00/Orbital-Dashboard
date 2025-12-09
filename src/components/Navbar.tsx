import LinksMobile from "./LinksMobile"
import LinksDesktop from "./LinksDesktop"

const Navbar = () => {
  return (
    <nav className="bg-black py-5">
      <div className="align-element">
        <LinksMobile />
        <LinksDesktop />
      </div>
    </nav>
  )
}

export default Navbar