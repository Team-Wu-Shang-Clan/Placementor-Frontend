import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How does this platform help with placements?",
    answer:
      "We provide structured learning paths, daily goals, and AI-powered mock interviews to prepare you effectively.",
    value: "item-1",
  },
  {
    question: "What kind of learning resources are available?",
    answer:
      "You'll get curated YouTube videos, articles, LeetCode questions, and expert guidance for systematic learning.",
    value: "item-2",
  },
  {
    question: "How does the progress tracking work?",
    answer:
      "Your daily and overall progress is tracked based on completed tasks, mock interview performance, and consistency.",
    value: "item-3",
  },
  {
    question: "Can I practice mock interviews here?",
    answer:
      "Yes! Our AI-powered mock interviews simulate real scenarios and provide feedback to improve your performance.",
    value: "item-4",
  },
  {
    question: "Is this platform free to use?",
    answer:
      "Yes, the basic version is free. We may offer premium features for advanced preparation.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQs
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Got Questions? We&apos;ve Got Answers!
        </h2>
      </div>

      <Accordion type="single" collapsible>
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
