import { useState } from "react";
import { motion } from "motion/react";
function Navigation() {
  return (
    <ul className="nav-ul sm:flex sm:gap-10">
      <li className="nav-li py-3">
        <a className="nav-link" href="#hero">
          Home
        </a>
      </li>
      <li className="nav-li py-3">
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li className="nav-li py-3">
        <a className="nav-link" href="#projects">
          Projects
        </a>
      </li>
      <li className="nav-li py-3">
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40 font-asimovian">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-5xl font-bold transition-colors hover:text-white"
          >
            Paras
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "close.svg" : "menu.svg"}
              className="w-8 h-8"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex sm:justify-end-safe sm:flex-row text-2xl">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5 text-2xl">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Header;
