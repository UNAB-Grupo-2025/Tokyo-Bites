const Footer = () => {
  return (
    <>
    
      <footer className="bg-red-600 shadow dark:bg-gray-900 mt-4">
        <div className="w-full max-w-screen-xl mx-auto md:py-8">
          <div className="sm:flex sm:items-center">
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400 justify-center w-full">
              <li>
                <a className="me-4 md:me-6 text-lg">
                  Sobre nosotros
                </a>
                <div className="mb-20"></div>
              </li>
              <li className="flex flex-col mb-10">
                <a
                  className=" ml-4 md:ml-64 me-4 md:me-64 text-lg"
                >
                  Ubicación
                </a>
                <div className="flex item-center ml-48">
                  <img
                    src="/marcador-de-posicion.png"
                    className="h-5 mb-2 mt-2"
                    alt="Ubicacion"
                  />
                  <a href="#" className="hover:underline mt-2 ml-1">Nombre calle, Comuna, Ciudad</a>
                </div>
              </li>
              <li>
                <a
                  id="contact-section"
                  
                  className=" text-lg "
                >
                  Contacto
                </a>
                <div className="flex item-center">
                  <img
                    src="/logotipo-de-instagram.png"
                    className="h-5 mb-2 mt-2"
                    alt="Instagram Logo"
                  />
                  <a href="#" className="hover:underline mt-2 ml-1">@Tokyo_bites</a>
                </div>
                <div className="flex item-center">
                  <img
                    src="/whatsapp.png"
                    className="h-5 mb-2"
                    alt="Whatsapp Logo"
                  />
                  <a href="#" className="hover:underline ml-1">+56 9 2384 1912</a>
                </div>
                <div className="flex item-center">
                  <img
                    src="/facebook.png"
                    className="h-5 "
                    alt="Facebook Logo"
                  />
                  <a href="#" className="hover:underline ml-1">Tokyo Bites</a>
                </div>
                
              </li>
            </ul>
          </div>
          <div className="block mt-10 py-1 px-1 bg-yellow-200 shadow-xl border border-gray-300 p-6  rounded-lg"></div>
          <a
            href="/"
            className="flex items-center mb-7 space-x-3 rtl:space-x-reverse justify-center py-2 px-2"
          >
            
            <img
              src="/LOGO-Tokyo-bites.png"
              className="w-16 h-16 rounded-full "
              alt="Tokyo Bites Logo"
            />
            <span className="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">
              Tokyo Bites
            </span>
          </a>
          <span className="block text-sm text-black sm:text-center dark:text-gray-400">
            <a href="/" className="hover:underline">
              Tokyo Bites Inc
            </a>
            . Todos los derechos reservados. © 2025{" "}
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
