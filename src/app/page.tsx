"use client";

import styles from "./page.module.css";
import CarouselComponent from "@/components/Carousel";
import ContactForm from "@/components/ContactForm";
import HowItWorksCards from "@/components/HowItWorksCards";
import WhatWeDoSection from "@/components/WhatWeDo";
import RecentReviewsSection from "@/components/RecentReviews";
import OurServicesSection from "@/components/OurServices";
import Gallery from "@/components/Gallery";
import { SectionSubtitle } from "@/components/SectionTitles";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SectionSubtitle>This page is under construction</SectionSubtitle>
      </main>
    </div>
  );
}
