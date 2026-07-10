import {
  FaFacebookF,
  FaLinkedinIn,
  FaApple,
  FaInstagram,
  FaGoogle,
  FaMicrosoft,
} from "react-icons/fa";
import { SiGoogledrive } from "react-icons/si";

const companies = [
  { Icon: FaMicrosoft, url: "https://www.microsoft.com" },
  { Icon: FaFacebookF, url: "https://www.facebook.com" },
  { Icon: FaLinkedinIn, url: "https://www.linkedin.com" },
  { Icon: FaApple, url: "https://www.apple.com" },
  { Icon: FaInstagram, url: "https://www.instagram.com" },
  { Icon: FaGoogle, url: "https://www.google.com" },
  { Icon: SiGoogledrive, url: "https://drive.google.com" },
];

export default function Company() {
  return (
    <section className="py-20 px-4">
      <h2 className="mb-18 text-center text-2xl sm:text-2xl font-medium text-gray-800" >
        Trusted by leading companies
      </h2>

      <div className="flex flex-wrap justify-center gap-10 sm:gap-12">
        {companies.map(({ Icon, url }, i) => (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-yellow-400 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <Icon className="text-2xl sm:text-4xl text-yellow-400" />
          </a>
        ))}
      </div>
    </section>
  );
}