// pages/events.jsx
import EventBox from "../eventBox";


// abstract accept \n

export default function EventsPage () {
  // Event data formatted for the component
  const events = [
    {
      id: 1,
      type: "Workshop",
      title: "Workshop on Algebra",
      subtitle: "Groups and Symmetries",
      dates: ["5 Aug 2024", "7 Aug 2024"],
      time: "09:30 - 12:30",
      speakers: ["Prof. Michael McBreen"],
      abstract: "This workshop explores the world of groups and symmetries. We will start with some basic questions: what are the symmetries of a human face? A tea cup? A sphere? We will see how symmetry can be used to solve seemingly complex problems in beautifully simple ways, and get to know some of the weirder groups of symmetries in two and three dimensions. We will examine attempts to classify symmetry groups. We will try and understand both the successes and the failures of this approach, and finally we will glimpse some of the enduring mysteries of the subject.",
      target: "Senior secondary students with strong foundation and keen interest in advanced mathematical theories",
      medium: "English"
    },
    {
      id: 2,
      type: "Workshop",
      title: "Workshop on Mathematical Modelling",
      subtitle: "Game Theory Unlocked",
      dates: ["5 Aug 2024", "7 Aug 2024"],
      time: "14:30 - 17:30",
      speakers: ["Dr. Lily Li Pan"],
      abstract: "Game theory, a captivating branch of mathematics, offers a unique perspective on strategic decision-making, with applications spanning diverse fields such as economics, politics, biology, and psychology. In this workshop, students will have the opportunity to delve into the fundamental concepts of game theory and explore how these principles can be applied to real-world challenges. Through interactive games and engaging discussions, students will gain valuable insights into strategic thinking and problem-solving.",
      target: "Senior secondary students (preferably knowing calculus)",
      medium: "Cantonese supplemented with English"
    },
    {
      id: 3,
      type: "Lecture Series",
      title: "Lecture Series on Foundations of Mathematics",
      subtitle: "The Line, the Square and the Cube: does dimension matter in size?",
      dates: ["31 Aug 2024", "7 Sep 2024", "14 Sep 2024"],
      time: "09:30 - 12:30",
      speakers: ["Dr. Wing Chung Fong", "Dr. Kai Leung Chan"],
      abstract: "In this lecture series, we shall introduce the notions of relations, functions, and equipotence. This will culminate in an exploration in the counter-intuitive ideas about cardinality and infinity first discovered by Georg Cantor, which changed the landscape of the mathematical world forever. Prepare to be enlightened and inspired by the depth and elegance of these fundamental mathematical concepts.",
      target: "Senior secondary students with strong foundation and keen interest in advanced mathematical theories",
      medium: "Cantonese supplemented with English"
    },
    {
      id: 4,
      type: "Day Camp",
      title: "Mathematics Day Camp – Boolean Algebra and its Applications",
      speakers: ["Dr. Kai Leung Chan", "Dr. Lily Li Pan"],
      abstract: "The Day Camp is a whole-day mathematics-oriented STEM activity. During the day camp, the speakers introduce the basics of mathematics, such as sets, functions, and logic, and provide an introduction to Boolean Algebra. Participants will apply mathematics knowledge acquired to circuit design and minimization. They will also construct circuits to solve real-life problems in the hands-on activities provided.",
      extraTitle: ["1st round", "2nd round", "3rd round", "4th round"],
      extraContentTitle: ["Date: ", "Participating Schools: "],
      extraContent: [["17 Feb 2024", "Hong Kong True Light College\nTrue Light Middle School of Hong Kong\nKowloon True Light Middle School\nTrue Light Girls' College"],["11 May 2024", "Chan Sui Ki (La Salle) College, Henrietta Secondary School, St. Stephen's Church College, TWGHs. Kap Yan Directors College"],["13 July 2024", "Baptist Lui Ming Choi Secondary School, Cheung Chuk Shan College, Kiangsu-Chekiang College (Shatin), LKWFSL Lau Wong Fat Secondary School"],["20 July 2024", "S.K.H. Lam Woo Memorial Secondary School, Shatin Pui Ying College, Wah Yan College (Kowloon), Yuen Long Merchants Association Secondary School"]],
      remark: "Schools interested in this activity are welcome to contact us by email via outreach@math.cuhk.edu.hk for more information."
    },
    {
      id: 5,
      type: "Sponsored Courses",
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
      abstract: "Starting from 2024, The TUYF Charitable Trust will sponsor two algebraic courses offered every summer along with our popular Enrichment Programme for Young Mathematics Talents (EPYMT). Upon completion of the courses and fulfilling the requirements, students are eligible to apply for 1 credit exemption when they study at CUHK. The Mathematics Department will invite Hong Kong True Light College to recommend three high school students to participate in the course."
    },
    {
      id: 6,
      type: "Mentorship Program",
      title: "Elite Student Mentorship Programme",
      groups: [
        {
          supervisor: "Dr. Xiaoli Lin",
          title: "Exploration of Calculus and Real Analysis",
          duration: "July - August 2024"
        },
        // Add other groups similarly
      ],
      abstract: "The Department of Mathematics will nominate outstanding students to participate in this mentorship programme. This programme will be conducted in a group format, with a supervisor leading several students to explore a specific topic. Participating students will be required to read books or journal papers, report their study progress regularly, and submit a written report."
    }
  ];

  return (
    <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          2024 Events
        </h1>
      <div className="space-y-8">
        {events.map(event => (
          <EventBox key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};