import './About.css'

export default function About() {
  return (
    <div className="about container">
      <div className="about-content">
        <div className="about-text">
          <h2>O mnie</h2>
          
          <p>
            Aktualnie jestem studentką 2 roku studiów magisterskich na Uniwersytecie Kazimierza Wielkiego w Bydgoszczy na kierunku Badanie i Projektowanie Gier.
          </p>

          <p>
            Poza tym realizuję projekty graficzne dla klientów z zakresu 3D, brandingu oraz marketingu i ciągle staram się poszerzać moją wiedzę branżową.
          </p>

          <p>
            Dodatkowo jestem aktywnym Content Creatorem na platformie YouTube, gdzie zajmuję się montażem filmów, opracowywaniem miniaturek oraz strategii marketingowych. Więcej poniżej...
          </p>

          <p>
            Opisałabym siebie jako typ zadaniowca. Osobę, która podejmie wszelkich starań aby ukończyć powierzone zadanie w sposób zadowalający i znaleźć rozwiązania na każdy problem.
          </p>

          <div className="about-highlights">
            <div className="highlight-box">
              <span className="highlight-number">6+</span>
              <span className="highlight-label">Wymasterowanych Programów</span>
            </div>
            <div className="highlight-box">
              <span className="highlight-number">10+</span>
              <span className="highlight-label">Ukończonych Projektów</span>
            </div>
            <div className="highlight-box">
              <span className="highlight-number">4</span>
              <span className="highlight-label">Kreatywne Dyscypliny</span>
            </div>
          </div>
        </div>

        <div className="about-visual">
          <div className="about-image-placeholder">
            <span>Zdjęcie</span>
          </div>
        </div>
      </div>
    </div>
  )
}