import { CategoryProps } from '../app/components/cv/category';

const experience: CategoryProps = {
  title: 'Experience',
  icon: 'suitcase',
  description: '',
  list: [
    {
      title: 'Software Engineer',
      subtitle: 'BEM websites LLC, Montross, VA,  July 2020 - present',
      subtitleLink: 'https://bemwebsites.com/',
      tags: [
        'wordpress',
        'css3',
        'html5',
        'js' 
      ],
      description: [
        'Spearhead the creation of all company sites driving consistent customer satisfaction with the product, engineering both frontend and backend.' ,
        'Ensure software quality, participate in solution development and project management.',
        'Advance iterative and incremental delivery of applications and services, participate in software design and development, and cross-functional collaboration. ',
        'Responsible for design enhancement, design, and implementation of new functionality',
        'Document software defects, using a bug tracking system; author defect reports and solutions identified and implemented.',
         'Identify, analyze, and document problems with program function, output, online screen, and content.',
         'Deploy expert level use of WordPress, CSS3, HTML5, and JS.'
      ]},  
    {
      title: 'Junior Web Developer',
      subtitle: 'Childress Agency, Fredericksburg, VA, August 2019 - July 2020',
      subtitleLink: 'https://www.childressagency.com/',
      
      tags: [
        'wordpress',
        'css3',
        'html5'
      ],
      description: [
        'Held accountability for maintenance of all company sites ensuring ongoing customer satisfaction with company services.',
        'Progressed the successful implementation and launch of two websites.',
        'Showcased expert level use of WordPress, CSS3, and HTML5 in the performance of website development services. ',
        'Conducted software and system testing procedures, release testing, beta support, and bug verification',
        'Executed the programming activities and product design consisting of multiple modules and subsystems.',
        'Delivered beta support and complex release testing for the assigned projects and resolved problems found in the software.',
        'Devised and developed user controls and custom controls for the common purpose of the whole application.'
      ],
    }

  ],
};

export default experience;
