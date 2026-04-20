import React from "react";
import logo from "../../assets/logo.svg";
import instagram_icon from "../../assets/icons/instagram-Icon.png";
import linkedin_icon from "../../assets/icons/linkedin-alt-Icon.png";
import animatedBg from "../../assets/above-fold-bg.gif";

const FOOTER_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Work", href: "#work" },
  { label: "Why Balari", href: "#why-balari" },
  { label: "Contact", href: "#contact" },
];

const CONTACT_LINKS = [
  {
    label: "Email: ",
    description: "inquiries@balari.space",
    href: "mailto:inquiries@balari.space",
  },
];

const FooterLink = ({ label, href }) => (
  <a
    href={href}
    className="text-sm font-body hover:text-white transition-colors duration-200"
  >
    {label}
  </a>
);

const ContactLink = ({ label, description, href }) => (
  <div className="flex gap-4">
    <p className="text-sm">{label}</p>
    <a
      href={href}
      className="text-sm font-body hover:text-white transition-colors duration-200"
    >
      {description}
    </a>
  </div>
);

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-gray-500">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-luminosity"
        style={{ backgroundImage: `url(${animatedBg})` }}
      />
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto w-full flex gap-8 p-10">
        <div className="w-[40%] flex flex-col gap-6">
          <img src={logo} className="w-32" />
          <p className="text-sm">
            Websites and marketing systems for businesses that want a clearer
            digital presence and the right support behind it.
          </p>
          <div className="flex gap-4">
            <a href="#">
              <img src={instagram_icon} />
            </a>
            <a href="https://www.linkedin.com/company/balari-tech">
              <img src={linkedin_icon} />
            </a>
          </div>
        </div>
        <div className="w-[30%] flex flex-col gap-9">
          <p className="text-sm text-gray-700">Links</p>
          <div className="flex flex-col gap-2">
            {FOOTER_LINKS.map((link) => (
              <FooterLink key={link.href} {...link} />
            ))}
          </div>
        </div>
        <div className="w-[30%] flex flex-col gap-9">
          <p className="text-sm text-gray-700">Contact</p>
          <div className="flex flex-col gap-2">
            {CONTACT_LINKS.map((link) => (
              <ContactLink key={link.href} {...link} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
