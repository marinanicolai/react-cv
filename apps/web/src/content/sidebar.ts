import { SidebarProps } from '../app/components/sidebar';

const sidebar: SidebarProps = {
  name: {
    name: 'Marina Nicolai',
    title: 'React.js developer',
  },
  contact: {
    email: { value: 'nicolaimarina@gmail.com', icon: 'fas fa-envelope' },
    phone: { value: '540-322-7213', icon: 'fas fa-phone' },
    website: { value: 'marinanicolai.dev', icon: 'fas fa-globe' },
    linkedin: { value: 'linkedin.com/in/marina-nicolai-b627b1128', icon: 'fab fa-linkedin' },
    github: { value: 'github.com/marinanicolai', icon: 'fab fa-github' },
  },
  skills: {
    title: 'Technical Proficiency',
    list:
    
    { React: [],
      JS:[], 
      HTML: [],
      Css:[],
      WordPress:[]

    }
    ,
  },
  education: {
    title: 'Education',
    list: [
      {
        icon: 'fas fa-building-columns',
        degree: 'BSc Computer Science',
        school: 'George Mason',
        date: '2020-2024',

        courses: [
          'Computer Networks',
          'Cryptography & Network Security'
        ],
        
      },
    ],
  },
  languages: {
    title: 'Languages',
    list: [
      { name: 'English', level: 'Full Professional Proficiency' },
      { name: 'Romanian', level: 'Native' },
      { name: 'Russian', level: 'Native' },
    ],
  },
  certifications: {
    title: 'Certifications',
    list: [
      {
        name: 'CompTia Security+ - Professional',
        icon: 'fab fa-docker',
        description: 'CompTia Security+ - 2019',
      },
      {
        name: 'NOVA Web design and development - Professional',
        icon: 'fab fa-docker',
        description: 'NOVA - 2021',
      }
    ],
  },
  interests: {
    title: 'Interests',
    list: [
      {
        name: 'Photography',
        description:
          'Capturing moments of everyday life in a picture frame shot',
      },
      
      {
        name: 'Salsa',
        description: 'Learning Salsa, Tango and Bachata for fun',
      }
    ],
  },
};

export default sidebar;
