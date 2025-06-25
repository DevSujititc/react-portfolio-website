
import { Globe, Smartphone, Code, Palette, Search, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-blue-700" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks like React, Vue.js, and Angular.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross-browser Compatible"],
      price: "Starting from $1,500"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-700" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      features: ["Cross-platform", "Native Performance", "App Store Ready", "Push Notifications"],
      price: "Starting from $3,000"
    },
    {
      icon: <Code className="w-12 h-12 text-blue-700" />,
      title: "Backend Development",
      description: "Robust backend systems and APIs using Node.js, Python, and modern database technologies.",
      features: ["RESTful APIs", "Database Design", "Cloud Integration", "Security Features"],
      price: "Starting from $2,000"
    },
    {
      icon: <Palette className="w-12 h-12 text-blue-700" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that create engaging and intuitive digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "Starting from $800"
    },
    {
      icon: <Search className="w-12 h-12 text-blue-700" />,
      title: "SEO Optimization",
      description: "Improve your website's visibility and ranking on search engines with proven SEO strategies.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Performance Optimization"],
      price: "Starting from $500"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-700" />,
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and support to keep your applications running smoothly.",
      features: ["Regular Updates", "Security Monitoring", "Bug Fixes", "Performance Optimization"],
      price: "Starting from $200/month"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I offer comprehensive digital solutions to help your business succeed online. 
            From concept to deployment, I've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-6">
                <div className="text-2xl font-bold text-blue-700 mb-4">{service.price}</div>
                <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200">
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700 rounded-2xl p-8 md:p-12 mt-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together. 
            I'm here to bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-200">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
