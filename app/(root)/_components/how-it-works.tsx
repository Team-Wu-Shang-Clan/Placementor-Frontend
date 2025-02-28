const steps = [
  { title: "Step 1", description: "Understand the entire process thoroughly and get a clear roadmap." },
  { title: "Step 2", description: "Find the best learning resources and structured content to guide you." },
  { title: "Step 3", description: "Engage in hands-on practice with interactive exercises and challenges." },
  { title: "Step 4", description: "Receive valuable feedback from experienced mentors and peers." },
  { title: "Step 5", description: "Prepare confidently and excel in your interviews to land your dream job." },
];

export const HowItWorksSection = () => {
  return (
    <section className="container py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        How It Works
      </h2>
      <div className="relative flex flex-col items-center">
        {/* Vertical Line */}
        <div className="absolute w-1 h-full bg-primary/30 rounded-full left-1/2 transform -translate-x-1/2"></div>
        
        {steps.map(({ title, description }, index) => (
          <div
            key={title}
            className={`relative flex items-center w-full max-w-3xl mb-7 last:mb-0 ${
              index % 2 === 0 ? "justify-start [&>div]:text-right" : "justify-end text-left"
            }`}
          >
            {/* Connection Point */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-md"></div>
            
            {/* Content */}
            <div className="w-[45%] bg-background p-4 rounded-lg shadow-sm transition hover:bg-muted/50">
                <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
