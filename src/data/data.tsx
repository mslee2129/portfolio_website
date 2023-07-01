import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
// import resume from '../assets/resume.pdf';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Jason Lee Resume',
  description: "Resume - built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Welcome!`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm Jason, a student currently studying towards my MSc in Computing at{' '}
        <strong className="text-stone-100">Imperial College London</strong>. I'm an AI/ML enthusiast, with a passion for
        applying computational techniques in the arts and humanities. Scroll down for more info!
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
      // src: '../assets/resume.pdf',
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a Computer Scientist by training, but also am an aficionado of the arts and humanities by nature. In my spare time, you can catch me watching/playing football or tennis, 
  or listening to (a rather wide variety of) music. I'm also a coffee enthusiast, and a qualified barista.`,
  aboutItems: [
    {label: 'Location', text: 'London, UK; Seoul, South Korea', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'South Korean', Icon: FlagIcon},
    {label: 'Interests', text: 'Football, Tennis, Music, Languages, Coffee', Icon: SparklesIcon},
    {label: 'Study', text: 'Imperial College London, University College London', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Korean',
        level: 10,
      },
      {
        name: 'Russian',
        level: 8,
      },
      {
        name: 'German',
        level: 8,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'C++',
        level: 9,
      },
      {
        name: 'Java',
        level: 8,
      },
    ],
  },
  {
    name: 'Software Development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'JavaScript',
        level: 6,
      },
    ],
  },
  {
    name: 'Machine Learning',
    skills: [
      {
        name: 'Scikit-Learn',
        level: 8,
      },
      {
        name: 'PyTorch',
        level: 8,
      },
      {
        name: 'Tensorflow',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'FoodSnap',
    description: 'An image-recognition based calorie tracker. Accepted at CVPR 2023 for a Demo.',
    url: 'https://foodsn.app',
    image: porfolioImage1,
  },
  {
    title: 'MindMuse - Using Generative Models for Music Reconstruction from the Brain',
    description: 'This is an on-going project, check back for updates!',
    image: porfolioImage2,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'October 2022 - September 2023',
    location: 'Imperial College London',
    title: 'Master of Science (MSc) in Computer Science',
    content: (
      <ul>
        <li>
          {' '}
          • Modules in <strong>Machine Learning</strong>, <strong>Software Engineering</strong>, and{' '}
          <strong>Computer Vision</strong>
        </li>
        <li>
          {' '}
          • <strong>Software Engineering Project</strong>: FoodSnap - An Image-Recognition Based Calorie Tracker.
        </li>
        <li style={{paddingLeft: '1.5em', listStyle: 'none'}}>
          • Collaborated with teammates to deliver a full-stack web app, with a machine learning backend.
        </li>
        <li style={{paddingLeft: '1.5em', listStyle: 'none'}}>
          • Led the Frontend team to meet weekly sprint goals and ensure on-time delivery.
        </li>
        <li style={{paddingLeft: '1.5em', listStyle: 'none'}}>
          • Accepted for a Demo at <strong>CVPR 2023</strong>.
        </li>
        <li> • Thesis: Music Reconstruction from EEG signals using Generative Models</li>
      </ul>
    ),
  },
  {
    date: 'September 2019 - June 2022',
    location: 'University College London',
    title: 'Bachelor of Arts and Sciences (BASc) - Sciences and Engineering',
    content: (
      <ul>
        <li>
          {' '}
          • Graduated with <strong>First Class Honours</strong>
        </li>
        <li> • Modules in Computer Science, Psychology, and Philosophy</li>
        <li> • Thesis: AI in Art: The Foundations of Validity of Artificial Creativity</li>
      </ul>
    ),
  },
  {
    date: 'September 2017 - June 2019',
    location: 'Anglo American School of Moscow',
    title: 'International Baccalaureate',
    content: (
      <p>
        40 points - <strong>High Level</strong>: Mathematics, English, Economics, Physics;{' '}
        <strong>Standard Level</strong>: Russian, Music
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2022 - August 2022',
    location: 'University College London - London, UK',
    title: 'Summer Research Assistant',
    content: (
      <ul>
        <li>
          • Researched the viability of using VAEs in real-life optimization problems, using tools such as Pytorch.
        </li>
        <li>• Developed strong communication and organizational skills through working on group projects.</li>
      </ul>
    ),
  },
  {
    date: 'June 2021 - August 2022',
    location: 'Beyond Coding - Seoul, South Korea',
    title: 'Programming Lecturer',
    content: (
      <ul>
        <li>
          • Organised and delivered daily lectures in Python, Java and C++ programming for secondary students with no
          prior experience.
        </li>
        <li>
          • Communicated frequently with parents, students and faculty to provide feedback and discuss instructional
          strategies.
        </li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    // {
    //   name: 'Jane Doe',
    //   text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    // },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out to me regarding my resume, portfolio, or anything else!',
  items: [
    {
      type: ContactType.Email,
      text: 'mslee2129@gmail.com',
      href: 'mailto:mslee2129@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'London, UK',
      // href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@jmlee_2129',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'mslee2129',
      href: 'https://github.com/mslee2129',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
