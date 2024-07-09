import React from "react";
import dynamic from "next/dynamic";
import { RegisterButton } from "./RegisterButton";

const OpenStreetMap = dynamic(() => import("./OpenStreetMap"), { ssr: false });

export default function Home() {
  return (
    <main className="font-sans tracking-wide text-2xl">
      <Header />
      <Features />
      <DateLabel />
      <Register />
      <DateAndTime />
      <Venue />
    </main>
  );
}

function Header() {
  return (
    <header
      className="bg-[#504a42] bg-cover bg-[center_70%]"
      style={{ backgroundImage: `url('HP_1.jpg')` }}
    >
      <div className="container mx-auto pt-64 px-4 flex flex-col items-start gap-8">
        <h1 className="text-6xl uppercase font-mono tracking-widest text-white">
          Torneo Lierna
        </h1>
        <p className="text-white max-w-[30rem]">
          Segna sul calendario, il miglior torneo di calcio dell&apos;estate è
          qui.
        </p>
        <RegisterButton />
      </div>

      <div className="h-32 w-full bg-gradient-to-b from-transparent to-dark" />
    </header>
  );
}

function Features() {
  return (
    <section className="bg-dark">
      <div className="container mx-auto py-36 px-4">
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-4 gap-16">
          <Feature title="€150" description="quota iscrizione" />
          <Feature title="Calcio a 7" />
          <Feature title="€ 500" description="montepremi 1° posto" />
          <Feature title="12" description="squadre" />
        </div>
      </div>
    </section>
  );
}

function DateLabel() {
  return (
    <div className="absolute right-4 top-[38rem] md:top-[24rem] text-6xl font-mono text-accent tracking-wider md:[writing-mode:vertical-lr] h-96">
      3 agosto 2024
    </div>
  );
}

function Register() {
  return (
    <section id="register-section">
      <div className="container mx-auto py-24 px-4">
        <h2 className="text-6xl text-accent tracking-wider font-mono mb-8">
          Iscrivi la tua squadra
        </h2>
        <div className="flex flex-col gap-16 items-center">
          <CallIcon />
          <div className="flex items-center w-full justify-evenly">
            <Contact name="Brunetti Alberto" number="366 741 2663" />

            <Contact name="Vigano Alessandro" number="334 324 9687" />
          </div>
          <BubbleIcon />
          <Contact name="Epis Andrea" number="340 153 2873" />
        </div>
      </div>
    </section>
  );
}

function DateAndTime() {
  return (
    <section
      className="bg-accent bg-[length:auto_100%] bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url('campo.svg')` }}
    >
      <div className="container mx-auto h-[600px] flex items-center justify-center text-center">
        <div className="flex flex-col gap-8">
          <p className="text-5xl font-mono tracking-widest">3 agosto 2024</p>
          <p>8:30 - 20:30</p>
        </div>
      </div>
    </section>
  );
}

function Venue() {
  return (
    <section className="bg-dark text-white">
      <div className="container mx-auto py-24 px-4 flex flex-col gap-12">
        <h2 className="text-6xl tracking-wider font-mono">
          Dove? Proprio qui!
        </h2>
        <p className="text-3xl">Via Olcianico 3, Lierna</p>
        <OpenStreetMap />
      </div>
    </section>
  );
}

function Feature({
  title,
  description = "",
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="bg-white text-center rounded-xl p-6 pt-10 text-accent aspect-square w-56 flex flex-col items-center justify-start">
      <h3 className="text-6xl font-mono mb-4">{title}</h3>
      {description.length > 0 && (
        <p className="text-3xl font-normal">{description}</p>
      )}
    </div>
  );
}

function Contact({ name, number }: { name: string; number: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <h3 className="text-3xl text-dark text-center uppercase">{name}</h3>
      <p className="text-accent text-center">{number}</p>
    </div>
  );
}

function CallIcon() {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 109 109"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8" clipPath="url(#clip0_10_19)">
        <path
          d="M98.3535 93.7907C98.3535 93.7907 98.3535 93.2837 98.1 93.0302C98.1 93.0302 97.8465 92.5233 97.593 92.5233C96.0721 91.0023 93.7907 91.0023 92.2698 92.5233C92.2698 92.5233 92.0163 92.7768 91.7628 93.0302C91.7628 93.0302 91.7628 93.5372 91.5093 93.7907C91.5093 93.7907 91.5093 94.2977 91.5093 94.5512C91.5093 94.5512 91.5093 95.0581 91.5093 95.3116C91.5093 96.3256 92.0163 97.3395 92.5233 98.1C93.2837 98.8605 94.2977 99.114 95.3116 99.114C96.3256 99.114 97.3395 98.607 98.1 98.1C98.8605 97.3395 99.114 96.3256 99.114 95.3116C99.114 95.3116 99.114 94.8047 99.114 94.5512C99.114 94.5512 99.114 94.0442 99.114 93.7907H98.3535Z"
          fill="#3C3A3B"
        />
        <path
          d="M107.986 82.1303L83.6512 57.7954C82.1302 56.2744 79.8488 56.2744 78.3279 57.7954L68.1884 67.9349C66.4139 69.7093 63.3721 69.7093 61.3442 67.9349L41.0651 47.6558C39.2907 45.8814 39.2907 42.8396 41.0651 40.8117L51.2047 30.6721C52.7256 29.1512 52.7256 26.8698 51.2047 25.3489L26.8698 1.01399C25.3488 -0.506942 23.0674 -0.506942 21.5465 1.01399L11.407 11.1535C-3.54884 26.1093 -3.54884 50.1907 11.407 64.8931L44.107 97.5931C54.2465 107.733 69.4558 111.281 83.1442 106.719C85.1721 105.958 86.1861 103.93 85.4256 101.902C84.6651 99.8745 82.6372 98.8605 80.6093 99.621C69.7093 103.17 57.5419 100.381 49.4302 92.2698L16.7302 59.5698C4.81627 47.6558 4.81627 28.3907 16.7302 16.4768L24.3349 8.87213L43.3465 27.8838L35.9953 35.2349C31.1791 40.0512 31.1791 47.9093 35.9953 52.7256L56.2744 73.0047C61.0907 77.821 68.9488 77.821 73.7651 73.0047L81.1163 65.6535L102.663 87.2C104.184 88.721 106.465 88.721 107.986 87.2C109.507 85.6791 109.507 83.3977 107.986 81.8768V82.1303Z"
          fill="#3C3A3B"
        />
      </g>
      <defs>
        <clipPath id="clip0_10_19">
          <rect width="109" height="109" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function BubbleIcon() {
  return (
    <svg
      width="70"
      height="72"
      viewBox="0 0 109 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.8"
        d="M108.747 106.429L102.17 80.1598C101.664 78.0994 99.6397 76.8117 97.6159 77.3268C95.5921 77.8419 94.3272 79.9023 94.8331 81.9626L99.8927 102.051L80.1603 96.9003C79.1484 96.9003 78.1365 96.9003 77.3775 97.1578C55.8742 109.52 28.5524 102.566 15.1445 81.19C5.78423 66.5099 5.27827 47.9666 13.6266 32.7714C21.469 17.8337 37.4067 8.04696 54.3564 8.3045C78.3894 8.3045 98.6278 26.8478 100.905 51.3147C100.905 53.375 102.928 54.9203 104.952 54.9203C106.976 54.9203 108.494 52.8599 108.494 50.7996C105.964 22.212 82.4371 0.578125 54.3564 0.578125C34.6239 0.578125 16.1564 11.6526 6.79615 29.4233C-2.81709 47.1939 -2.31113 68.8278 8.81999 85.8258C23.9988 110.035 54.8623 118.277 79.9073 104.884L104.446 111.065C106.47 111.58 108.494 110.293 109 108.232C109 107.717 109 106.945 109 106.429H108.747Z"
        fill="#3C3A3B"
      />
    </svg>
  );
}
