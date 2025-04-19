import React from 'react';

export default function Experience() {
  return (
    <div className=" mx-auto max-w-6xl p-5 py-20" id="experiences">
      <div className="mb-16 pb-4 text-left text-7xl font-medium text-white rounded-lg bg-gray-300 shadow-lg px-5 border-2 border-black/10 text-shadow max-w-[830px]">
      🔧Technical Experience
      </div>
      {experiences.map((exp) => {
        return (
          <div className=" mb-10" key={`experience${exp.company}`}>
            <div className="mb-2 flex flex-row items-center border-b-[1px] border-b-gray-200 pb-2">
              <div className="mr-4 flex h-[32px] w-[32px] items-center justify-center">
                <img
                  className="max-h-full max-w-full transform cursor-pointer rounded-md transition ease-in hover:scale-105"
                  src={
                    exp.img 
                  }
                  alt=""
                  onClick={() => window.open(exp.companyUrl || window.location, '_blank')}
                />
              </div>

              <div className="flex-1 cursor-pointer">
                <div className="text-lg text-lg font-bold">{exp.company}</div>
                <div className="flex flex-row flex-col justify-between">
                  <div className="text-md text-md font-semibold text-gray-600">{exp.position}</div>
                  <div className="text-sm font-semibold">{exp.date}</div>
                </div>
              </div>
            </div>

            <div className=" pl-4 text-sm tracking-wide text-gray-500">
              <ul className="list-disc">
                {exp.details.map((detail, index) => (
                  <li key={`exp-details${index + exp.company}`}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const experiences = [
  {
    position: 'Web Developer Intern',
    company: 'Adira Dinamika Multi Finance',
    details: [
      'Maintenance old ADIRA Website using CI3 And Bootstrap Framework for Main Website and CMS Website.',
      'Participate in making of ADIRA Revamp Website using Vue.js and Tailwind Framework for Frontend, and currently learning to integrate frontend and backend using Springboot Java Framework.',
    ],
    date: 'Mar 2025 - Present',
    img: 'https://cdn1-production-images-kly.akamaized.net/wuNwSBSpU75Weu5Zv4D6I2pFVqk=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/816442/original/085582300_1424759757-logoadirafinances.jpg',
    companyUrl: 'https://adira.co.id/',
  },
  {
    position: 'Web Develompent & UI/UX',
    company: 'Celerates Bootcamp',
    details: [
      'Learn Web Developing/Project Management for Website Making purposes.',
      'Learn Website Making Using React, Bootstrap, JavaScript. Also slightly learn about Cyber Security and Cloud Computing for Website Purpose.',
    ],
    date: 'Mar 2025 - Present',
    img: 'https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/33b5de616ec3d3fe36dcaa2f011840bf.jpg',
    companyUrl: 'https://celerates.co.id/',
  },
];
