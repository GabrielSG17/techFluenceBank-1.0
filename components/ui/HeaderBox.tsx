import React from 'react'

const HeaderBox = ({ tipo = "titulo", titulo, subTitulo, usuario }: HeaderBoxPropriedades) => {
  return (
    <div className="header-box">
      <h1 className='header-box-title'>
        {titulo}
        {tipo === "cumprimento" && (
          <span className="text-bankGradient">
            &nbsp;{usuario}
          </span>
        )}
      </h1>
      <p className='header-box-subtext'>{subTitulo}</p>
    </div>
  )
}

export default HeaderBox
