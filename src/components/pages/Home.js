import React, { useEffect } from 'react'
import Gallery from '../pages/Gallery'
import aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    aos.init({
      duration: 2000,
    })
  }, [])

  return (
    <div className='home-container'>
      <div className='home'>
        <h1 data-aos='fade-in'>Willkommen auf unserer Homepage</h1>
        <p data-aos='fade-in' id='unterTitel'>
          Wir sind Ihr Partner wenn es darum geht, Pflege zu Hause professionell
          durchzuführen.
          <br /> Unser Konzept sind die Sinne des Menschen: Die Funktionalität
          dieser trennen häufig "Kranke" und "Gesunde"...
          <br /> ...wir denken: das Ausgleichen durch modernste Pflegetechniken
          ermöglicht es auch "Kranken", "gesund" zu leben.
        </p>
        <hr className='hr' />
        <div className='gallery'>
          <Gallery />
        </div>
        <hr />
        <h1 data-aos='fade-in'>Entdecken Sie unsere Stärken</h1>
        <section className='home-grid'>
          <div
            style={{ background: 'rgba(76, 128, 185,1)' }}
            data-aos='fade-in'
          >
            <h1>Schnelles Zusammenfinden</h1>
            <p>
              Ein (neuer) Pflegedienst bedeutet, mit neuen Leuten zutun zu
              haben. Unsere Mitarbeiter sind bemüht, ein gutes Verhältnis
              aufzubauen - nur so funktioniert die Pflege zielführend.
            </p>
          </div>
          <div data-aos='fade-in'>
            <h1>Know-how</h1>
            <p>
              Ein (neuer) Pflegedienst bedeutet, mit neuen Leuten zutun zu
              haben. Unsere Mitarbeiter sind bemüht, ein gutes Verhältnis
              aufzubauen - nur so funktioniert die Pflege zielführend.
            </p>
          </div>
          <div data-aos='fade-in'>
            <h1>Einstellung</h1>
            <p>
              Ein (neuer) Pflegedienst bedeutet, mit neuen Leuten zutun zu
              haben. Unsere Mitarbeiter sind bemüht, ein gutes Verhältnis
              aufzubauen - nur so funktioniert die Pflege zielführend.
            </p>
          </div>
          <div
            style={{ background: 'rgba(76, 128, 185,1)' }}
            data-aos='fade-in'
          >
            <h1>Nutzen von Ressourcen</h1>
            <p>
              Ein (neuer) Pflegedienst bedeutet, mit neuen Leuten zutun zu
              haben. Unsere Mitarbeiter sind bemüht, ein gutes Verhältnis
              aufzubauen - nur so funktioniert die Pflege zielführend.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
