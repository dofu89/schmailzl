import React from 'react'
import Gallery from '../pages/Gallery'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home'>
        <h1>Willkommen auf unserer Homepage</h1>
        <p id='unterTitel'>
          Wir sind Ihr Partner wenn es darum geht, Pflege zu Hause professionell
          durchzuführen.
          <br /> Unser Konzept sind die Sinne des Menschen: Die Funktionalität
          dieser trennen häufig "Kranke" und "Gesunde"...
          <br /> ...wir denken: das Ausgleichen durch modernste Pflegetechniken
          ermöglicht es auch "Kranken", "gesund" zu leben.
        </p>
        <div className='gallery'>
          <Gallery />
        </div>
        <hr />
        <h1>Entdecken Sie unsere Stärken</h1>

        <section className='home-grid'>
          <div style={{ background: 'rgba(76, 128, 185,1)' }}>
            <h1>Schnelles Zusammenfinden</h1>
            <p>
              Ein (neuer) Pflegedienst bedeutet, mit neuen Leuten zutun zu
              haben. Unsere Mitarbeiter sind bemüht, ein gutes Verhältnis
              aufzubauen - nur so funktioniert die Pflege zielführend.
            </p>
          </div>
          <div>
            <h1>Know-how</h1>
            <p>
              Ein (neuer) Pflegedienst bedeutet, mit neuen Leuten zutun zu
              haben. Unsere Mitarbeiter sind bemüht, ein gutes Verhältnis
              aufzubauen - nur so funktioniert die Pflege zielführend.
            </p>
          </div>
          <div>
            <h1>Einstellung</h1>
            <p>
              Ein (neuer) Pflegedienst bedeutet, mit neuen Leuten zutun zu
              haben. Unsere Mitarbeiter sind bemüht, ein gutes Verhältnis
              aufzubauen - nur so funktioniert die Pflege zielführend.
            </p>
          </div>
          <div style={{ background: 'rgba(76, 128, 185,1)' }}>
            <h1>Nutzen von Ressourcen</h1>
            <p>
              Ein (neuer) Pflegedienst bedeutet, mit neuen Leuten zutun zu
              haben. Unsere Mitarbeiter sind bemüht, ein gutes Verhältnis
              aufzubauen - nur so funktioniert die Pflege zielführend.
            </p>
          </div>
        </section>
        <hr className='hr' />
      </div>
    </div>
  )
}

export default Home
