
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React Native in 2024",
      excerpt: "Learn the fundamentals of React Native development and build your first cross-platform mobile app.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Mobile Development",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Building Scalable Web Applications with Node.js",
      excerpt: "Best practices for creating robust backend systems that can handle millions of users.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Backend Development",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Modern CSS Techniques for Better User Interfaces",
      excerpt: "Explore advanced CSS features like Grid, Flexbox, and CSS Variables to create stunning UIs.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Frontend Development",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "The Future of Web Development: Trends to Watch",
      excerpt: "Discover emerging technologies and trends that will shape the future of web development.",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Industry Trends",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Performance Optimization for React Applications",
      excerpt: "Learn techniques to make your React apps lightning fast and improve user experience.",
      date: "2023-12-20",
      readTime: "15 min read",
      category: "React",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Database Design Best Practices",
      excerpt: "Essential principles for designing efficient and scalable database schemas.",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Database",
      image: "/placeholder.svg"
    }
  ];

  const categories = [
    "All",
    "Mobile Development",
    "Backend Development",
    "Frontend Development",
    "React",
    "Industry Trends",
    "Database"
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing my knowledge and experiences in web and mobile development. 
            Here you'll find tutorials, tips, and insights from my journey as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 border border-gray-100">
              <div className="relative h-64 bg-gradient-to-br from-blue-600 to-blue-800">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">January 15, 2024</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>8 min read</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {posts[0].title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {posts[0].excerpt}
                </p>
                <Link
                  to={`/blog/${posts[0].id}`}
                  className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 transition-colors duration-200"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Recent Posts */}
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.slice(1).map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800"></div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-700 transition-colors duration-200">
                      <Link to={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-blue-700 font-semibold text-sm hover:text-blue-800 transition-colors duration-200"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* About Widget */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About the Author</h3>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Developer</div>
                  <div className="text-gray-600 text-sm">Freelance Developer</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Passionate developer sharing insights about web and mobile development.
              </p>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors duration-200"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-blue-700 p-6 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-4">Subscribe to Newsletter</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Get the latest updates and tutorials delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="w-full bg-white text-blue-700 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
