import React from 'react';

export default function Skills() {
  return (
    <div className="bg-slate-50">
    <div className=" mx-auto max-w-6xl p-5 py-20 " id="skills">
      <div className="mb-16 pb-4 font-medium text-black text-left text-7xl">
        Skills
      </div>

      <div className="grid gap-4 grid-cols-4">
        {skills.map((skill, index) => {
          return (
            <div className="flex items-center space-x-2" key={`skill${index}`}>
              {skill.icon && <div className="text-2xl flex">{skill.icon}</div>}
              {skill.img && <img src={skill.img} className="h-6 w-6" alt=""></img>}
              <div className=" text-gray-500">{skill.skill}</div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}

const skills = [
  {
    img: 'https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png',
    skill: 'React',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
    skill: 'Tailwind CSS',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
    skill: 'CSS',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
    skill: 'Postman',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    skill: 'C++',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    skill: 'Java',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    skill: 'Python',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    skill: 'C',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    skill: 'JavaScript',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    skill: 'MySQL',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    skill: 'Docker',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png',
    skill: 'Vue',
  },
];
