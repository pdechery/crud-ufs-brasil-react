import React from 'react'

function EstadosForm(props){
  return (
    <form action="" className="pure-form pure-form-stacked" onSubmit={props.submitForm} >
        <label htmlFor="stacked-nome">Nome</label>
        <input type="text" name="nome" value={props.nome} minLength="4" maxLength="20" onChange={props.handleInputChange} />
        <label htmlFor="stacked-sigla">Sigla</label>
        <input type="text" name="sigla" value={props.sigla} minLength="2" maxLength="2" onChange={props.handleInputChange} />
        <button type="submit" className="pure-button button-submit">Salvar</button>&nbsp;&nbsp;
        <button type="button" onClick={props.ClearFields} className="pure-button">Cancelar</button>
    </form>
  )
}

export default EstadosForm;