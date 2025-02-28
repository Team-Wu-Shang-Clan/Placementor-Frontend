"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Rahul Sharma",
    userName: "Software Engineer at Google",
    comment:
      "This platform was a game-changer for me! The structured roadmap and mock interviews helped me crack my dream job at Google.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Priya Verma",
    userName: "Data Analyst at Amazon",
    comment:
      "I loved the interactive challenges and AI-powered mock interviews. They boosted my confidence and prepared me for real-world scenarios.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Amit Patel",
    userName: "Full Stack Developer at Microsoft",
    comment:
      "The personalized learning plan kept me on track, and the daily tasks made learning fun and consistent. Highly recommend!",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sneha Gupta",
    userName: "Cybersecurity Engineer at Cisco",
    comment:
      "The platform’s curated content saved me so much time. The interview preparation section was particularly helpful!",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Karan Mehta",
    userName: "Backend Developer at Flipkart",
    comment:
      "The gamification features kept me engaged, and the peer support system was amazing. This platform made my placement journey smoother!",
    rating: 5.0,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear From Students Who Cracked Their Dream Jobs
        </h2>
      </div>

      <Carousel
        opts={{ align: "start" }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem key={review.name} className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-4 fill-primary text-primary" />
                    ))}
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
