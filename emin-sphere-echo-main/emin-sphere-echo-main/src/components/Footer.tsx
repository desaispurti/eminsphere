const Footer = () => {
  return (
    <footer className="section-dark py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="font-display text-lg font-semibold mb-2">Eminsphere™</p>
        <p className="text-sm opacity-70 font-body mb-4">
          Global Academic, Research & Innovation Platform
        </p>
        <p className="text-xs opacity-50 font-body">
          © {new Date().getFullYear()} Eminsphere™. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
