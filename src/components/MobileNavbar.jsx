import { useState, useEffect } from "preact/hooks";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  // Bloquea el scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  // Marca como activo el link correspondiente
  useEffect(() => {
    const currentPath = window.location.pathname.replace(/\/$/, "");

   const links = {
      "/biografia": document.getElementById("nav-biografia"),
      "/honorarios": document.getElementById("nav-honorarios"),
      "/contacto": document.getElementById("nav-contacto"),
    };

    const activeLink = links[currentPath];
    if (activeLink) {
      activeLink.classList.add(
        "text-[#1d3557]",
        "font-bold",
        "text-xl",
        "transition-all",
        "duration-300",
        "ease-in-out"
      );
      activeLink.setAttribute("aria-current", "page");
    }
  }, []);

  return (
    <nav
      class="w-full bg-[#dcf0fd] shadow-md sticky top-0 z-50"
      role="navigation"
      aria-label="Menú de navegación principal"
    >
      <div class="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between relative">
        {/* Logo */}
        <div class="flex items-center justify-between w-full md:w-auto">
          <a href="/" class="flex items-center gap-2" aria-label="Ir a inicio">
            <img
              src="/images/Silvia-Usach-Logo.png"
              alt="Logo Silvia Usach"
              class="h-16 md:h-[6rem]"
            />
          </a>

          {/* Botón hamburguesa */}
          <button
            class="md:hidden w-8 h-8 flex flex-col justify-between items-center relative z-50 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span
              class={`block h-0.5 w-full bg-gray-800 transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              class={`block h-0.5 w-full bg-gray-800 transition duration-300 ease-in-out ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              class={`block h-0.5 w-full bg-gray-800 transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Fondo oscuro al abrir menú */}
        {open && (
          <div
            class="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden z-40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Menú de navegación */}
        <ul
          id="mobile-menu"
          class={`relative z-50 flex flex-col md:flex-row mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-6 text-gray-700 text-base font-medium transition-all duration-300 ease-in-out overflow-hidden ${
            open
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 md:max-h-screen md:opacity-100"
          }`}
        >
          <li>
            <a
              href="/biografia"
              id="nav-biografia"
              class="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
            >
              Biografía
            </a>
          </li>
          <li>
            <a
              href="/honorarios"
              id="nav-honorarios"
              class="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
            >
              Honorarios
            </a>
          </li>
          <li>
            <a
              href="/contacto"
              id="nav-contacto"
              class="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
