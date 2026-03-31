const Footer = () => {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left — Brand */}
        <div>
          <p className="font-display text-xl font-bold mb-3">Eminsphere™</p>
          <p className="text-sm text-white/70 mb-1">Global Academic, Research & Innovation Platform.</p>
          <p className="text-sm text-white/70">Advancing Knowledge. Empowering Innovation.</p>
        </div>

        {/* Middle — Contact */}
        <div>
          <p className="font-display text-base font-semibold mb-4 text-white">Contact</p>
          <p className="text-sm text-white/70 mb-4">Email: info@eminsphere.com</p>
          {/* LinkedIn icon */}
          <a href="https://www.linkedin.com/company/eminsphere" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 bg-[#0077b5] rounded text-white hover:bg-[#005885] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z"/>
            </svg>
          </a>
        </div>

        {/* Right — Legal */}
        <div>
          <p className="font-display text-base font-semibold mb-4 text-white">Legal</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Eminsphere™. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

