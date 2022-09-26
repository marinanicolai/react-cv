import { CategoryProps } from '../app/components/cv/category';

const projects: CategoryProps = {
  title: 'Projects',
  icon: 'archive',
  description: '',
  list: [
    {
      title: 'Photos of the World',
      subtitle: 'React app',
      subtitleLink: 'https://photosoftheworld.netlify.app/',
      sourcetitle: 'Source code ',
      sourcecodeLink: 'https://github.com/marinanicolai/unsplash-hooks-portofolio',
      tags: ['api', 'react.js', 'hooks', 'styled-components'],
      description: [
        'Engaged in the development of a React application built using Unsplash API, Styled-Components and React Hooks ',
        'Incorporated use of api  react.js  hooks styled-components. '
      ],
    }  
    

  ],
};

export default projects;
