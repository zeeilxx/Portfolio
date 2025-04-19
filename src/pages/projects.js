import React from 'react';

export default function Projects() {
  return (
    <div className=" relative overflow-hidden" id="projects">
      <div className=" mx-auto max-w-6xl p-5 py-8 py-20 " id="experience">
        <div className="mb-16 pb-4 text-7xl max-w-[450px] font-medium text-white rounded-lg bg-gray-300 shadow-lg px-5 border-2 border-black/10 text-shadow">🚀 Projects</div>

        <div className="w-[1130px] rounded-lg bg-gray-300 shadow-md px-5">
          <div className="no-scrollbar relative max-w-[1114px] space-x-4 overflow-hidden overflow-x-auto">
            <div className="flex snap-start gap-4 py-4">
              {projects.map((proj, index) => {
                return (
                  <div
                    className="min-w-[300px] space-y-4 bg-white p-4 shadow-md"
                    key={`project${index}`}
                  >
                    <div className="relative h-32 overflow-hidden border-b">
                      <img alt="" src={proj.img} className="absolute left-0 my-auto w-full "></img>
                    </div>
                    <div className="text-2xl text-cyan-500">{proj.title}</div>
                    <div className="h-20 overflow-y-auto text-xs font-light text-gray-400">
                      {proj.details}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: 'GigsGate',
    details:
      'This website development project is a secure online concert ticket booking platform using technologies such as HTML, CSS, JavaScript, PHP, MySQL, and Bootstrap. Following the SDLC Waterfall model, every stage from analysis to testing is carried out systematically to ensure system quality. Focusing on user needs resulted in key features such as a simple ordering process, and a variety of digital payment methods. This website also increases the efficiency and security of transactions, making it an innovative solution for booking concert tickets.',
    img: 'https://cdn.discordapp.com/attachments/854901273450381323/1362818933995864185/image.png?ex=6803c789&is=68027609&hm=442c872d44913de95dc20e113542295fa773e7165a7fb1e4b4f52c241891f735&',
  },
  {
    title: 'Shoe Sizing Program',
    details:
      'This program uses the foot sole image segmentation method with the Canny Edge Detection Algorithm and HSV image segmentation which is able to identify and extract the soles of the foot with high accuracy. This program is successful in measuring the length and width of the sole of the foot and classifying shoe sizes according to international standards (EU, UK, US) quite accurately, although adjustments are still needed to improve the consistency of the result',
    img: 'https://ridhanfadhlil.my.canva.site/media/f11e78b26a887a2ee5f8fdf8b91cc301.jpg',
  },
  {
    title: 'Cryptogenic',
    details:
      'Cryptogenic is a 2D action-adventure game combining Metroidvania and rogue-like elements, where players follow Salvador, a former soldier, on a mission to save Lydia, whose mysterious illness ties to the kingdom’s dark secrets. With challenging puzzles, intense combat, diverse levels, and engaging NPCs, the game offers a dynamic mix of exploration and strategy. Developed in Unity for stability and creative flexibility, it features rich visuals and an intuitive interface, immersing players in its gripping narrative and action-packed gameplay.',
    img: 'https://ridhanfadhlil.my.canva.site/media/2f1adfd2e05187e3a733f294471da647.png',
  },
  {
    title: 'DigicAR',
    details:
      'Using Unity 3D, this AR and VR-powered digital car showroom offers a seamless way for customers to explore and personalize vehicles virtually. With features like model previews, color customization, interior simulation, and interactive controls, the app delivers a personalized and engaging experience. It simplifies car selection for users while providing the automotive industry with an efficient, flexible solution for modern digital marketing.',
    img: 'https://ridhanfadhlil.my.canva.site/media/30b4ed27416757d79c237024e9e597c4.png',
  },
];
