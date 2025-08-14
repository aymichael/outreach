// pages/events.jsx
import EventBox from "../eventBox"; 

// abstract accept \n

export default function EventsPage () {
  // Event data formatted for the component
  const events = [
    {
      title: "Workshop on Set Theory",
      //subtitle: "To be confirmed",
      // introduction: "The workshop targets talented students with a deep interest in mathematics. It will provide participants with an opportunity for further study of set theory, which develops their ability in abstract and logical thinking. Participating students are required to complete coursework to understand their learning status.",
      dates: ["6 Sep 2025", "13 Sep 2025"],
      time: "09:30 - 12:30",
      speakers: ["Prof. Michael McBreen"],
      // abstract: "This workshop explores the world of groups and symmetries. We will start with some basic questions: what are the symmetries of a human face? A tea cup? A sphere? We will see how symmetry can be used to solve seemingly complex problems in beautifully simple ways, and get to know some of the weirder groups of symmetries in two and three dimensions. We will examine attempts to classify symmetry groups. We will try and understand both the successes and the failures of this approach, and finally we will glimpse some of the enduring mysteries of the subject.",
      target: "Senior secondary students with strong foundation and keen interest in advanced mathematical theories",
      medium: "English"
    },
    {
      title: "Workshop on Algebra",
      //subtitle: "To be confirmed",
      // introduction: "The workshop targets talented students with a deep interest in mathematics. It will provide participants with an opportunity for further study of set theory, which develops their ability in abstract and logical thinking. Participating students are required to complete coursework to understand their learning status.",
      dates: ["6 Sep 2025", "13 Sep 2025"],
      time: "09:30 - 12:30",
      speakers: ["Prof. Omar Kidwai"],
      // abstract: "This workshop explores the world of groups and symmetries. We will start with some basic questions: what are the symmetries of a human face? A tea cup? A sphere? We will see how symmetry can be used to solve seemingly complex problems in beautifully simple ways, and get to know some of the weirder groups of symmetries in two and three dimensions. We will examine attempts to classify symmetry groups. We will try and understand both the successes and the failures of this approach, and finally we will glimpse some of the enduring mysteries of the subject.",
      target: "Senior secondary students with strong foundation and keen interest in advanced mathematical theories",
      medium: "English"
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
      // images: ["/2024/daycamp_1.jpeg", "/2024/daycamp_2.jpg"],
      speakers: ["Dr. Kai Leung Chan", "Dr. Lily Li Pan"],
      introduction: "The Day Camp is a whole-day mathematics-oriented STEM activity. During the day camp, the speakers introduce the basics of mathematics, such as sets, functions, and logic, and provide an introduction to Boolean Algebra. Participants will apply mathematics knowledge acquired to circuit design and minimization. They will also construct circuits to solve real-life problems in the hands-on activities provided.",
      extraTitle: ["1st round", "2nd round", "3rd round", "4th round"],
      extraContentTitle: ["Date: ", "Participating Schools: "],
      extraContent: [["24 May 2025", "Hong Kong True Light College\nKowloon True Light Middle School\nTrue Light Girls' College\nTrue Light Middle School of Hong Kong"],["21 Jun 2025", "Wah Yan College, Kowloon\nSt. Stephen‘s Church College\nPo Leung Kuk Ma Kam King College"],["28 Jun 2025", "Chan Sui Ki (La Salle) College\nBelilios Public School\nLKWFSL Lau Wong Fat Secondary School\nYuen Long Merchants Association Secondary School"],["12 Jul 2025", "Kiangsu-Chekiang College (Shatin)\nShatin Pui Ying College\nSt. Catharine's School for Girls\nSt. Paul's College\nTWGHs Kap Yan Directors' College"]],
      externalLink: ["Click", "/dayCampLeaflet.pdf", " for more details."],
      remark: "Schools interested in this activity are welcome to contact us by email via outreach@math.cuhk.edu.hk for more information."
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
      title: "Elite Student Mentorship Programme",
      introduction: "The Department of Mathematics will nominate outstanding students in different activities (including EPYMT) to participate in this mentorship programme. This programme will be conducted in a group format, with a supervisor leading several students to explore a specific topic. Participating students will be required to read books or journal papers recommended by their supervisor, report their study progress regularly, and submit a written report upon completion of their studies.",
      // extraTitle: ["Group 1", "Group 2", "Group 3", "Group 4"],
      // extraContentTitle: ["Supervisor: ", "Title: ", "Duration: "],
      // extraContent: [["Dr. Xiaoli Lin", "Exploration of Calculus and Real Analysis", "July - August 2024"], ["Dr. Hugo Wai Leung Mak", "From Set Theory, Properties of Functions to Abstract Algebra", "August - November, 2024"], ["Dr. Hugo Wai Leung Mak", "The Use of Elementary Set Theory, Functional Equations and Inequalities in Solving Algebra Problems", "August - November, 2024"], [" Dr. Charles Chun Che Li", "(Upon communication between the department and participating students)", "September - December, 2024"]],
      remark: "Schools interested in this activity are welcome to contact us by email via outreach@math.cuhk.edu.hk for more information."
    }
  ];

  return (
    <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center my-8">
          2025 Events
        </h1>
      <div className="space-y-8">
        {events.map((event, index) => (
          <EventBox key={index} event={event} />
        ))}
      </div>
    </div>
  );
};