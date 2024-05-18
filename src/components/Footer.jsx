import KinoVerseImage from "../assets/KinoVerse.png";

const Footer = () => {
  return (
    <div>
      <div class="rounded-lg shadow bg-transparent mt-20">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <img src={KinoVerseImage} class="h-8" alt="Kinoverse" />

            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="#"
                  class="text-white hover:text-[#B3B3B3] me-4 md:me-6"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-white hover:text-[#B3B3B3] me-4 md:me-6"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yarensenoz/"
                  class="text-white hover:text-[#B3B3B3] me-4 md:me-6"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/snzyrn/react-redux-tmdb-movie-app"
                  class="text-white hover:text-[#B3B3B3]"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-white sm:mx-auto  lg:my-8" />
          <span class="block text-sm text-white sm:text-center ">
            © 2024 Kinoverse . All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
