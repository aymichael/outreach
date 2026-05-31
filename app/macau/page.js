"use client";

import Image from "next/image";
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function MacauPilotProjectPage() {
  // Add your actual image filenames here
  const galleryImages = [
    "/macau/macau-gallery-1.jpg",
    "/macau/macau-gallery-2.jpg",
    "/macau/macau-gallery-3.jpg",
    "/macau/macau-gallery-4.jpg",
    "/macau/macau-gallery-5.jpg",
  ];

  return (
    <div className="m-4 h-full">
      {/* Hero Image */}
      <Image
        src="/macau/macau_daycamp.jpg"
        alt="Macau Pilot Project Introduction"
        width={850}
        height={300}
        className="w-full h-auto object-cover rounded-2xl shadow-sm mb-8"
      />

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#1e3a8a] dark:text-blue-300">
        Mathematics Day Camp in Macau
      </h1>

      {/* Event Details Card */}
      <div className="bg-slate-50 dark:bg-gray-800 border border-slate-100 dark:border-gray-700 p-6 rounded-2xl shadow-sm mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-[#1e3a8a] dark:text-blue-300 mb-4">
          Event Details
        </h2>
        <ul className="text-base md:text-lg space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Date:</strong> 27, 28 May 2026</li>
          <li><strong>Venue:</strong> Pui Ching Middle School, Macau</li>
          <li><strong>Speaker:</strong> Dr. Kai Leung Chan and Dr. Lily Li Pan</li>
        </ul>
      </div>

      {/* Introduction Section */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Introduction
      </h2>
      <p className="text-base md:text-lg my-4 text-gray-700 dark:text-gray-300">
        Building upon the successful experience of the mathematics day camp, the project team received generous support from The TUYF Charitable Trust to expand the initiative to Macau. As a pilot test, the team organized the day camp at Pui Ching Middle School, Macau, drawing the enthusiastic participation of more than 80 senior secondary students across two rounds of the event. During the camp, speakers introduced foundational mathematical concepts—including sets, functions, and logic—before transitioning into an introduction to Boolean Algebra. Students then directly applied this newly acquired knowledge to circuit design and minimization, ultimately constructing physical circuits to solve real-life problems in a series of engaging, hands-on activities.
      </p>

      {/* Summary Section */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 mt-8">
        Summary
      </h2>
      <p className="text-base md:text-lg my-4 text-gray-700 dark:text-gray-300">
        The event was dynamically structured, alternating between lessons on Boolean algebra and interactive group activities. To ensure a hands-on experience, participating students worked in small teams of four to five, guided by five undergraduate student helpers from the Department of Mathematics who facilitated rich peer-to-peer interaction. The day camp culminated in a final challenge where students applied their new knowledge to design functional circuits for real-world applications, including automated voting and binary addition.
      </p>

      <p className="text-base md:text-lg my-4 text-gray-700 dark:text-gray-300">
        Following the success of this event, the project team gained valuable insights into secondary mathematics education in Macau. This firsthand experience will directly inform the design of future activities, ensuring they are closely tailored to the needs and backgrounds of local students. Moving forward, the team looks forward to exploring new opportunities to collaborate with more schools and reach a wider student population across Macau.</p>

      {/* Photo Gallery Section */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 mt-10">
        Photo Gallery
      </h2>
      
{/* Swiper Image Slider */}
      <div className="w-full rounded-xl overflow-hidden shadow-sm ring-1 ring-black/5">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className="w-full"
        >
          {galleryImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={src}
                  alt={`Macau pilot project gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </div>
  );
}