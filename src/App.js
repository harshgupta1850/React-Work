import React from 'react';
import './App.css';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterFour from './Components/HookCounterFour';
import HookCounter1 from './Components/HookCounter1';
import HookMouse from './Components/HookMouse';
import MouseConatiner from './Components/MouseConatiner';
import ClassCounterInterval from './Components/ClassCounterInterval';
import HookInterval from './Components/HookInterval';
import DataFetching from './DataFetching';
import Timer from './Timer';
import Parent from './Parent';
import CakeContainer from './CakeComponents/CakeContainer';
import {Provider } from 'react-redux';
import HooksCakeContainer from './CakeComponents/HooksCakeContainer';
import NewCakeContainer from './CakeComponents/NewCakeContainer';
import ItemConatiner from './CakeComponents/ItemConatiner';
import UserContainer from './CakeComponents/UserContainer';

function App() {
  return (
    <div className="App">
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounter1/> */}
      {/* <HookMouse/> */}
      {/* <MouseConatiner/> */}
      {/* <ClassCounterInterval/> */}
      {/* <HookInterval/> */}
      {/* <DataFetching/> */}
      {/* <Timer/>
      <HookInterval/>
      <Parent/>   */}
      <ItemConatiner cake/>
      <ItemConatiner />
      <CakeContainer/>
      <HooksCakeContainer/>
      <NewCakeContainer/>
      <UserContainer/>

    </div>
  );
}

export default App;
