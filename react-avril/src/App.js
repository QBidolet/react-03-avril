import logo from './logo.svg';
import './App.css';
import Calculatrice from './components/calculatrice/Calculatrice.js';
// import ExempleComposant from './components/3-composants/ExempleComposant';
// import Bienvenue from './components/3-composants/Bienvenue';
import Parent from './components/4-communication-inter-composant/Parent';
import Binding from './components/4-communication-inter-composant/Binding';
import CycleDeVie from './components/4-communication-inter-composant/CycleDeVie';
import ExempleJSX from './components/4-communication-inter-composant/ExempleJSX';
import ControlledForm from './components/4-communication-inter-composant/ControlledForm';
import UncontrolledForm from './components/4-communication-inter-composant/UncontrolledForm';
import Todo from './components/4-communication-inter-composant/todo/Todo';


function App() {
  return (
    // <Bienvenue/>   
    // <ExempleComposant/>
    // <Calculatrice/> 
    // <Parent></Parent> 
    // <Binding></Binding>
    // <CycleDeVie></CycleDeVie>
    // <ExempleJSX></ExempleJSX>
    // <ControlledForm></ControlledForm>
    // <UncontrolledForm></UncontrolledForm>
    <Todo></Todo>
    );
}

export default App;
