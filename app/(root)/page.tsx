import {HeroSection} from './_components/hero'
import {BenefitsSection} from './_components/benefits';
import {FeaturesSection} from './_components/features';
import {ServicesSection} from './_components/services';
import {TestimonialSection} from './_components/testimonials';
import {TeamSection} from './_components/team';

const Page = () => {
  return (
    <div className='flex flex-col min-h-screen w-full justify-center items-center'>
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
    </div>
  )
}

export default Page