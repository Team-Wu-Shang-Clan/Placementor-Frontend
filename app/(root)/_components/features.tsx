import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, Trophy, Mic, BarChart, Users, Youtube 
} from "lucide-react"; // ✅ Import icons directly

interface FeaturesProps {
  icon: React.ReactNode; // ✅ Change icon type to JSX.Element
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: <GraduationCap size={24} className="text-primary" />,
    title: "Daily Structured Learning",
    description:
      "Follow a daily learning plan covering DSA, system design, and aptitude, ensuring consistent progress.",
  },
  {
    icon: <Trophy size={24} className="text-primary" />,
    title: "Gamification & Rewards",
    description:
      "Stay motivated with leaderboard rankings, achievement badges, and rewards for completing challenges.",
  },
  {
    icon: <Mic size={24} className="text-primary" />,
    title: "AI-Powered Mock Interviews",
    description:
      "Experience real-world interview simulations with instant AI feedback and confidence analysis.",
  },
  {
    icon: <BarChart size={24} className="text-primary" />,
    title: "Real-Time Progress Tracking",
    description:
      "Monitor your performance, analyze strengths and weaknesses, and track daily learning streaks.",
  },
  {
    icon: <Users size={24} className="text-primary" />,
    title: "Community & Peer Support",
    description:
      "Join a community of learners, discuss problems, and get mentorship from industry professionals.",
  },
  {
    icon: <Youtube size={24} className="text-primary" />,
    title: "Curated Learning Resources",
    description:
      "Access the best YouTube videos, blogs, and coding problems handpicked for placement preparation.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Prepare for placements with a structured approach, AI-driven guidance,
        and a supportive community.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  {icon} {/* ✅ Icons now render correctly */}
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
