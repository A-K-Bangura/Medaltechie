// import React from "react";
import medalTechieLogo from "../assets/images/medallogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white w-full max-w-full overflow-hidden">
      <div className="container mx-auto px-4 py-12 sm:py-16 w-full max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
          {/* Company Info */}
          <div className="md:col-span-2 w-full">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={medalTechieLogo}
                alt="Medal Techie Logo"
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain"
              />
              {/* <span className="text-lg sm:text-xl font-bold">Medal Techie</span> */}
            </div>
            <p className="text-neutral-300 mb-6 leading-relaxed text-sm sm:text-base">
              We are a Techie Team, we pride ourselves with our each unique
              skills and we ensure that we give our customers what they truly
              want with a bit of technological advice and inputs from us.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/medaltechie"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-neutral-600 rounded-full">
                  <i className="fa fa-facebook text-white flex-shrink-0"></i>
                </div>
              </a>
              <a
                href="https://www.instagram.com/medaltechie/?hl=en"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-neutral-600 rounded-full">
                  <i className="fa fa-instagram text-white flex-shrink-0"></i>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/medaltechie"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-neutral-600 rounded-full">
                  <i className="fa fa-linkedin text-white flex-shrink-0"></i>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full">
            <h3 className="text-base sm:text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              {["Home", "About", "Portfolio", "Our Blog", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-neutral-300 hover:text-white transition-colors text-sm sm:text-base"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Resources */}
          <div className="w-full">
            <h3 className="text-base sm:text-lg font-semibold mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {[
                "Our Team",
                "Our Services",
                "Testimonials",
                "Features",
                "Why Choose Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-neutral-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-neutral-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-center space-x-3">
              <i className="fa fa-map-marker text-accent-400 flex-shrink-0"></i>
              <span className="text-neutral-300 text-sm sm:text-base">
                37 Upper Brook Street - Freetown, Sierra Leone
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fa fa-envelope text-accent-400 flex-shrink-0"></i>
              <a
                href="mailto:info@medaltechie.com"
                className="text-neutral-300 hover:text-white transition-colors text-sm sm:text-base"
              >
                info@medaltechie.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fa fa-phone text-accent-400 flex-shrink-0"></i>
              <a
                href="tel:+23278672866"
                className="text-neutral-300 hover:text-white transition-colors text-sm sm:text-base"
              >
                +232 78 672866
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-neutral-400 text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} | Proudly Powered by Medal Techie
          </p>
          <div className="flex space-x-4 sm:space-x-6 mt-4 sm:mt-0">
            <a
              href="#"
              className="text-neutral-400 hover:text-white text-xs sm:text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-white text-xs sm:text-sm transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
