function Footer() {
  return (
    <footer className="w-full bg-blue-50 border-t border-blue-100 mt-10 sm:mt-20 py-3 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
        <div className="text-gray-500 text-xs sm:text-sm text-center">
          <p>
            Designed & Developed by{" "}
            <span className="font-bold text-blue-900">Parsa Shokati</span>
          </p>
        </div>

        <div className="flex gap-4 text-gray-600 text-xs sm:text-sm">
          <a
            href="https://github.com/Parsa81shokati/Redify-MyLibrary.git"
            target="_blank"
            className="hover:text-blue-800"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/parsa-shokati-1568462b1"
            target="_blank"
            className="hover:text-blue-800"
          >
            LinkedIn
          </a>
          <a
            href="mailto:parsashokati67@gmail.com"
            className="hover:text-blue-800"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
