
import { Link } from 'react-router-dom';
import { Code, Mail, User, Briefcase, FolderOpen, PenTool } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <Code className="w-6 h-6 text-blue-700" />
              </div>
              <span className="text-xl font-bold">DevPortfolio</span>
            </div>
            <p className="text-blue-200 mb-4">
              Freelance Web & Mobile App Developer creating amazing digital experiences for businesses worldwide.
            </p>
            <p className="text-blue-300 text-sm">
              Let's build something amazing together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-200 hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/services" className="text-blue-200 hover:text-white transition-colors duration-200">Services</Link></li>
              <li><Link to="/portfolio" className="text-blue-200 hover:text-white transition-colors duration-200">Portfolio</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-blue-200">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2024 DevPortfolio. All rights reserved. Built with passion and React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
