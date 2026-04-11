import React from 'react'

const SectionCV = ({itens}) => {
  return (
    <section className="section-cv">
          <div className="section-content">
        {itens.map((item, index) => (
          <div key={index} className="cv-item">
            <div className="cv-item-header">
              <h3 className="item-titulo">{item.titulo}</h3>
              <span className="item-periodo">{item.periodo}</span>
            </div>
            <p className="item-descricao">{item.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SectionCV