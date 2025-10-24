import React from "react";
import { motion } from "framer-motion";
export default function BodySyncLanding() {
  return (
    <div className="bg-gray-50 text-gray-900 font-orbitron">
      <section
        className="relative min-h-screen flex flex-col justify-center items-center text-white text-center px-6"
        style={{backgroundImage:"linear-gradient(to bottom right, rgba(30,58,138,0.75), rgba(16,185,129,0.65)), url('/hero.jpg')",backgroundSize:"cover",backgroundPosition:"center"}}
      >
        <motion.h1 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:1}} className="text-5xl font-bold mb-4 drop-shadow-lg">BodySync AI</motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.25,duration:1}} className="text-xl md:text-2xl mb-3 drop-shadow">
          Allena il corpo. <span className="font-semibold">The more you train, the less you pay.</span>
        </motion.p>
        <p className="text-lg italic mb-8 opacity-95 drop-shadow">“Rendere la costanza un valore misurabile e premiato.”</p>
        <motion.a href="#concept" whileHover={{scale:1.05}} className="bg-white text-primary px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100">Scopri il concetto Train-to-Save</motion.a>
      </section>
      <section id="concept" className="py-20 px-6 md:px-20 text-center bg-white">
        <h2 className="text-3xl font-bold text-primary mb-6">Il modello Train-to-Save™</h2>
        <p className="max-w-3xl mx-auto text-lg mb-10">BodySync AI trasforma la costanza in un vantaggio reale. Ogni settimana ottieni punti che si trasformano in crediti sull’abbonamento.</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
          {[
            { t: "Allenati", c: "accent", d: "Completa le attività settimanali e mantieni la costanza." },
            { t: "Guadagna Punti", c: "primary", d: "Ogni azione sana ti assegna punti che riducono il prezzo." },
            { t: "Paga Meno", c: "accent", d: "Più sei costante, meno paghi. Premiamo la tua disciplina." },
          ].map((x,i)=>(
            <motion.div key={i} whileHover={{scale:1.05}} className="bg-gray-50 shadow-lg rounded-2xl p-8 w-80 border border-gray-200">
              <h3 className={`text-${x.c}-500 font-bold text-xl mb-2`}>{x.t}</h3><p>{x.d}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-20 bg-gradient-to-t from-blue-50 to-green-50 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-primary mb-10">Perché scegliere BodySync AI</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[["Motivazione continua","Ogni progresso viene premiato, rendendo la costanza naturale."],["Trasparenza","Visualizza i tuoi progressi e quanto stai risparmiando."],["Community","Unisciti a chi condivide il tuo obiettivo di benessere."]].map(([t,d],i)=>(
            <div key={i} className="p-6 bg-white shadow-md rounded-xl border border-gray-200"><h3 className="text-accent font-bold mb-2">{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </section>
      <section id="signup" className="py-24 text-center bg-primary text-white px-6">
        <h2 className="text-3xl font-bold mb-6">Entra nella lista d’attesa</h2>
        <p className="mb-8 text-lg">Ricevi in anteprima l’accesso a BodySync AI e alle offerte lancio.</p>
        <form action="https://mailchimp-placeholder-url.com" method="post" target="_blank" className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
          <input type="email" name="EMAIL" required placeholder="Inserisci la tua email" className="px-4 py-3 rounded-full text-gray-900 w-full md:w-2/3 focus:outline-none"/>
          <button type="submit" className="bg-accent hover:bg-green-400 text-white px-6 py-3 rounded-full font-semibold">Iscriviti</button>
        </form>
      </section>
      <footer className="py-8 text-center text-sm bg-gray-900 text-gray-300">
        <p>Ideato da <strong>Matteo Bovo</strong></p>
        <p>📩 matteobovo86@gmail.com | 📱 347 234 4499</p>
      </footer>
    </div>
  );
}
