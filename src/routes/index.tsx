import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Navbar from "@/components/apex/Navbar";
import Hero3D from "@/components/apex/Hero3D";
import Hero from "@/components/apex/Hero";
import Process from "@/components/apex/Process";
import Compliance from "@/components/apex/Compliance";
import Calculator from "@/components/apex/Calculator";
import LeadMagnet from "@/components/apex/LeadMagnet";
import UseCases from "@/components/apex/UseCases";
import Features from "@/components/apex/Features";
import Industries from "@/components/apex/Industries";
import CTA from "@/components/apex/CTA";
import BookingModal from "@/components/apex/BookingModal";
import CustomCursor from "@/components/apex/CustomCursor";
import UsagePlansModal from "@/components/apex/UsagePlansModal";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apex Automation — Overnight Automation for Professional Firms" },
      {
        name: "description",
        content:
          "While you sleep, we deliver. Submit by 5 PM EST, ready by 9 AM EST — overnight automation for law firms, clinics, and professional services. HIPAA, GDPR, POPIA compliant.",
      },
      { property: "og:title", content: "Apex Automation — Overnight Automation for Professional Firms" },
      {
        property: "og:description",
        content:
          "Overnight automation for professional firms. Reclaim 15+ hours per staff member each week with bank-grade compliance.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPlansOpen, setIsPlansOpen] = useState(false);
  const open = () => setIsBookingOpen(true);
  const openPlans = () => setIsPlansOpen(true);

  return (
    <div>
      <CustomCursor />
      <Navbar onOpenBooking={open} onOpenPlans={openPlans} />

      <main>
        <div style={{ position: "relative" }}>
          <Hero3D />
          <Hero onOpenBooking={open} />
        </div>

        <Process />
        <Compliance />
        <Calculator onOpenBooking={open} />
        <LeadMagnet />
        <UseCases />
        <Features />
        <Industries onOpenBooking={open} />
        <CTA onOpenBooking={open} />
      </main>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <UsagePlansModal isOpen={isPlansOpen} onClose={() => setIsPlansOpen(false)} onSelectPlan={open} />
    </div>
  );
}

