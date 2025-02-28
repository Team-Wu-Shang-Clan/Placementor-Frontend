import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CTASection = () => {
  return (
    <section id="community" className="py-12 w-[80%]">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-24">
        <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center px-6 py-12 w-full">
          <CardHeader className="flex flex-col items-center">
            <Rocket className="size-16 text-primary" />
            <CardTitle className="text-5xl md:text-6xl font-bold mt-4">
              Join Our{" "}
              <span className="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Growing Community!
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl text-muted-foreground max-w-3xl">
            Be part of an exciting space where learners, mentors, and tech
            enthusiasts connect. Get support, share insights, and grow faster
            together!
          </CardContent>
          <CardFooter className="w-full flex justify-center mt-6">
            <Button size="lg" asChild className="text-xl px-12 py-6 w-full max-w-md">
              <a href="https://your-platform-link.com/join" target="_blank">
                Join Now 🚀
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
