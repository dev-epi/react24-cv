import React from 'react'

export default function Profil() {
  return (
    <div className="header">
    <h1>Pierre <span className="text-blue text-uppercase">Gomba</span></h1>
    <p>Freelance Front-end Developer</p>
    <ul className="infos">
      <li><i className="icon fas fa-at text-blue"></i> <a href="mailto:contact@pgomba.com">contact@pgomba.com</a></li>
      <li><i className="icon fas fa-phone text-blue"></i> 04 75 53 80 50</li>
      <li><i className="icon fas fa-map-marker-alt text-blue"></i> Boulevard de la Constitution 31, 4020 Liège</li>
    </ul>
  </div>
  )
}
