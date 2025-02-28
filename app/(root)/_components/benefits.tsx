import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Icon } from "@/components/ui/icon";
// import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "BrainCircuit", // Represents structured learning
    title: "Structured Learning Paths",
    description:
      "Get a personalized study plan tailored for service-based, product-based, FAANG, and Big 4 companies with daily curated resources.",
  },
  {
    icon: "Mic", // Represents AI mock interviews
    title: "AI-Powered Mock Interviews",
    description:
      "Simulate real interview scenarios with AI-driven feedback, facial confidence tracking, and live proctoring for a realistic experience.",
  },
  {
    icon: "Coins", // Represents gamification rewards
    title: "Gamified Learning Experience",
    description:
      "Earn coins for completing tasks, unlock achievements, and stay motivated with a rewarding learning system.",
  },
  {
    icon: "LineChart", // Represents progress tracking
    title: "Track Your Progress",
    description:
      "Monitor your daily progress, analyze strengths and weaknesses, and optimize your preparation with performance analytics.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Master your placement preparation with AI-driven mock interviews,
            structured learning plans, gamified progress tracking, and curated
            daily tasks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="text-right">
                  
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
