import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/Work1.png';
import Work2 from './assets/Work2.png';
import Work3 from './assets/Work3.png';
import Work4 from './assets/Work4.png';
import Work5 from './assets/Work5.png';
import Work6 from './assets/Work6.png';
import Work7 from './assets/Work7.png';
import Work8 from './assets/Work8.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Oghenefejiro",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Ayenor",
  },
  {
    id: 3,
    title: "Middle Name: ",
    description: "Christopher",
  },

  {
    id: 4,
    title: "Age : ",
    description: "23 Years",
  },

  {
    id: 5,
    title: "Nationality : ",
    description: "Nigerian",
  },

  {
    id: 6,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 7,
    title: "Address : ",
    description:
      "NewBrunswick,Canada",
  },

  {
    id: 8,
    title: "Phone : ",
    description: "(+1) 5068984756",
  },

  {
    id: 9,
    title: "Email : ",
    description: "fejiroayenor@gmail.com",
  },

  {
    id: 10,
    title: "linkedin: ",
    description: "www.linkedin.com/in/christopher-fejiro-ayenor",
  },

  {
    id: 11,
    title: "Languages : ",
    description: "English",
  },
];

export const stats = [
  {
    id: 1,
    no: '2',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '-',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '-',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '01/2023 - PRESENT',
    title: 'Web Developer <span> Precise Financial System</span>',
    desc: ' Collaborated with other software developers on the design, development, and testing of programs. Designed and coded new software or modified existing software to add new features.Designed and implemented various web-based applications for clients',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '05/2021 - 10/2021',
    title: 'Network Engineer <span> Simidebis International Ltd </span>',
    desc: 'Throughout this period, I helped install and configure network devices at different telecommunication towers and masts for various notable telecommunication companies.I also coordinated network operations, maintenance, repairs and upgrades',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '04/2019 - 05/2019',
    title: 'AXA Mansard <span> IT Technician </span>',
    desc: 'I worked in the IT department at AXA Mansard Insurance Company, where I installed and performed minor repairs to hardware, software, and peripheral equipment, following design and installation specifications.',
  },

];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '80',
  },

  {
    id: 4,
    title: 'Net Framework',
    percentage: '80',
  },

 
  {
    id: 8,
    title: 'React',
    percentage: '80',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Diary Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Diary Application',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Christopher',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'C#(WinForms)',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Movie Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Movie Application',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Christopher',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'EShopping Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'EShopping Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Christopher',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Blogging Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Blog Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Christopher',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJs',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'TodoList',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'TodoList',
      },
      {
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        title: 'Preview : ',
        desc: '',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Phone Book',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'PhoneBook',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'C#(WinForms)',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '',
      },
    ],
  },
  {
    id: 7,
    img: Work7,
    title: 'Calculator',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Calculator',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Christopher',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'C#(WinForms)',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '',
      },
    ],
  },
  {
    id: 8,
    img: Work8,
    title: 'Video Sharing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Video Sharing',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
