import './App.css';
import Calculator from './components/Calculator';
function App() {
  return (
    <>
      <h1 style={{textAlign:'center'}}>React Calculator</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Calculator />
      </div>
    </>

  );
}

export default App;
