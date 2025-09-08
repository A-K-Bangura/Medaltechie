import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAPFadeIn } from "../hooks/use-gsap-fade-in";
import { usePrefersReducedMotion } from "../hooks/use-prefers-reduced-motion";


const testimonials = [
  {
    id: 1,
    quote:
      "SAAS transformed our vision into reality with their sustainable approach. The eco-friendly materials and innovative design exceeded our expectations. Our new office building is not only beautiful but also energy-efficient.",
    name: "Aminata Kamara",
    position: "CEO",
    company: "Green Tech Solutions",
    avatar: "/professional-african-woman-ceo.jpg",
  },
  {
    id: 2,
    quote:
      "Working with SAAS was an incredible experience. They delivered our community center project on time and within budget, using locally sourced materials that support our economy while being environmentally responsible.",
    name: "Mohamed Sesay",
    position: "Director",
    company: "Community Development Fund",
    avatar: "/professional-african-man-director.jpg",
  },
  {
    id: 3,
    quote:
      "The team at SAAS understood our need for affordable housing without compromising on quality. Their innovative construction methods and sustainable practices made our housing project a huge success.",
    name: "Fatima Bangura",
    position: "Project Manager",
    company: "Housing Development Authority",
    avatar: "/professional-african-woman-project-manager.jpg",
  },
  {
    id: 4,
    quote:
      "SAAS brought expertise and creativity to our school construction project. The design is both functional and inspiring, creating an environment that enhances learning while being cost-effective to maintain.",
    name: "Ibrahim Koroma",
    position: "Principal",
    company: "Sierra Leone Education Board",
    avatar: "/professional-african-man-principal.jpg",
  },
  {
    id: 5,
    quote:
      "From concept to completion, SAAS demonstrated professionalism and innovation. Our healthcare facility is now a model for sustainable construction in the region, serving our community with pride.",
    name: "Adama Turay",
    position: "Administrator",
    company: "Regional Health Authority",
    avatar: "/professional-african-woman-administrator.jpg",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useGSAPFadeIn();
  const timeoutRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Auto-rotation logic
  useEffect(() => {
    if (!isAutoPlaying || prefersReducedMotion) return;

    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex, isAutoPlaying, prefersReducedMotion]);

  // Handle manual avatar click
  const handleAvatarClick = (index) => {
    if (index === activeIndex) return;

    setActiveIndex(index);
    setIsAutoPlaying(false);

    // Reset auto-play after 10 seconds
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  // Animate testimonial change
  useEffect(() => {
    if (prefersReducedMotion) return;

    const testimonialCard = containerRef.current?.querySelector(".testimonial-card");
    if (testimonialCard) {
      gsap.fromTo(
        testimonialCard,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [activeIndex, prefersReducedMotion]);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-secondary-50 w-full max-w-full overflow-hidden">
      <div className="container mx-auto px-4 w-full max-w-full">
        <div ref={containerRef} className="text-center">
          <div className="mb-6">
            <span className="inline-block bg-secondary-400 text-primary-800 px-3 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Words From Our Clients
            </h2>
          </div>

          <div className="w-full md:max-w-3xl lg:max-w-4xl mx-auto mb-2">
            <div className="testimonial-card bg-white rounded-2xl px-4 md:px-8 py-6 shadow-lg border border-secondary-200">
              <div className="mb-3">
                <svg
                  className="w-8 h-8 md:w-12 md:h-12 text-secondary-400 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              <blockquote className="text-base md:text-lg text-secondary-800 leading-relaxed mb-6">
                {currentTestimonial.quote}
              </blockquote>

              <div className="flex items-center justify-center gap-3 md:gap-4">
                <img
                  src={currentTestimonial.avatar || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-secondary-200"
                />
                <div className="text-left">
                  <div className="font-semibold text-secondary-900 text-lg">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-secondary-600">
                    {currentTestimonial.position}, {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center pt-4 gap-8 overflow-x-auto pb-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => handleAvatarClick(index)}
                className={`flex-shrink-0 transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? "ring-4 ring-primary-600 ring-offset-2 ring-offset-white scale-110"
                    : "hover:scale-105 opacity-70 hover:opacity-100"
                }`}
                aria-label={`View testimonial from ${testimonial.name}`}
              >
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-secondary-200"
                />
              </button>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleAvatarClick(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary-600"
                    : "bg-secondary-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

