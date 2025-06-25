
import { Link } from 'react-router-dom';
import { Code, Smartphone, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Freelance Web & Mobile 
              <span className="text-blue-300"> Developer</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              I create stunning websites and mobile applications that help businesses grow and succeed in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/portfolio"
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 text-center"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-200 text-center"
              >
                Get In Touch
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                <Globe className="w-8 h-8 text-blue-300 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Web Development</h3>
                <p className="text-blue-100 text-sm">Modern, responsive websites built with latest technologies</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 mt-8">
                <Smartphone className="w-8 h-8 text-blue-300 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Mobile Apps</h3>
                <p className="text-blue-100 text-sm">Cross-platform mobile applications for iOS and Android</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 -mt-4">
                <Code className="w-8 h-8 text-blue-300 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Custom Solutions</h3>
                <p className="text-blue-100 text-sm">Tailored software solutions for your business needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
