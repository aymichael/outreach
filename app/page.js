import Image from "next/image";

export default function PartnershipPage() {
  return (
    <div className="m-4 h-full">
      <Image
        src="/introduction.jpg"
        alt="introduction photo"
        width={850}
        height={224}
        className="w-full h-auto object-cover"
      />
      <p className="text-base md:text-lg my-4">
        Since 2019, The TUYF Charitable Trust graciously supported the CUHK - HKTLC collaboration project. In this pilot project, workshops, popular science talks and other events were organized for the students at Hong Kong True Light College to develop their comprehensive understanding and deep appreciation of mathematics. To promote collaborative learning and STEM education, students from Hong Kong True Light College, Kowloon True Light School, True Light Girls&apos; College and True Light Middle School of Hong Kong are invited to join a mathematics day camp organized by the Department. It was a whole-day activity which provided an introduction to Boolean algebra and its practical applications through engaging group activities. Building upon years of extensive experience in organizing outreach activities and the successful collaboration with HKTLC over the past three years, the Department decided to implement the collaboration project on a community-wide scale.
      </p>
      <p className="text-base md:text-lg my-4">
        Led by the outreach committee of the Department, the CUHK - TUYF Partnership Project was launched from 2024 onwards. This project aims to enhance students&apos; interest in mathematics and provide solid mathematical training for outstanding students. All activities under this project will be open to all local secondary schools to improve the effectiveness of the activities and increase the number of students who will benefit.

      </p>
      <p className="text-base md:text-lg my-4">
        Project coordinators: Dr. Kai Leung Chan, Dr. Lily Li Pan
      </p>
    </div>
  );
};

