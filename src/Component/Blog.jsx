import { useState, useEffect } from "react";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

const BlogPage = () => {
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for sticky search bar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Categories
  const categories = [
    "All",
    "Painting Tips",
    "Festival Ideas",
    "Home Décor",
    "Maintenance",
  ];

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "5 Affordable Ways to Make Your Walls Festival-Ready",
      description:
        "Discover budget-friendly techniques to transform your walls for the upcoming festival season without breaking the bank.",
      category: "Festival Ideas",
      date: "May 15, 2023",
      author: "Alex Johnson",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=500&q=80",
      featured: true,
    },
    {
      id: 2,
      title: "How to Choose the Right Paint for Monsoon Season",
      description:
        "Learn which paint types and finishes work best during humid seasons to prevent mold and mildew growth.",
      category: "Painting Tips",
      date: "April 28, 2023",
      author: "Sarah Williams",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
      featured: false,
    },
    {
      id: 3,
      title: "Top Wall Colors That Increase Home Resale Value",
      description:
        "Find out which paint colors can boost your property value and attract potential buyers when selling your home.",
      category: "Home Décor",
      date: "April 20, 2023",
      author: "Michael Chen",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=500&q=80",
      featured: false,
    },
    {
      id: 4,
      title: "Essential Home Maintenance Tips for Spring",
      description:
        "A comprehensive guide to preparing your home for spring, including exterior painting and minor repairs.",
      category: "Maintenance",
      date: "April 10, 2023",
      author: "Jessica Rodriguez",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
      featured: false,
    },
    {
      id: 5,
      title: "Creating Accent Walls That Transform Your Space",
      description:
        "Learn how to select the perfect wall for an accent and which colors will make the biggest impact in your room.",
      category: "Home Décor",
      date: "March 30, 2023",
      author: "David Kim",
      image:
        "https://images.unsplash.com/photo-1617048150712-28b6c60aee5e?auto=format&fit=crop&w=500&q=80",
      featured: false,
    },
    {
      id: 6,
      title: "Eco-Friendly Paint Options for a Sustainable Home",
      description:
        "Explore environmentally conscious paint choices that are better for your family and the planet.",
      category: "Painting Tips",
      date: "March 22, 2023",
      author: "Emma Thompson",
      image:
        "https://images.unsplash.com/photo-1628624077746-4d8c2f97b8d5?auto=format&fit=crop&w=500&q=80",
      featured: false,
    },
  ];

  // Popular posts for sidebar
  const popularPosts = [
    {
      id: 7,
      title: "Quick Fixes for Common Wall Problems",
      date: "February 15, 2023",
      image:
        "https://images.unsplash.com/photo-1617048150712-28b6c60aee5e?auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 8,
      title: "Color Psychology in Home Design",
      date: "February 8, 2023",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 9,
      title: "DIY vs. Professional Painting: Pros and Cons",
      date: "January 28, 2023",
      image:
        "https://images.unsplash.com/photo-1582233479453-2f0cf5d55b5f?auto=format&fit=crop&w=100&q=80",
    },
  ];

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured post
  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Painting Tips & Home Care Blog
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Expert advice to keep your home fresh, vibrant, and festival-ready
            all year round.
          </p>
        </div>
      </div>

      {/* Search and Categories */}
      <div
        className={`sticky top-0 z-10 bg-white shadow-md py-4 px-4 ${
          isScrolled ? "transition-all duration-300" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search blog posts..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Featured Article Section */}
            {featuredPost && (
              <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-1/2">
                    <div className="flex items-center mb-2">
                      <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {featuredPost.category}
                      </span>
                      <span className="ml-2 text-gray-500 text-sm flex items-center">
                        <Calendar className="mr-1" size={14} />{" "}
                        {featuredPost.date}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {featuredPost.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm flex items-center">
                        <User className="mr-1" size={14} />{" "}
                        {featuredPost.author}
                      </span>
                      <button className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                        Read More <ArrowRight className="ml-2" size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts
                .filter((post) => !post.featured)
                .map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                          {post.category}
                        </span>
                        <span className="ml-2 text-gray-500 text-sm flex items-center">
                          <Calendar className="mr-1" size={14} /> {post.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-sm flex items-center">
                          <User className="mr-1" size={14} /> {post.author}
                        </span>
                        <button className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                          Read More <ArrowRight className="ml-2" size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Popular Posts</h3>
              <div className="space-y-4">
                {popularPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1 line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-gray-500 text-sm flex items-center">
                        <Calendar className="mr-1" size={12} /> {post.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Block */}
            <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-2">
                Get Free Painting Quote
              </h3>
              <p className="mb-4">
                Connect with our experts for a personalized consultation and
                quote.
              </p>
              <button className="w-full bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section Before Footer */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 py-12 px-4 my-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to refresh your home?
          </h2>
          <p className="text-white text-lg mb-6">
            Book painting services today and transform your living space.
          </p>
          <button className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
            Get a Free Quote
          </button>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default BlogPage;
