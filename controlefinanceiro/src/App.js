import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWord';

function sum(a, b) {
  return a + b
}

const url = 'https://via.placeholder.com/150'

return (
  <div className="App">
    <h2>Alterando o JSK</h2>
    <p>Olá, {newName}</p>
    <p>Soma: {sum(1,2)}</p>
    <img src={url} alt='Minha imagem'/>
    <HelloWord/>
  </div>
);

export default App;
