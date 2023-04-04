import logo from './logo.svg';
import './App.css';
import Calculatrice from './components/calculatrice/Calculatrice.js';
// import ExempleComposant from './components/3-composants/ExempleComposant';
// import Bienvenue from './components/3-composants/Bienvenue';
import Parent from './components/4-communication-inter-composant/Parent';


function App() {
  return (
    // <Bienvenue/>   
    // <ExempleComposant/>
    // <Calculatrice/> 
    <Parent></Parent> 
  );
}

export default App;
