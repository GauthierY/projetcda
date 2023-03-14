import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/secteurs">Secteurs</Link>
        </li>
        <li>
          <Link href="/moyens">Moyens</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/connexion">Connexion</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
