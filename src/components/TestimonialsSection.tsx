"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Content Creator",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "SnipStory's professional editing and content strategy have dramatically increased my engagement rates. My clips are now getting 10x more views!"
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "The team at SnipStory transformed our social media presence. Their strategic approach and quality editing have boosted our brand recognition significantly."
  },
  {
    name: "David Wilson",
    role: "Small Business Owner",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "Working with SnipStory was a game-changer for my business. Their clips helped me reach a wider audience and convert more customers through social media."
  },
  {
    name: "Emily Zhang",
    role: "Social Media Influencer",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "The quality and creativity of SnipStory's editing is unmatched. They understand exactly what works on each platform and deliver consistently viral content."
  },
  {
    name: "James Rodriguez",
    role: "Digital Marketing Specialist",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: "SnipStory's analytics and reporting features help us track performance and optimize our content strategy. The results speak for themselves - massive growth!"
  },
  {
    name: "Lisa Thompson",
    role: "Brand Manager",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "The professionalism and attention to brand consistency that SnipStory provides is exceptional. They've become an essential part of our marketing team."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">Trusted by Creators</h2>
          <p className="text-muted-foreground text-lg">
            Join hundreds of satisfied creators and brands with SnipStory
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;