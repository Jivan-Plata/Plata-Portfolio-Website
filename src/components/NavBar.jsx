import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className="flex justify-between items-center sticky text-textcolor py-3 px-8 md:px-32 bg-primary drop-shadow-md top-0 z-10 ">

      <a href="#">
        <p className="font-extrabold text-secondary p-3 ">Jivan Plata</p>
      </a>

      <a
        href="https://drive.google.com/drive/folders/1yo3VL_cyr247pnq-TRYjvU0IAefZIv3C?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="md:hidden px-4 py-2 rounded-full bg-secondary text-primary text-[0.70rem] font-semibold hover:bg-[#a1f6ff] transition-all duration-300 shadow-md hover:shadow-[0_0_10px_#A1F6FF] flex items-center justify-center gap-2 whitespace-nowrap"
      >
        Download Resume
      </a>

      {/* Desktop Menu */}
        <ul className="hidden xl:flex items-center gap-12 font-medium text-base ">

          <li>
            <a href="#EducAndExpi" className="p-3 block w-full text-center hover:underline hover:text-white rounded-md transition-all cursor-pointer">
              Education & Experience
            </a>
          </li>

          <li>
            <a href="#Certifications" className="p-3 block w-full text-center hover:underline hover:text-white rounded-md transition-all cursor-pointer">
              Certifications
            </a>
          </li>

          <li>
            <a href="#Projects" className="p-3 block w-full text-center hover:underline hover:text-white rounded-md transition-all cursor-pointer">
              Projects
            </a>
          </li>

          <li>
            <a href="#TechStack" className="p-3 block w-full text-center hover:underline hover:text-white rounded-md transition-all cursor-pointer">
              Tech Stack
            </a>
          </li>

          <li>
            <a href="#Contacts" className="p-3 block w-full text-center hover:underline hover:text-white rounded-md transition-all cursor-pointer">
              Contacts
            </a>
          </li>
        </ul>

      {/* Burger Icon */}
      <div className="xl:hidden block z-50 items-center">
        <button>
          <span
            className={`material-symbols-outlined text-2xl p-2 cursor-pointer ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            menu
          </span>
        </button>
      </div>

      <ul
        className={`fixed xl:hidden top-20 right-0 z-50 h-screen w-2/5 md:w-1/3 bg-primary flex flex-col items-center justify-start pt-16 gap-6 font-medium text-md transform transition-all duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        {/* X Button */}
        <li className="list-none">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <span className="material-symbols-outlined text-4xl cursor-pointer">close</span>
          </button>
        </li>

        {/* Menu Items */}
        <li>
          <a
            href="#EducAndExpi"
            className="p-3 block w-full text-center hover:underline hover:text-white transition-all"
          >
            Education & Experience
          </a>
        </li>

        <li>
          <a
            href="#Certifications"
            className="p-3 block w-full text-center hover:underline hover:text-white transition-all"
          >
            Certifications
          </a>
        </li>

        <li>
          <a
            href="#Projects"
            className="p-3 block w-full text-center hover:underline hover:text-white transition-all"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#TechStack"
            className="p-3 block w-full text-center hover:underline hover:text-white transition-all"
          >
            Tech Stack
          </a>
        </li>

        <li>
          <a
            href="#Contacts"
            className="p-3 block w-full text-center hover:underline hover:text-white transition-all"
          >
            Contacts
          </a>
        </li>

      </ul>

    </nav>

  );
}