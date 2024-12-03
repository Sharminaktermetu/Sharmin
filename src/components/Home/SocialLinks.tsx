
import { IoMailSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {/* Mail */}
      <a href="mailto:sharminacc1@gmail.com" target="_blank" rel="noopener noreferrer">
        <IoMailSharp className="h-6 w-6 bg-orange-200 rounded-full p-1" />
      </a>

      {/* GitHub */}
      <a href="https://github.com/Sharminaktermetu" target="_blank" rel="noopener noreferrer">
        <FaGithub className="h-6 w-6 bg-orange-200 rounded-full p-1" />
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/sharmin-akter-metu/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="h-6 w-6 bg-orange-200 rounded-full p-1" />
      </a>

      {/* Facebook */}
      <a href="https://www.facebook.com/sharminmumu.mumu.9/e" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="h-6 w-6 bg-orange-200 rounded-full p-1" />
      </a>

      {/* Twitter */}
      <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="h-6 w-6 bg-orange-200 rounded-full p-1" />
      </a>

    </div>
  );
};

export default SocialLinks;
