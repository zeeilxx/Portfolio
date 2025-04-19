import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div className="home shadow-2xl bg-cover " id="home" style={{ backgroundImage: "url('/images/bg-code.jpg')" }}>
      
      <div className="overlay flex flex-row items-center justify-between px-10 py-20 shadow-md bg-white/30">
        
        {/* Bagian Kiri - Teks */}
        <div className="flex-1 flex flex-col justify-center items-center space-y-4 text-white ml-10">
          <h1 className="font-semibold text-7xl">RIDHAN FADHLIL</h1>
          <div className="border-b md:w-[520px]"></div>
          <h2 className="font-bold text-3xl">Web Developer</h2>
        </div>

        {/* Bagian Kanan - Gambar */}
        <div className="flex-1  flex justify-center items-center">
          <img
            src="/images/Ridhan_Fadhlil_Wafi_2.png"
            alt="Ridhan Fadhlil Wafi"
            className="w-64 h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
