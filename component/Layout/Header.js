import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";
function Header() {
  const router = useRouter();

  const isActive = (path) => {
    return router.pathname === path ? "active" : "";
  };

  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header className={active ? "top-header active" : "top-header"}>
        <nav className="navigation">
          <div className="container">
            <div className="main-header">
              <div className="logo">
                <Link href="/" passHref>
                  <a className={isActive("/")}>
                    <img src="/assets/img/logo.svg" alt="Logo" />
                  </a>
                </Link>
              </div>
              <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
                <ul className="nav-ul">
                  <li className={`nav-list ${isActive("/about")}`}>
                    <Link href="/about" passHref>
                      <a>
                        <span>Why Us</span>
                      </a>
                    </Link>
                  </li>
                  <li className={`nav-list ${isActive("/product")}`}>
                    <Link href="/product" passHref>
                      <a>
                        <span>Product</span>
                      </a>
                    </Link>
                  </li>
                  <li className={`nav-list ${isActive("/knowledge-hub")}`}>
                    <Link href="/knowledge-hub" passHref>
                      <a>
                        <span>Knowledge Hub</span>
                      </a>
                    </Link>
                  </li>
                  <li className={`nav-list ${isActive("/faqs")}`}>
                    <Link href="/faqs" passHref>
                      <a>
                        <span>FAQs</span>
                      </a>
                    </Link>
                  </li>
                  <li className={`nav-list ${isActive("/contact-us")}`}>
                    <Link href="/faqs/#contact">
                      <a>
                        <span>Contact Us</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mobile-toggle" onClick={toggleMenu}>
                {menuOpen ? (
                  <i class="fa-solid fa-x"></i>
                ) : (
                  <i class="fa-solid fa-bars-staggered"></i>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
