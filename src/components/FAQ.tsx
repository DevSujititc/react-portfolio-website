
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData = [
    {
      question: "What services do you offer?",
      answer: "I specialize in web development, mobile app development, UI/UX design, and custom software solutions. I work with modern technologies like React, React Native, Node.js, and more."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while a complex web application or mobile app could take 2-6 months. I provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you work with clients internationally?",
      answer: "Yes! I work with clients from around the world. I'm comfortable with different time zones and use modern communication tools to ensure smooth collaboration regardless of location."
    },
    {
      question: "What is your development process?",
      answer: "I follow an agile development process: Discovery & Planning → Design & Prototyping → Development → Testing → Deployment → Maintenance. I keep clients involved throughout with regular updates and feedback sessions."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Absolutely! I offer various maintenance and support packages to ensure your application stays up-to-date, secure, and performs optimally. I'm also available for future enhancements and new features."
    },
    {
      question: "What technologies do you use?",
      answer: "I work with modern tech stacks including React, React Native, Node.js, TypeScript, Python, PostgreSQL, MongoDB, AWS, and more. I choose the best technology based on your project requirements."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about my services and process
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-medium text-gray-900">{item.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-blue-700" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-700" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-200"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
