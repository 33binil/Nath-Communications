import { useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const displayedReviews = [
    TESTIMONIALS[startIndex % TESTIMONIALS.length],
    TESTIMONIALS[(startIndex + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(startIndex + 2) % TESTIMONIALS.length],
  ];

  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-sm sm:text-base font-bold tracking-[0.18em] text-slate-600 uppercase">
              <span className="w-4 h-[2px] bg-[#E02424] rounded-full" />
              <span>WHAT OUR CUSTOMERS SAY</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold text-slate-950 tracking-tight">
              Trusted by Tech Lovers
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Real people. Real experiences.
            </p>
          </div>

          {/* Navigation Controls matching screenshot circles */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              id="testimonial-prev-btn"
              onClick={handlePrev}
              aria-label="Previous customer review"
              className="w-8 h-8 rounded-full bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-300 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              id="testimonial-next-btn"
              onClick={handleNext}
              aria-label="Next customer review"
              className="w-8 h-8 rounded-full bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-300 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Review Cards matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {displayedReviews.map((testimonial, idx) => (
            <div
              key={`${testimonial.id}-${idx}`}
              className="bg-[#f8fafc] rounded-2xl p-5 sm:p-6 border border-slate-200/90 flex flex-col justify-start space-y-3.5"
            >
              {/* Author Info & Stars */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 flex-shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="font-bold text-slate-950 text-lg">
                    {testimonial.name}
                  </span>
                  {/* 5 Stars */}
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        className="w-3 h-3 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                {testimonial.comment}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

