import {HeroSection} from './_components/hero'
import {BenefitsSection} from './_components/benefits';
import {FeaturesSection} from './_components/features';
import {HowItWorksSection} from './_components/how-it-works';
import {TestimonialSection} from './_components/testimonials';
import {TeamSection} from './_components/team';
import {CTASection} from './_components/cta';
import {FAQSection} from './_components/faqs';

const Page = () => {
  return (
    <div className='flex flex-col min-h-screen w-full justify-center items-center'>
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <FeaturesSection />
      <TestimonialSection />
      <TeamSection />
      <CTASection />
      <FAQSection />
    </div>
  )
}

export default Page