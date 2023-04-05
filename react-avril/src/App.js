import logo from './logo.svg';
import './App.css';
import React from 'react';
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
import SwapiCharacter from './components/5-interaction-serveur/SwapiCharacter';
import ClassCounter from './components/6-hooks/ClassCounter';
import FonctionCounter from './components/6-hooks/FunctionCounter';
import Users from './components/6-hooks/tp-users/Users';
import DemoUseEffect from './components/6-hooks/DemoUseEffect';
import ThemeContext from './components/8-context/ThemeContext';
import ThemeSwitcher from './components/8-context/ThemeSwitcher';
import ComposantParent from './components/11-quelques-patterns/lifting-state-up/ComposantParent';
import Liste from './components/11-quelques-patterns/high-order-component/Liste';

function App() {
  const [theme, setTheme] = React.useState('light');
  
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
    // <Todo></Todo>
    // <SwapiCharacter/>
    // <div>
    // <ClassCounter></ClassCounter>
    // <FonctionCounter></FonctionCounter>
    // </div>
    // <DemoUseEffect></DemoUseEffect>
    // <Users></Users>
    // <ThemeContext.Provider value={{theme, setTheme}}>
    //   <ThemeSwitcher></ThemeSwitcher>
    // </ThemeContext.Provider>
    // <ComposantParent></ComposantParent>
    <Liste></Liste>
    );
}

export default App;
