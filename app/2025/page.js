// pages/events.jsx
import EventBox from "../eventBox"; 

// abstract accept \n

export default function EventsPage () {
  // Event data formatted for the component
  const events = [
    {
      title: "Workshop on Set Theory",
      images: ["/2025/set_theory_2025.jpeg"],
      subtitle: "Set Theory and Computability",
      dates: ["6 Sep 2025", "13 Sep 2025"],
      time: "09:30 - 12:30",
      speakers: ["Prof. Michael McBreen"],
      target: "Senior secondary students with strong foundation and keen interest in advanced mathematical theories",
      medium: "English",
      introduction: "The workshop targets talented students with a deep interest in mathematics. It will provide participants with an opportunity for further study of set theory, which develops their ability in abstract and logical thinking. Participating students are required to complete coursework to understand their learning status.",
      abstract: "We will explore basic questions of knowability, provability and computability in mathematics. How do we characterize the complexity of a problem? What does it mean to say something is provable or unprovable? Along the way, we will get familiar with some fundamental tools of set theory.",
      summary: "There were more than 30 students who participated in the workshop. The students found the workshop very interesting, and they were able to grasp the basic concepts of set theory and group theory. The workshop provided a great opportunity for students to explore advanced mathematical theories and develop their abstract thinking skills."
    },
    {
      title: "Workshop on Algebra",
      images: ["/2025/algebra_2025.jpeg"],
      subtitle: "Introduction to Groups and Symmetry",
      introduction: "The workshop targets talented students with a deep interest in mathematics. It will provide participants with an opportunity for further study of set theory, which develops their ability in abstract and logical thinking. Participating students are required to complete coursework to understand their learning status.",
      dates: ["6 Sep 2025", "13 Sep 2025"],
      time: "09:30 - 12:30",
      speakers: ["Prof. Omar Kidwai"],
      abstract: "In the first week, we will meditate on the notion of symmetry by looking at rotations of everyday shapes, like a tetrahedron. How symmetric is a given object? How can we describe the \"amount of symmetry\"? Is a number enough of an answer? In the second week, we will discuss how to formalize our intuition into a mathematical definition, and ease our way into a little bit of group theory.",
      target: "Senior secondary students with strong foundation and keen interest in advanced mathematical theories",
      medium: "English",
      summary: "More than 30 students participated in the workshop. Through exploring simple geometric objects, participants were guided to understand abstract ideas about groups, starting from intuition and gradually moving toward a more formal understanding. Overall, most participants found the workshops attractive and motivating, and they left with a clearer sense of how symmetry and group theory connect."
    },
    {
      title: "Workshop on Mathematical Modelling",
      subtitle: "Game Theory Unlocked",
      introduction: "The activity gives senior secondary students an introduction to mathematical modelling, which aims to develop students' mathematical skills to solve real-life problems systematically. This event welcomes students interested in applied mathematics.",
      dates: ["To be announced"],
      // time: "14:30 - 17:30",
      speakers: ["Dr. Lily Li Pan"],
      abstract: "Game theory, a captivating branch of mathematics, offers a unique perspective on strategic decision-making, with applications spanning diverse fields such as economics, politics, biology, and psychology. In this workshop, students will have the opportunity to delve into the fundamental concepts of game theory and explore how these principles can be applied to real-world challenges. Through interactive games and engaging discussions, students will gain valuable insights into strategic thinking and problem-solving.",
      target: "Senior secondary students (preferably knowing calculus)",
      medium: "Cantonese supplemented with English"
    },
    {
      title: "Mathematics Day Camp - Boolean Algebra and its Applications",
      images: ["/2025/daycamp1_2025.jpg", "/2025/daycamp2_2025.jpg", "/2025/daycamp3_2025.jpg", "/2025/daycamp4_2025.jpg"],
      speakers: ["Dr. Kai Leung Chan", "Dr. Lily Li Pan"],
      introduction: "The Day Camp is a whole-day mathematics-oriented STEM activity. During the day camp, the speakers introduce the basics of mathematics, such as sets, functions, and logic, and provide an introduction to Boolean Algebra. Participants will apply mathematics knowledge acquired to circuit design and minimization. They will also construct circuits to solve real-life problems in the hands-on activities provided.",
      extraTitle: ["1st round", "2nd round", "3rd round", "4th round"],
      extraContentTitle: ["Date: ", "Participating Schools: "],
      extraContent: [["24 May 2025", "Hong Kong True Light College\nKowloon True Light Middle School\nTrue Light Girls' College\nTrue Light Middle School of Hong Kong"],["21 Jun 2025", "Wah Yan College, Kowloon\nSt. Stephen‘s Church College\nPo Leung Kuk Ma Kam King College"],["28 Jun 2025", "Chan Sui Ki (La Salle) College\nBelilios Public School\nLKWFSL Lau Wong Fat Secondary School\nYuen Long Merchants Association Secondary School"],["12 Jul 2025", "Kiangsu-Chekiang College (Shatin)\nShatin Pui Ying College\nSt. Catharine's School for Girls\nSt. Paul's College\nTWGHs Kap Yan Directors' College"]],
      externalLink: ["Click", "/dayCampLeaflet.pdf", " for more details."],
      summary: "Around 200 students from 16 local secondary schools participated in the day camp. Feedback from both students and teachers was very positive. Through a hands-on and interactive format, participants learned key concepts in sets, logic, and Boolean algebra, building understanding through guided activities rather than passive instruction. The camp also provided students with opportunities to connect with undergraduate helpers from the Department of Mathematics, encouraging discussion, questions, and peer-to-peer learning throughout the activity.",
      remark: <span>Schools interested in this activity are welcome to contact us by email via <a href="mailto:outreach@math.cuhk.edu.hk" className="text-blue-600 dark:text-blue-400 hover:underline">outreach@math.cuhk.edu.hk</a> for more information.</span>
    },
    {
      title: "Sponsorship for Two Algebraic Courses",
      courses: [
        { 
          name: "Towards Modern Algebra", 
          speaker: "Dr. Charles Chu Che Li" 
        },
        { 
          name: "Introduction to Discrete Mathematics", 
          speaker: "Dr. Ming Ho Ng" 
        }
      ],
      introduction: "Starting from 2024, The TUYF Charitable Trust will sponsor two algebraic courses, “Towards Modern Algebra” and “Introduction to Discrete Mathematics”, which will be offered every summer, along with our popular Enrichment Programme for Young Mathematics Talents (EPYMT) organized by the Department.\nThese two courses are expected to attract 80 secondary school students to enrol. Upon completion of the courses and fulfilling the requirements as specified, students are eligible to apply for 1 credit exemption when they study at CUHK. Continuing its support to Hong Kong True Light College, the Mathematics Department will invite the school to recommend three high school students to participate in the course.",
      extraTitle: ["Towards Modern Algebra", "Introduction to Discrete Mathematics"],
      extraContentTitle: ["Speaker: ", "Content: "],
      extraContent: [
        ["Dr. Charles Chu Che Li", "This course will introduce the basic concepts of abstract algebra, including groups, rings and fields."],
        ["Dr. Ming Ho Ng", "This course will introduce basic mathematical topics, such as the concept of sets, logic, proofs and their applications in various areas including graph theory and game theory."]
      ],
      externalLink: ["Click", "https://epymt.math.cuhk.edu.hk/", "for more information about EPYMT."],
    },
    {
      title: "Lecture Series on Naive Set Theory",
      introduction: "The activity gives senior secondary students an introduction to mathematical modelling, which aims to develop students' mathematical skills to solve real-life problems systematically. This event welcomes students interested in applied mathematics.",
      dates: ["14, 21, 28 Mar 2026", "11, 18 Apr 2026"],
      time: "10:00 - 13:00",
      speakers: ["Dr. Chun Lung Kelvin Liu"],
      abstract: "The Lecture series consists of a series of five lectures designed to engage elite students with a keen interest in mathematics from local secondary schools in Hong Kong. These lectures will provide a rigorous introduction to fundamental mathematical concepts, including sets, logic, proofs, relations, and functions. By delving these topics, students will gain understanding of how to construct mathematical objects with precision, utilizing terms such as sets and elements.",
      target: "Senior secondary students with strong foundation or teachers interested in advanced mathematical theories",
      medium: "Cantonese supplemented with English",
      summary: "The lecture series attracted around 40 students and 10 mathematics teachers. The lectures series provided a rigorous and intensive introduction to fundamental mathematical concepts, including sets, logic, proofs, relations, and functions. By delving these topics, participants gained understanding of how to construct mathematical objects with precision, utilizing terms such as sets and elements. Overall, the lecture series was well-received by students and provided an opportunity for them to explore advanced mathematical theories in a structured and engaging way."
    },
    {
      title: "Gifted Mathematics Program for Secondary School Students (2025-26)",
      speakers: ["Prof. Yiu Chung Benny Hon", "Dr. Wai Leung Hugo Mak", "Dr. Wai Chee Shiu"],
      dates: ["Nov 2025 - May 2026 (divided into 3 phases)"],
      introduction: "The Program aims at providing cohesive mathematical training for outstanding secondary school students, delivering contents that may not be covered in the Hong Kong Diploma of Secondary Education (HKDSE) curriculum, and enhancing students' interests and abilities in various branches of Mathematics, including but not limited to Fundamental Algebra, Logic, Coordinate Geometry and Elementary Analysis. Throughout different phases of this Program, students will be equipped with necessary mathematical tools for pursuing in-depth mathematical investigation or even mini-research.",
      externalLink: ["Click", "https://epymt.math.cuhk.edu.hk/", "for more information about EPYMT."],
      externalLink: ["Click", "/CUHK-TUYF_Gifted_Math_Program_(2025-26)_Leaflet.pdf", " for more details."],
      summary: "The CUHK-TUYF Gifted Mathematics Program successfully delivered a rigorous, progressive curriculum that guided secondary students from foundational concepts to advanced pure mathematics and interdisciplinary applications. Student attendance and engagement were exceptionally high, with a significant portion of participants demonstrating university-level math proficiency by the program's conclusion. While students highly valued the experience for sharpening their analytical skills and motivating their future academic pursuits, they also offered constructive feedback for future iterations. Their primary suggestions included adjusting the pace for highly complex topics, incorporating more interactive group activities, expanding the overall curriculum, and offering elective modules in applied fields like cryptography and data analytics.",
      images: ["/2025/giftedprogram1.jpg", "/2025/giftedprogram2.jpg", "/2025/giftedprogram3.jpg", "/2025/giftedprogram4.jpg", "/2025/giftedprogram5.jpg"],
    },
{
      title: "Elite Student Mentorship Programme",
      introduction: "The Department of Mathematics will nominate outstanding students in different activities (including EPYMT) to participate in this mentorship programme. This programme will be conducted in a group format, with a supervisor leading several students to explore a specific topic. Participating students will be required to read books or journal papers recommended by their supervisor, report their study progress regularly, and submit a written report upon completion of their studies.",
      // extraTitle: ["Group 1", "Group 2", "Group 3", "Group 4"],
      // extraContentTitle: ["Supervisor: ", "Title: ", "Duration: "],
      // extraContent: [["Dr. Xiaoli Lin", "Exploration of Calculus and Real Analysis", "July - August 2024"], ["Dr. Hugo Wai Leung Mak", "From Set Theory, Properties of Functions to Abstract Algebra", "August - November, 2024"], ["Dr. Hugo Wai Leung Mak", "The Use of Elementary Set Theory, Functional Equations and Inequalities in Solving Algebra Problems", "August - November, 2024"], [" Dr. Charles Chun Che Li", "(Upon communication between the department and participating students)", "September - December, 2024"]],
      
      // 👇 Here is the updated remark using JSX and a mailto link
      remark: <span>Schools interested in this activity are welcome to contact us by email via <a href="mailto:outreach@math.cuhk.edu.hk" className="text-blue-600 dark:text-blue-400 hover:underline">outreach@math.cuhk.edu.hk</a> for more information.</span>
    }
  ];

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-center my-8 text-[#1e3a8a] dark:text-blue-300">
        CUHK-TUYF Partnership Project 2025-26
      </h1>
      <div className="space-y-8">
        {events.map((event, index) => (
          <EventBox key={index} event={event} />
        ))}
      </div>
    </div>
  );
};