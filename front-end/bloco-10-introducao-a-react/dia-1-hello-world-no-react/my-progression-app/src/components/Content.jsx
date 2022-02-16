import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido',
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei',
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei',
  },
];
class Content extends React.Component {
  render() {
    return (
      <section>
        {conteudos.map((content) => {
          const { conteudo, bloco, status } = content;
          return (
            <div className='card-content'>
              <h2> O conteúdo é: {conteudo}</h2>
              <h4> Status: {status}</h4>
              <p> Bloco: {bloco}</p>
            </div>
          );
        })}
      </section>
    );
  }
}

export default Content;
