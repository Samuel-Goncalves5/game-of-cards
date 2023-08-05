import { useState } from 'react';
import MenuPrincipal from './Composants/MenuPrincipal';
import Jeu from './Composants/Jeu';

function App() {
  let [menu, setMenu] = useState(0);
  return menu === 0 ? <MenuPrincipal setMenu={setMenu}/> :
         menu === 1 ? <Jeu setMenu={setMenu}/> :
         menu === 2 ? <div>TODO</div> :
         menu === 3 ? <div>TODO</div> :
         <div>ERROR</div>
}

export default App;
