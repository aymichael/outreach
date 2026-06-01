import Image from "next/image";

export default function PartnershipPage() {
  return (
    <div className="m-4 h-full">
      <Image
        src="/set.jpg"
        alt="introduction photo"
        width={850}
        height={224}
        // 👇 Add rounded-2xl here (and maybe shadow-sm for a little depth!)
        className="w-full h-auto object-cover rounded-2xl shadow-sm"
      />
      <p className="text-base md:text-lg my-4">
        <b>Set Theory</b> is the fundamental branch of mathematics that studies collections of objects, known as sets, and the relationships between them. Far from being just an abstract concept, it serves as the universal language of modern mathematics, underpinning everything from basic arithmetic to calculus, linear algebra, and other branches of mathematics. Mastering set theory is essential for secondary students, as it builds a strong foundation for logical reasoning.
      </p>
      <p className="text-base md:text-lg my-4">
        Recognizing its foundational power, one of the most important missions of the CUHK-TUYF Partnership Project is demystifying set theory through engaging outreach activities. By organizing workshops, lectures and activities, we aim to bridge the gap between abstract theory and secondary mathematics, inspiring the next generation of mathematical thinkers.
      </p>
    </div>
  );
}