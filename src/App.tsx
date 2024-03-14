import { useState } from 'react';
import MenuPrincipal from './Composants/MenuPrincipal';
import Jeu from './Composants/Jeu';
import DatabaseContextProvider from './Composants/DatabaseContextProvider';
import BaseDeDonnees from './Composants/BaseDeDonnees';

function App() {
  let [menu, setMenu] = useState(0);

  return (
      <DatabaseContextProvider> {
        menu === 0 ? <MenuPrincipal setMenu={setMenu}/> :
        menu === 1 ? <Jeu setMenu={setMenu}/> :
        menu === 2 ? <div>TODO</div> :
        menu === 3 ? <BaseDeDonnees setMenu={setMenu}/> :
        <div>ERROR</div>
      } </DatabaseContextProvider>
    );
}

export default App;
