import React, { useState, useEffect, useRef } from "react";
// import Head from "next/head";

const PaintingWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedColors, setSelectedColors] = useState([]);
  const [email, setEmail] = useState("");
  const [visionBoard, setVisionBoard] = useState([]);
  const [bookingDate, setBookingDate] = useState("");
  const [isHeroPainted, setIsHeroPainted] = useState(false);
  const [loading, setLoading] = useState(true);

  const sections = [
    { id: "hero", name: "Home" },
    { id: "journey", name: "Our Journey" },
    { id: "craft", name: "The Craft" },
    { id: "palette", name: "Palette & Inspiration" },
    { id: "testimonials", name: "Voices" },
    { id: "your-space", name: "Your Space" },
    { id: "invitation", name: "Get Started" },
  ];

  const colorOptions = [
    { name: "Ocean Blue", value: "#1E40AF" },
    { name: "Forest Green", value: "#166534" },
    { name: "Sunset Orange", value: "#EA580C" },
    { name: "Royal Purple", value: "#7E22CE" },
    { name: "Cherry Red", value: "#B91C1C" },
    { name: "Golden Yellow", value: "#CA8A04" },
    { name: "Misty Gray", value: "#4B5563" },
    { name: "Pure White", value: "#FFFFFF" },
  ];

  const timelineEvents = [
    {
      year: "2010",
      title: "The Beginning",
      description:
        "A single brush stroke started it all. Our founder began with a passion for transformation.",
      image: "/images/founder.jpg",
    },
    {
      year: "2015",
      title: "Growing Vision",
      description:
        "From small projects to complete home transformations, our reputation for quality grew.",
      image: "/images/early-work.jpg",
    },
    {
      year: "2020",
      title: "Craft Perfected",
      description:
        "A decade of experience refined our techniques and expanded our color palette.",
      image: "/images/tools.jpg",
    },
    {
      year: "Present",
      title: "Your Story Awaits",
      description:
        "Today, we bring our expertise to your space, ready to transform your walls into stories.",
      image: "/images/present.jpg",
    },
  ];

  const craftSteps = [
    {
      step: 1,
      title: "Consultation",
      description:
        "We listen to your vision, understanding the story you want your space to tell.",
    },
    {
      step: 2,
      title: "Preparation",
      description:
        "Meticulous preparation creates the perfect canvas for transformation.",
    },
    {
      step: 3,
      title: "Application",
      description: "Our craftsmen apply each stroke with precision and care.",
    },
    {
      step: 4,
      title: "Reveal",
      description:
        "The moment your space transforms, revealing the story within your walls.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "They didn't just paint our walls; they transformed our home into a sanctuary. Every room now tells a story.",
      image: "/images/sarah.jpg",
    },
    {
      name: "James T.",
      text: "The attention to detail was extraordinary. They understood our vision and brought it to life beyond our expectations.",
      image: "/images/james.jpg",
    },
    {
      name: "Elena R.",
      text: "Working with them felt like collaborating with artists. Our home now reflects our personality in every brushstroke.",
      image: "/images/elena.jpg",
    },
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll events for section tracking and hero animation
  useEffect(() => {
    const handleScroll = () => {
      // Determine active section
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }

      // Trigger hero painting animation
      if (window.scrollY > 100 && !isHeroPainted) {
        setIsHeroPainted(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHeroPainted, sections]);

  const handleColorSelect = (color) => {
    if (selectedColors.includes(color.value)) {
      setSelectedColors(selectedColors.filter((c) => c !== color.value));
    } else {
      setSelectedColors([...selectedColors, color.value]);
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for subscribing! You will receive our color inspiration guide soon."
    );
    setEmail("");
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you for booking a consultation! We'll contact you soon to confirm your appointment on ${bookingDate}.`
    );
    setBookingDate("");
  };

  const addToVisionBoard = (item) => {
    if (!visionBoard.some((i) => i.id === item.id)) {
      setVisionBoard([...visionBoard, item]);
    }
  };

  const removeFromVisionBoard = (id) => {
    setVisionBoard(visionBoard.filter((item) => item.id !== id));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-75 animate-ping"></div>
            <div className="absolute inset-4 bg-blue-600 rounded-full"></div>
            <div className="absolute inset-8 bg-white rounded-full"></div>
          </div>
          <p className="text-white text-lg">Preparing your color journey...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-white font-serif text-xl">RangVeda</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === section.id
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {section.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="flex flex-col px-4 py-2 space-y-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`py-2 text-sm font-medium transition-colors duration-300 ${
                    activeSection === section.id
                      ? "text-white"
                      : "text-gray-300"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-80"></div>
          <img
            src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Painted wall with light"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-sm md:text-lg text-gray-200 mb-4">
            Every Wall Deserve RangVeda
          </h1>
          <h1
            className={`font-serif text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
              isHeroPainted ? "opacity-100" : "opacity-0"
            }`}
          >
            Every wall has a story. Together, we'll paint yours.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Transform your space from ordinary to extraordinary with our
            masterful craftsmanship and attention to detail.
          </p>
          <a
            href="#your-space"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            Begin Your Transformation
          </a>
        </div>

        {/* Paint Brush Animation */}
        <div
          className={`absolute top-1/2 left-0 transform -translate-y-1/2 transition-all duration-1000 ${
            isHeroPainted ? "opacity-0 translate-x-full" : "opacity-100"
          }`}
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 80L30 70L70 30L80 20"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M30 70L30 85L45 85"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M70 30L85 30L85 45"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M12 19L6 13M12 19L18 13"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Our Journey Section */}
      <section id="journey" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every masterpiece has a beginning. Explore how our passion for
              transformation evolved into a craft that brings stories to life on
              walls.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

            {/* Timeline Events */}
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative mb-12 flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="w-1/2 px-8">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <span className="text-blue-600 font-medium">
                      {event.year}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mt-2 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>

                <div className="w-1/2 px-8 flex justify-center">
                  <div className="w-48 h-48 bg-gray-300 rounded-lg overflow-hidden shadow-md">
                    {/* Placeholder for image */}
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <span className="text-gray-500">
                        Image: {event.title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Craft Section */}
      <section id="craft" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Craft
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our process is an art form. Each step is carefully executed to
              ensure your transformation is nothing short of extraordinary.
            </p>
          </div>

          <div className="relative">
            {/* Craft Steps */}
            {craftSteps.map((step, index) => (
              <div
                key={index}
                className="mb-16 flex flex-col md:flex-row items-center"
              >
                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {step.step}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                <div className="w-full md:w-1/2 md:pl-8">
                  <div className="relative h-64 bg-gray-300 rounded-lg overflow-hidden shadow-md">
                    {/* Placeholder for image */}
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <span className="text-gray-500">Image: {step.title}</span>
                    </div>
                    {/* Interactive Hotspots */}
                    <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600 transition-colors"></div>
                    <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600 transition-colors"></div>
                    <div className="absolute bottom-1/4 left-1/2 w-6 h-6 bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600 transition-colors"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Palette & Inspiration Section */}
      <section id="palette" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Palette & Inspiration
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Colors have the power to transform not just spaces, but emotions.
              Explore our curated palette and find the perfect hues for your
              story.
            </p>
          </div>

          {/* Color Palette */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6 text-center">
              Select Your Colors
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {colorOptions.map((color, index) => (
                <div
                  key={index}
                  className={`w-24 h-24 rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105 relative ${
                    selectedColors.includes(color.value)
                      ? "ring-4 ring-blue-500 ring-offset-2"
                      : ""
                  }`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => handleColorSelect(color)}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-30 rounded-lg transition-opacity">
                    <span className="text-white text-xs font-medium">
                      {color.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mood Mixer */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6 text-center">
              Mood Mixer
            </h3>
            <div className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
              <div
                className="h-64 rounded-lg mb-6 relative overflow-hidden"
                style={{ backgroundColor: selectedColors[0] || "#f3f4f6" }}
              >
                {selectedColors.length > 1 && (
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${selectedColors[0]} 0%, ${selectedColors[1]} 100%)`,
                    }}
                  ></div>
                )}
                {selectedColors.length > 2 && (
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(45deg, ${selectedColors[0]} 0%, ${selectedColors[1]} 50%, ${selectedColors[2]} 100%)`,
                    }}
                  ></div>
                )}
              </div>
              <p className="text-gray-600 text-center">
                {selectedColors.length === 0
                  ? "Select colors above to create your perfect palette"
                  : `Your custom palette with ${selectedColors.length} color${
                      selectedColors.length > 1 ? "s" : ""
                    }`}
              </p>
            </div>
          </div>

          {/* Project Stories */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6 text-center">
              Transformation Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
                >
                  <div className="h-48 bg-gray-300 relative">
                    {/* Before/After Slider Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                      <span className="text-gray-500">Before/After Slider</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-serif text-xl font-bold text-gray-900 mb-2">
                      Project {item}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Our client wanted to transform their dark, cramped living
                      space into a bright, airy sanctuary.
                    </p>
                    <button
                      className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                      onClick={() =>
                        addToVisionBoard({ id: item, name: `Project ${item}` })
                      }
                    >
                      Add to Vision Board
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Voices
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from those who have
              experienced the transformation of their spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <div className="mt-4 flex items-center text-blue-600">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">Play Testimonial</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Space, Your Story Section */}
      <section id="your-space" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Space, Your Story
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tell us about your vision. We're here to listen, understand, and
              bring your dream space to life.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Form */}
              <div>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="space-type"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Space Type
                    </label>
                    <select
                      id="space-type"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a space</option>
                      <option value="living-room">Living Room</option>
                      <option value="bedroom">Bedroom</option>
                      <option value="kitchen">Kitchen</option>
                      <option value="bathroom">Bathroom</option>
                      <option value="office">Office</option>
                      <option value="outdoor">Outdoor</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Describe Your Vision
                    </label>
                    <textarea
                      id="description"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="4"
                      placeholder="Share your ideas, color preferences, and any inspiration you have"
                    ></textarea>
                  </div>
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="3-months">Within 3 months</option>
                      <option value="6-months">Within 6 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Share Your Vision
                  </button>
                </form>
              </div>

              {/* Vision Board */}
              <div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                  Your Vision Board
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg shadow-md h-full">
                  {visionBoard.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-gray-500">
                      <svg
                        className="w-16 h-16 mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-center">
                        Your vision board is empty. Add inspiration from our
                        projects to get started.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      {visionBoard.map((item) => (
                        <div key={item.id} className="relative">
                          <div className="h-32 bg-gray-300 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500 text-sm">
                              {item.name}
                            </span>
                          </div>
                          <button
                            className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                            onClick={() => removeFromVisionBoard(item.id)}
                          >
                            <svg
                              className="w-4 h-4 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Invitation Section */}
      <section id="invitation" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Begin Your Transformation
            </h2>
            <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
              Ready to turn your vision into reality? Schedule a consultation
              with our color experts and take the first step toward your
              transformed space.
            </p>

            <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
              <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h3 className="font-serif text-xl font-bold mb-2">
                    What to Expect
                  </h3>
                  <ul className="text-gray-300 text-left space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Personalized color consultation</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Expert material recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Detailed project timeline</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Transparent pricing</span>
                    </li>
                  </ul>
                </div>

                <div className="flex-shrink-0">
                  <div className="relative w-48 h-48 mx-auto">
                    <div className="absolute inset-0 bg-blue-600 rounded-lg opacity-20"></div>
                    <div className="absolute inset-4 bg-blue-700 rounded-lg opacity-30"></div>
                    <div className="absolute inset-8 bg-blue-800 rounded-lg opacity-40"></div>
                    <div className="absolute inset-12 bg-blue-900 rounded-lg opacity-50 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <form
                onSubmit={handleBookingSubmit}
                className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
              >
                <input
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="flex-grow px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Book Consultation
                </button>
              </form>
            </div>

            {/* Email Capture */}
            <div className="max-w-md mx-auto">
              <h3 className="font-serif text-xl font-bold mb-4">
                Get Color Inspiration
              </h3>
              <p className="text-gray-300 mb-4">
                Subscribe to receive our exclusive color inspiration guide.
              </p>
              <form onSubmit={handleEmailSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">RangVeda</h3>
              <p className="text-gray-400">
                Transforming spaces into stories through the art of painting.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Interior Painting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Exterior Painting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Color Consultation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Commercial Painting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@colorstory.com</li>
                <li>(555) 123-4567</li>
                <li>123 Art Street, Creative City</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Color Story. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PaintingWebsite;
