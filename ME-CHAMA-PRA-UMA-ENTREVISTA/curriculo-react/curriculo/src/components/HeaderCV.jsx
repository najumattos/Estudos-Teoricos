import React from 'react'
import './Style.css';

const HeaderCV = ({ profile, redeSocial }) => {
  return (
    <article className="profile-container">
      
      <section className='nome-foto'>
      <figure className="avatar-wrapper">
          <img
            src={`/img/${profile.img}`}
            alt={`Foto de ${profile.nome}`}
            className="profile-image"
          />
        </figure>

        <div className="profile-info">
          <h1 className="profile-name">{profile.nome}</h1>
          <p className="profile-description">
            {profile.titulo}
          </p>
        </div>
        </section>


   
      <nav className="profile-nav">
          <a href={`mailto:${redeSocial.emailPrincipal}`} className="nav-link">
            {redeSocial.emailPrincipal}
          </a>
          <a href={redeSocial.emailSecundario} className="nav-link">
            {redeSocial.emailSecundario}
          </a>
          <a href={`https://${redeSocial.github}`} target="_blank" rel="noopener noreferrer" className="nav-link">
           {redeSocial.github}
          </a>
          <a href={`https://${redeSocial.linkedin}`} target="_blank" rel="noopener noreferrer" className="nav-link">
            {redeSocial.linkedin}
          </a>
        </nav>
        <p className="descricao">{profile.descricao}</p>
    </article>
  )
}

export default HeaderCV