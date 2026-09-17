import { useRef, useState } from "react";
import "./App.css";

import cover from "./assets/cover.jpg";
import p1 from "./assets/p1.jpg";
import p2 from "./assets/p2.jpg";
import p3 from "./assets/p3.jpg";
import p4 from "./assets/p4.jpg";
import p5 from "./assets/p5.jpg";
import p6 from "./assets/p6.jpg";
import p7 from "./assets/p7.jpg";
import p8 from "./assets/p8.jpg";
import p9 from "./assets/p9.jpg";

import song from "./assets/song.mp3";
import ourVideo from "./assets/ourvideo.mp4";

export default function App() {
  const [page, setPage] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const next = () => setPage((p) => Math.min(p + 1, 8));
  const prev = () => setPage((p) => Math.max(p - 1, 0));

  const toggleMusic = () => {
    if (!playing) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  const scrapbook = [
    {
      title: "You & Me 🤍",
      photos: [p1, p2],
      labels: ["My Happy Place", "The Cutest Girl Ever"],
      note: "Every picture of you somehow becomes my favourite picture."
    },
    {
      title: "My Favourite Human 🌷",
      photos: [p3, p4],
      labels: ["Your Beautiful Smile", "My Favourite Human"],
      note: "I could stare at you forever and still never get enough."
    },
    {
      title: "Just Us ☁️",
      photos: [p5, p6],
      labels: ["Chaos Together", "Forever My Date"],
      note: "The best moments are always the ones spent with you."
    },
    {
      title: "My Safe Place 🧸",
      photos: [p7, p8],
      labels: ["My Person", "So So Pretty"],
      note: "Home isn't a place anymore. It's wherever you are."
    }
  ];

  return (
    <div className="app">
      <audio ref={audioRef} src={song} loop />

      <div className="topBar">
        <h3>📖 Our Pookie Diary</h3>

        <button className="musicBtn" onClick={toggleMusic}>
          {playing ? "⏸" : "🎵"}
        </button>
      </div>

      <div className="book">

        {/* PAGE 1 COVER */}

        {page === 0 && (
          <div className="page cover">
            <div className="heartFrame">
              <img src={cover} alt="" />
            </div>

            <h1>Our Pookie Diary</h1>
            <h2>Agarwal Sahab ♡ Aayu</h2>

            <p className="coverText">
              A collection of my favourite memories with my favourite person.
            </p>

            <div className="days">
              ✨ 365 DAYS & MORE TO COME ✨
            </div>

            <button onClick={next}>Open Diary</button>
          </div>
        )}

        {/* PAGE 2-5 */}

        {page >= 1 && page <= 4 && (
          <div className="page scrapbook">
            <h1>{scrapbook[page - 1].title}</h1>

            <div className="photoGrid">
              {scrapbook[page - 1].photos.map((img, i) => (
                <div
                  key={i}
                  className={`polaroid ${
                    page === 2 ? (i === 0 ? "lift" : "lift2") : ""
                  }`}
                >
                  <img src={img} alt="" />

                  <div className="label">
                    {scrapbook[page - 1].labels[i]}
                  </div>
                </div>
              ))}
            </div>

            <div className="stickyNote">
              {scrapbook[page - 1].note}
            </div>
          </div>
        )}

        {/* PAGE 6 */}

        {page === 5 && (
          <div className="page scrapbook">
            <h1>Because I Love You 💕</h1>

            <div className="singlePhoto">
              <div className="polaroid large">
                <img src={p9} alt="" />
                <div className="label">My Whole Heart ❤️</div>
              </div>
            </div>

            <div className="stickyNote">
              If I had to choose one picture that describes my happiness, it'd
              always be you.
            </div>
          </div>
        )}

        {/* PAGE 7 VIDEO */}

        {page === 6 && (
          <div className="page videoPage">
            <h1>Our Little Movie 🎥</h1>

            <div className="videoWrapper">
              <video controls>
                <source src={ourVideo} type="video/mp4" />
              </video>
            </div>

            <div className="stickyNote">
              Every love story deserves its own movie. Ours has only just begun.
            </div>
          </div>
        )}

        {/* PAGE 8 LETTER */}

        {page === 7 && (
          <div className="page letterPage">
            <div className="letterPaper">
              <h1>Happy One Year Anniversary To Us 💌</h1>

              <p>My dearest Aayu,</p>

              <p>
                Happy One Year to us, my cutie, my better half. ❤️ I genuinely
                don't think I'll ever find someone better than you because you
                already are everything I've ever wished for in a partner.
              </p>

              <p>
                The way you protect me from the whole world, lovingly shout at
                me, fight with me over the smallest things, and still make me
                feel so deeply loved only makes me fall in love with you more
                every single day.
              </p>

              <p>
                Every time you call me <b>"Agarwal Sahab"</b> or{" "}
                <b>"Khushii"</b>, my heart smiles. Those little names have become
                my favourite sound in the world.
              </p>

              <p>
                Your beautiful smile, your cute little expressions, and the way
                you quietly gaze at me make me lose myself every single time. I
                truly wish you could see yourself through my eyes because then
                you'd know how breathtakingly beautiful you are.
              </p>

              <p>
                Thank you for respecting me, my parents, my family and my
                friends. You have the purest heart, and I know one day you'll
                become the most wonderful wife and the greatest blessing in my
                life.
              </p>

              <div className="quote">
                <h3>365 Days of Us ✨</h3>
                <p>365 days of smiles.</p>
                <p>365 days of laughter.</p>
                <p>365 days of love.</p>
                <p>365 days of choosing each other.</p>
              </div>

              <p>
                Here's to thousands more beautiful days, more cuddles, more silly
                fights, more hugs, more adventures, and a lifetime of choosing
                each other.
              </p>

              <h2 className="love">
                I LOVE YOU AAYU 🤍
              </h2>

              <div className="sign">
                Forever Yours,
                <br />
                Agarwal Sahab
              </div>
            </div>
          </div>
        )}

        {/* PAGE 9 CALENDAR */}

        {page === 8 && (
          <div className="page calendarPage">
            <h1>Pookie Calendar 📅</h1>
            <h3>September 2025</h3>

            <div className="calendar">
              {["M","T","W","T","F","S","S"].map((d) => (
                <div className="head" key={d}>{d}</div>
              ))}

              <div></div>

              {Array.from({ length: 30 }, (_, i) => {
                const day = i + 1;
                const special = [19,20,26,29].includes(day);

                return (
                  <div
                    key={day}
                    className={special ? "day special" : "day"}
                  >
                    {day}
                    {day === 19 && <small>🌙</small>}
                    {day === 20 && <small>❤️</small>}
                    {day === 26 && <small>💌</small>}
                    {day === 29 && <small>⭐</small>}
                  </div>
                );
              })}
            </div>

            <div className="october">
              <h3>October</h3>

              <div className="octRow">
                <div className="day">1</div>
                <div className="day">2</div>
                <div className="day special">
                  3 💋
                </div>
              </div>
            </div>

            <div className="legend">
              <h2>Happy 1st Anniversary To Us ❤️</h2>

              <p>🌙 19 Sept • The night everything began</p>
              <p>❤️ 20 Sept • Officially us</p>
              <p>💌 26 Sept • Our first love letter</p>
              <p>⭐ 29 Sept • Endless late-night talks</p>
              <p>💋 3 Oct • Our unforgettable first kiss</p>

              <h3>Forever & Always ✨</h3>
            </div>
          </div>
        )}

        {/* NAV */}

        <div className="nav">
          <button onClick={prev} disabled={page === 0}>
            ← Previous
          </button>

          <span>{page + 1} / 9</span>

          <button onClick={next} disabled={page === 8}>
            Next →
          </button>
        </div>

      </div>
    </div>
  );
}