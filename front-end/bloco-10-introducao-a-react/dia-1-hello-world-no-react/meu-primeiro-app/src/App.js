import './App.css';

const Task = (value) => {
  return <li>{value}</li>;
};

function App() {
  const tasks = [
    'Verificar email',
    'Ver a agenda do dia',
    'Estudar o conteudo',
    'Ir para aula ao vivo',
    'Fazer os exercicios',
  ];
  return <ul>{tasks.map((item) => Task(item))}</ul>;
}

export default App;
