import React from 'react';

export default function Organizational(){
    return (
        <div className="bg-slate-50">
        <div className=" mx-auto max-w-6xl p-5 py-20" id="organizational">
            <div className="mb-16 pb-4 pt-5 text-left text-7xl font-medium text-white rounded-lg bg-gray-300 shadow-lg px-5 border-2 border-black/10 text-shadow max-w-[1010px]">
            🕴️Organizational Experience
      </div>
      {organizationals.map((org) => {
        return (
          <div className=" mb-10" key={`experience${org.company}`}>
            <div className="mb-2 flex flex-row items-center border-b-[1px] border-b-gray-200 pb-2">
              <div className="mr-4 flex h-[32px] w-[32px] items-center justify-center">
                <img
                  className="max-h-full max-w-full transform rounded-md"
                  src={
                    org.img 
                  }
                  alt=""
                />
              </div>

              <div className="flex-1">
                <div className="text-lg text-lg font-bold">{org.company}</div>
                <div className="flex flex-row flex-col justify-between">
                  <div className="text-md text-md font-semibold text-gray-600">{org.position}</div>
                  <div className="text-sm font-semibold">{org.date}</div>
                </div>
              </div>
            </div>

            <div className=" pl-4 text-sm tracking-wide text-gray-500">
              <ul className="list-disc">
                {org.details.map((detail, index) => (
                  <li key={`org-details${index + org.company}`}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
        </div>
        </div>

    );
}

const organizationals = [
    {
      position: 'Staff of Human Resource Develompent Department',
      company: 'Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer UPN "Veteran" Jakarta',
      details: [
        'Project Officer of Latihan Dasar Kepemimpinan dan Manajemen Mahasiswa Fakultas Ilmu Komputer UPN "Veteran" Jakarta 2023',
        'Solving Internal Problems given by Head of Human Resource Develompent Department',
      ],
      date: 'Jan 2023 - Jan 2024',
      img: 'https://new-fik.upnvj.ac.id/wp-content/uploads/2022/08/Lambang-BEM-HD2.jpg',
    },
    {
      position: 'Head Of Human Resource Develompent Department',
      company: 'Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer UPN "Veteran" Jakarta',
      details: [
        'Project Officer of Pengenalan Kehidupan Kampus bagi Mahasiswa Baru (PKKMB) Fakultas Ilmu Komputer UPN "Veteran" Jakarta 2024',
        'Managing Human Resource Development Department and ensure internal organizational relations run smoothly',
      ],
      date: 'Jan 2024 - Jan 2025',
      img: 'https://new-fik.upnvj.ac.id/wp-content/uploads/2022/08/Lambang-BEM-HD2.jpg',
    },
    {
      position: 'Vice Chairman',
      company: 'Senat Mahasiswa Fakultas Ilmu Komputer UPN "Veteran" Jakarta',
      details: [
        'Project Officer of Rapat Kerja (RAKER) Organisasi Mahasiswa Seluruh Fakultas Ilmu Komputer UPN "Veteran" Jakarta 2025',
        'Taking Charge of internal organization problems, making sure every work program goes well',
      ],
      date: 'Jan 2025 - Present',
      img: 'https://new-fik.upnvj.ac.id/wp-content/uploads/2024/07/Senat-Mahasiswa.jpg',
    },
  ];