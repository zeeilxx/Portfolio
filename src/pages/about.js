import React from 'react';
import { getDriveUrlById } from '../utils';

export default function About() {
  return (
    <div className=" mx-auto max-w-6xl p-5 py-20" id="about">
      <div className="text-shadow mb-16 max-w-[500px] rounded-lg border-2 border-black/10 bg-gray-300 px-5 pb-4 text-left text-7xl font-bold text-white shadow-lg">
        👨‍💻About Me
      </div>

      <div className="flex items-center space-y-8 space-y-0">
        <div className="order-last h-full basis-1/3">
          <img
            src={getDriveUrlById('1zMOinHcdi5Jx1C6yAkU8P9ZGZz3gXFXp')}
            className="mx-auto h-52 w-52 rounded-full"
            alt=""
          ></img>
        </div>
        <div className="basis-2/3 space-y-4">
          <span className="text-xl text-gray-500">Hi, I am </span>
          <div className="text-4xl font-semibold text-black">Ridhan Fadhlil Wafi</div>
          <div className="text-xl font-semibold text-gray-500">
            Passionate Web/Front End Developer
          </div>
          <div className="text-justify font-light text-gray-400">
            I am a 3rd year student at the Faculty of Computer Science, majoring in Informatics. Im
            Interested and Enthusiast about FrontEnd Developing, such as making website interfaces
            and application interfaces. Im proficient in several programming languages such as
            Python, Java, C, and C++. Im capable of using several tools, such as MySQL, Canva,
            Draw.io, Ms Office Excel and Word. Im involved in organizations as Head of Human
            Resources Development Department. This experience helped me to develop public speaking,
            teamwork, leadership, and increase my relationships. As a Computer Science student, im
            interested in FrontEnd Developer and UI/UX Design
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center justify-center space-x-4 py-10">
          {social.map((link, index) => {
            return (
              <a
                key={`about${index}`}
                href={link.link}
                target={'_blank'}
                rel="noreferrer"
                className="relative rounded-full"
              >
                <img src={link.icon} className="h-10 w-10" alt=""></img>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const social = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    link: 'https://www.linkedin.com/in/ridhanfadhlil',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    link: 'https://github.com/zeeilxx',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384063.png',
    link: 'https://www.instagram.com/ridhanfadhl/',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
    link: 'mailto: ridhanfadhlil@gmail.com',
  },
];
