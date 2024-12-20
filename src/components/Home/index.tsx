import React from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { OnboardingSteps } from './OnboardingSteps';
import { PricingPlans } from './PricingPlans';
import { WhyRmax } from './WhyRmax';
import { FAQ } from './FAQ';
import Service from './Service';
import Business from './Business';

export function Home() {
  return (
    <section>
      <Hero />
      <Features />
      <OnboardingSteps />
      <WhyRmax />
      <Service/>
      <PricingPlans />
      <Business/>
      <FAQ />
    </section>
  );
}