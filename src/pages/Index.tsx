
import Hero from '../components/Hero';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Code, Users, Award, Clock } from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-blue-700" />,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-700" />,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications for iOS and Android"
    },
    {
      icon: <Code className="w-8 h-8 text-blue-700" />,
      title: "Custom Solutions",
      description: "Tailored software solutions for your unique business needs"
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-700" />, value: "50+", label: "Happy Clients" },
    { icon: <Code className="w-8 h-8 text-blue-700" />, value: "100+", label: "Projects Completed" },
    { icon: <Award className="w-8 h-8 text-blue-700" />, value: "5+", label: "Years Experience" },
    { icon: <Clock className="w-8 h-8 text-blue-700" />, value: "24/7", label: "Support Available" },
  ];

  return (
    <div>
      <Hero />
      
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What I Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I provide comprehensive digital solutions to help your business thrive in the modern world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
};

export default Index;
