import React, { useEffect } from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'

const Leistungen = () => {
  useEffect(() => {
    aos.init({
      duration: 2000,
    })
  }, [])

  return (
    <div className='leistungen'>
      <div className='leistungen-container'>
        <h1 data-aos='fade-in'>Unsere Leistungen</h1>
        <h2 data-aos='fade-in'>Professionelle, hochwertige Pflege zu Hause</h2>
        <div className='leistungen-grid'>
          <div data-aos='fade-in' className='leistungen-1'>
            <hr />
            <h1>Sachleistungen</h1>
            <hr />

            <p>
              Wenn sich Pflegebedürftige durch einen ambulanten Pflegedienst,
              also uns, pflegen und betreuen lassen können sie
              (Pflege-)Sachleistungen beanspruchen. Die Abrechnung nehmen wir
              direkt mit der Pflegekasse vor. Hier werden Leistungen übernommen,
              wessen Höhe sich an Ihrem jeweiligen Pflegegrad richtet.{' '}
            </p>
          </div>
          <div data-aos='fade-in' className='leistungen-2'>
            <hr />
            <h1>Kurzzeitpflege</h1>
            <hr />
            <p>
              Nach z.B. Klinikaufenthalten kann die Pflege von pflegebedürftigen
              Personen erschwert sein. Für diesen Fall stehen Ihnen als
              Pflegebedürftigen pro Jahr 1.612€ für bis zu 8 Wochen zu, für
              welche Sie Leistungen bei uns erhalten können. Bei Nichtnutzung
              der Verhinderungspflege erhöhen sich die jährlichen Zuschüsse auf
              bis zu 3.224€ für bis zu 56 Tage.
            </p>
          </div>
          <div data-aos='fade-in' className='leistungen-3'>
            <hr />
            <h1>Tages- und Nachtpflege</h1>
            <hr />
            <p>
              Für Tages- und Nachtpflege können wir Ihnen als Pflegebedürftigen
              ab Pflegegrad 2 Leistungen je nach Pflegegrad bieten.
            </p>
          </div>
          <div data-aos='fade-in' className='leistungen-4'>
            <hr />
            <h1>Verhinderungspflege</h1>
            <hr />
            <p>
              Pflegende Angehörige haben eine große Aufgabe zu bewältigen,
              welche durch Urlaubspläne oder Krankheit erschwert sein können.
              Hierfür gewährt die Pflegekasse Zuschüsse für die
              Verhinderungspflege, welche wir Ihnen bieten können. Hier können
              bis zu 1.612€ für bis zu sechs Wochen verwendet werden. Bei
              Nichtnutzung von Kurzzeitpflege steigt der Anspruch auf bis zu
              2.412€ für bis zu 42 Tage im Jahr.
            </p>
          </div>
          <div data-aos='fade-in' className='leistungen-5'>
            <hr />
            <h1>Kurzzeitpflege</h1>
            <hr />
            <p>
              Nach z.B. Klinikaufenthalten kann die Pflege von pflegebedürftigen
              Personen erschwert sein. Für diesen Fall stehen Ihnen als
              Pflegebedürftigen pro Jahr 1.612€ für bis zu 8 Wochen zu, für
              welche Sie Leistungen bei uns erhalten können. Bei Nichtnutzung
              der Verhinderungspflege erhöhen sich die jährlichen Zuschüsse auf
              bis zu 3.224€ für bis zu 56 Tage.
            </p>
          </div>
          <div data-aos='fade-in' className='leistungen-6'>
            <hr />
            <h1>Wundversorgung / Wundmanagement</h1>
            <hr />
            <p>
              Im Alter, aber auch nach Krankenhausaufenthalten braucht man
              häufig eine professionelle Wundversorgung - ob es nun
              Hautschädigungen, Wunden nach OPs oder andere sind. Diese bieten
              wir Ihnen zuverlässig und sicher mit dem nötigen "Know-How", um
              die Wundheilung optimal nach den neuesten Standards zu
              unterstützen.
            </p>
          </div>
          <div data-aos='fade-in' className='leistungen-7'>
            <hr />
            <h1>Zusätzliche Betreuungs-/Entlastungsleistungen</h1>
            <hr />
            <p>
              Falls Sie als Pflegebedürftiger Ihren monatlichen Anspruch (in
              Bezug auf den gegebenen Pflegegrad) auf Pflegesachleistungen nicht
              ausgeschöpft haben, können Sie bis zu 40 Prozent des Anspruchs auf
              Pflegesachleistungen alternativ für Betreuungs- und
              Entlastungsleistungen gemäß SGB XI ausgeben. Hier wären zum
              Beispiel haushaltsnahe Dienstleistungen, Alltagsbegleitung o.a.
              möglich. Die Voraussetzung hierfür ist, dass diese Leistungen von
              der Pflegekasse zugelassen sind. Dies sollten Sie im Vorfeld
              überprüfen. Gerne beraten wir Sie diesbezüglich.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Leistungen
