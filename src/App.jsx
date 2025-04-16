import './index.css'; // Substitua './App.css' pelo caminho correto se necessário
import Option from './componens/Option';
import Title from './componens/Title';

function App() {
  return (
    <div className="list-container">
      {/* <Title /> */}
      <ul className="option-list">
        <Option fruta="Banana" valor="00" />
        <Option fruta="Maça" />
        <Option fruta="Uva" />
      </ul>
    </div>
  );
}

export default App;