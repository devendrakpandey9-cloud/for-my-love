"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [step, setStep] = useState(1);
  const [showFinal, setShowFinal] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  const [hearts, setHearts] = useState<any[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 40 }).map(() => ({
      left: Math.random() * 100,
      duration: 10 + Math.random() * 15,
      size: 14 + Math.random() * 16,
    }));
    setHearts(generated);
  }, []);

  const next = () => {
    if (!musicStarted) {
      const audio = document.getElementById("bgMusic") as HTMLAudioElement;
      audio?.play().catch(() => {});
      setMusicStarted(true);
    }
    setStep((prev) => prev + 1);
  };

  return (
    <main className="main">
      <div className="stars"></div>

      <div className="hearts">
        {hearts.map((h, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: `${h.left}%`,
              animationDuration: `${h.duration}s`,
              fontSize: `${h.size}px`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      <audio id="bgMusic" src="/memories/music.mp3" loop />

      {/* STEP 1 */}
      {step === 1 && (
        <section className="section">
          <h1>For Wo Ladki Jiska Naam Mai Nahi Leta ❤️ AJI Sunti Ho </h1>
          <p>I built something for you…</p>
          <p>But you have to click to see it.</p>
          <button onClick={next}>✨ Click Next</button>
        </section>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <section className="section">
          <p>
            From the day 2 March 2024 — the day we got married — till today,
            you were mine.
          </p>
          <p><i>jo bhi ho… we will see it together.</i></p>
          <p>
            I know there are times when I make you sad.
            I know there are times when I make you angry.
            But you handled everything with more grace than I deserved.
          </p>
          <p>
            Thank you for staying.
            Thank you for choosing “us” every single time.
          </p>
          <button onClick={next}>💖 Continue</button>
        </section>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <section className="section">
          <p>On this day, I raise a toast…</p>
          <p>To your smile.</p>
          <p>To your faith.</p>
          <p>To your confidence.</p>
          <p>To your everything.</p>
          <p>Thank you for bearing me.</p>
          <p>Thank you for loving me.</p>
          <h2>Tum meri life ka sabse best decision ho.</h2>
          <button onClick={next}>❤️ One Last Thing</button>
        </section>
      )}

     {/* STEP 4 */}
{step === 4 && (
  <section className="section">
    <p>There will be busy days.</p>
    <p>There will be hard days.</p>
    <p>There will be days we don’t fully understand each other.</p>

    <p>But through all of it —</p>

    <p>You remain my strength.</p>
    <p>My peace.</p>
    <p>My person.</p>

    <p>And I promise —</p>
    <p>to show up.</p>
    <p>To listen.</p>
    <p>To grow.</p>
    <p>To stand beside you in everything.</p>

    <p>Not perfectly.</p>
    <p>But honestly.</p>
    <p>And always.</p>

    <p>You are my safest place.</p>
    <p>My forever.</p>

    <button onClick={next}>📸 See Our Memories</button>
  </section>
)}
      {/* STEP 5 — MEMORIES IN YOUR EXACT ORDER */}
      {step === 5 && !showFinal && (
        <section className="section memories">
          <h2>Our Beautiful Firsts ❤️</h2>

          {[
            {
              img: "roka.jpeg",
              title: "💍 Roka",
              text: `The day everything became official.
The day our families said “yes”…
and I silently said,
“Boss, life set ho gayi.”

I didn’t look nervous.
(Inside? Full tension.)
But seeing you smile — I knew I was safe.`
            },
            {
              img: "shadi-1.jpeg",
              title: "💒 Wedding Day – 2 March 2024",
              text: `The day you became my forever.
So many rituals. So many people.

But in that whole chaos…
I was just looking at you thinking,
“Okay… this is real now.”

And honestly?
Best decision of my life.`
            },
            {
              img: "first-cake-cutting.jpeg",
              title: "🎂 First Cake Cutting (Full Extended Family 😄)",
              text: `Our first cake cutting —
not alone…
not romantic…
but in front of full extended family.

Zero privacy.
100% happiness.

And somehow…
it felt perfect.`
            },
            {
              img: "first-pooja.jpeg",
              title: "🛕 First Pooja — Mandir, Lucknow",
              text: `Our first pooja together
at the Mandir in Lucknow.

Standing next to you…
praying together…

It felt peaceful.
Like life was aligning properly.`
            },
            {
              img: "first-holi.jpeg",
              title: "🌈 First Holi",
              text: `First colors together.

I don’t know what was brighter —
the gulaal on your face
or your smile.

Since then… life has been colorful.`
            },
            {
              img: "first-diwali.jpeg",
              title: "🪔 First Diwali",
              text: `Our first Diwali as husband and wife.

Diyas were glowing…
but not as much as you.

(Yes, I’m allowed to be filmy sometimes.)`
            },
            {
              img: "first-trip.jpeg",
              title: "✈️ First Trip",
              text: `First trip together.

New city.
Same person who steals my hoodie.

I realized something —
I don’t need luxury trips.
I just need you next to me.`
            },
            {
              img: "first-winter.jpeg",
              title: "❄️ First Winter",
              text: `Cold weather outside.
Warm arguments inside.

But somehow…
even the fights feel safe with you.`
            },
            {
              img: "new-year-2026.jpeg",
              title: "🎆 New Year 2026",
              text: `New year.
New goals.
Same partner in crime.

Every year with you feels like a level up.`
            },
            {
              img: "recent-trip-2025.jpeg",
              title: "🌍 Recent Trip 2025",
              text: `More memories.
More laughter.
More photos where I look serious
and you look cute.

And honestly…
I wouldn’t trade this life for anything.`
            }
          ].map((memory, i) => (
            <div key={i} className="memoryCard">
              <img src={`/memories/${memory.img}`} />
              <div className="memoryText">
                <h3>{memory.title}</h3>
                <p style={{ whiteSpace: "pre-line" }}>{memory.text}</p>
              </div>
            </div>
          ))}

          <button onClick={() => setShowFinal(true)}>✨ Click Here</button>
        </section>
      )}

      {/* FINAL REVEAL */}
      {showFinal && (
        <section className="section final">
          <div className="fireworks">
            {Array.from({ length: 120 }).map((_, i) => (
              <span key={i} className="spark" />
            ))}
          </div>

          <img src="/memories/anniversary.jpeg" className="finalImg" />
          <h1>Happy Anniversary, My Patni Ji ❤️</h1>
          <p>Many more adventures.</p>
          <p>Many more fights.</p>
          <p>Many more celebrations.</p>
          <p>Many more years of us.</p>
        </section>
      )}
    </main>
  );
}