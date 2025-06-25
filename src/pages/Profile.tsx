
import { User, Code, Award, BookOpen, Download } from 'lucide-react';

const Profile = () => {
  const skills = [
    { name: "React.js", level: 95 },
    { name: "React Native", level: 90 },
    { name: "Node.js", level: 88 },
    { name: "TypeScript", level: 85 },
    { name: "Python", level: 82 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 78 },
    { name: "AWS", level: 75 }
  ];

  const experience = [
    {
      title: "Senior Full-Stack Developer",
      company: "Freelance",
      period: "2022 - Present",
      description: "Leading full-stack development projects for various clients, specializing in React, React Native, and Node.js solutions."
    },
    {
      title: "Mobile App Developer",
      company: "Tech Solutions Inc",
      period: "2020 - 2022",
      description: "Developed cross-platform mobile applications using React Native and Flutter, serving over 100k+ users."
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      description: "Created responsive web applications and landing pages for small to medium businesses."
    }
  ];

  const certifications = [
    "AWS Certified Developer",
    "Google Mobile Web Specialist",
    "React Developer Certification",
    "Scrum Master Certified"
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
              <User className="w-16 h-16 text-white" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate freelance developer with 5+ years of experience creating digital solutions 
            that help businesses grow and succeed in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="w-8 h-8 text-blue-700 mr-3" />
                About Me
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Hello! I'm a passionate freelance web and mobile app developer with over 5 years of experience 
                  in creating digital solutions that make a difference. I specialize in building modern, 
                  scalable applications using cutting-edge technologies.
                </p>
                <p className="mb-4">
                  My journey in software development started with a curiosity about how things work behind 
                  the scenes of our favorite apps and websites. This curiosity led me to pursue computer 
                  science and eventually become a full-stack developer.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing my knowledge through technical blogs and mentoring aspiring developers.
                </p>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Code className="w-8 h-8 text-blue-700 mr-3" />
                Experience
              </h2>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <span className="text-blue-700 font-semibold">{exp.period}</span>
                    </div>
                    <h4 className="text-lg text-gray-700 mb-2">{exp.company}</h4>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills */}
            <section className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Code className="w-6 h-6 text-blue-700 mr-2" />
                Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-blue-700 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-700 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-6 h-6 text-blue-700 mr-2" />
                Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"></div>
                    {cert}
                  </li>
                ))}
              </ul>
            </section>

            {/* Download CV */}
            <section className="bg-blue-700 p-6 rounded-lg text-white text-center">
              <h3 className="text-xl font-bold mb-4">Download My CV</h3>
              <p className="text-blue-100 mb-6">Get a detailed overview of my experience and skills</p>
              <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center mx-auto">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
