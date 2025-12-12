const Footer = () => {
  return (
    <footer className="relative">
      {/* Golden accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="bg-gradient-to-b from-secondary/50 to-background py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-4">
                NW <span className="text-primary">Global</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Empowering communities worldwide with premium health and wellness products that nurture body, mind, and spirit.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["About Us", "Products", "Community", "Contact"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif text-lg text-foreground mb-4">Get In Touch</h4>
              <p className="text-muted-foreground text-sm mb-2">info@nwglobalhealth.com</p>
              <p className="text-muted-foreground text-sm">Follow us on social media</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border/30 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} NW Global Health & Wellness Products. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
