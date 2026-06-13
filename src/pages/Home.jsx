import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Trust from '../components/Trust';
import MissionVision from '../components/MissionVision';
import WhyChooseUs from '../components/WhyChooseUs';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// Inside your main App component:

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Trust />
      <MissionVision />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </>
  )
}
