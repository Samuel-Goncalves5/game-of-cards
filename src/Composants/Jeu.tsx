import './Jeu.css';
import CreateCard from './CreateCard';
import { useDatabase } from './useDatabase';
import { DatabaseData } from './Interfaces/DatabaseData';

function setDecks(database: DatabaseData, updateDatabase: any) {
    if (database.terrain.leftPlayer.deck.length !== 0 || database.terrain.rightPlayer.deck.length !== 0) return;

    const deckSize = Math.floor(database.cartes.length / 2);
    const left = [];
    const right = [];

    for (let i = 0; i < database.cartes.length; i++)
    {
        if (Math.random() < 0.5)
        {
            if (left.length === deckSize)
                right.push(database.cartes[i]);
            else
                left.push(database.cartes[i]);
        }
        else
        {
            if (right.length === deckSize)
                left.push(database.cartes[i]);
            else
                right.push(database.cartes[i]);
        }
    }

    while (left.length !== 0)
    {
        const index = Math.floor(Math.random() * left.length);
        database.terrain.leftPlayer.deck.push(left.splice(index, 1)[0]);
    }

    while (right.length !== 0)
    {
        const index = Math.floor(Math.random() * right.length);
        database.terrain.rightPlayer.deck.push(right.splice(index, 1)[0]);
    }

    updateDatabase(database);
}

function newTurn(database: DatabaseData, updateDatabase: any) {
    if (database.terrain.turnLeft === undefined)
    {
        return;
    }
    else if (database.terrain.turnLeft === true) // LEFT
    {
        database.terrain.turnLeft = undefined;
        database.terrain.leftPlayer.manaa++;
        database.terrain.leftHandA = database.terrain.leftPlayer.deck.pop();
        database.terrain.leftHandB = database.terrain.leftPlayer.deck.pop();
        database.terrain.leftHandC = database.terrain.leftPlayer.deck.pop();
    }
    else if (database.terrain.turnLeft === false) // RIGHT
    {
        database.terrain.turnLeft = undefined;
        database.terrain.rightPlayer.manaa++;
        database.terrain.rightHandA = database.terrain.rightPlayer.deck.pop();
        database.terrain.rightHandB = database.terrain.rightPlayer.deck.pop();
        database.terrain.rightHandC = database.terrain.rightPlayer.deck.pop();
    }

    updateDatabase(database);
}

function Jeu({setMenu} : any) {
    let {database, updateDatabase} = useDatabase();

    setDecks(database, updateDatabase);
    newTurn(database, updateDatabase);

    return (
        <div className='Jeu'>
            <div className='Top'>
                <div className='Buttons'>
                    <button className='Options' onClick={() => setMenu(2)}>Options</button>
                    <button className='Database' onClick={() => setMenu(3)}>Base de données</button>
                    <button className='Quit' onClick={() => setMenu(0)}>Quitter</button>
                </div>

                <div className='Infos'>
                    <div className='Left'>
                        {<div className='Deck'/>}
                        <div className='Vie' style={{color: database.terrain.leftPlayer.vie >= 5 ? "black" : "red"}}>{database.terrain.leftPlayer.vie}</div>
                        <div className='Manaa'>{database.terrain.leftPlayer.manaa}</div>
                    </div>

                    <div className='Right'>
                        <div className='Deck'/>
                        <div className='Vie' style={{color: database.terrain.rightPlayer.vie >= 5 ? "black" : "red"}}>{database.terrain.rightPlayer.vie}</div>
                        <div className='Manaa'>{database.terrain.rightPlayer.manaa}</div>
                    </div>
                </div>
            </div>

            <div className='Left'>
                <div className='Hand'>
                    <div className='A'>
                        <CreateCard infos={database.terrain.leftHandA}/>
                    </div>

                    <div className='B'>
                        <CreateCard infos={database.terrain.leftHandB}/>
                    </div>

                    <div className='C'>
                        <CreateCard infos={database.terrain.leftHandC}/>
                    </div>
                </div>

                <div className='Game'>
                    <div className='Front'>
                        <div className='A'>
                            <CreateCard infos={database.terrain.leftGameFrontA}/>
                        </div>

                        <div className='B'>
                            <CreateCard infos={database.terrain.leftGameFrontB}/>
                        </div>

                        <div className='C'>
                            <CreateCard infos={database.terrain.leftGameFrontC}/>
                        </div>
                    </div>

                    <div className='Back'>
                        <div className='A'>
                            <CreateCard infos={database.terrain.leftGameBackA}/>
                        </div>

                        <div className='B'>
                            <CreateCard infos={database.terrain.leftGameBackB}/>
                        </div>

                        <div className='C'>
                            <CreateCard infos={database.terrain.leftGameBackC}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='Right'>
                <div className='Hand'>
                    <div className='A'>
                        <CreateCard infos={database.terrain.rightHandA}/>
                    </div>

                    <div className='B'>
                        <CreateCard infos={database.terrain.rightHandB}/>
                    </div>

                    <div className='C'>
                        <CreateCard infos={database.terrain.rightHandC}/>
                    </div>
                </div>

                <div className='Game'>
                    <div className='Front'>
                        <div className='A'>
                            <CreateCard infos={database.terrain.rightGameFrontA}/>
                        </div>

                        <div className='B'>
                            <CreateCard infos={database.terrain.rightGameFrontB}/>
                        </div>

                        <div className='C'>
                            <CreateCard infos={database.terrain.rightGameFrontC}/>
                        </div>
                    </div>

                    <div className='Back'>
                        <div className='A'>
                            <CreateCard infos={database.terrain.rightGameBackA}/>
                        </div>

                        <div className='B'>
                            <CreateCard infos={database.terrain.rightGameBackB}/>
                        </div>

                        <div className='C'>
                            <CreateCard infos={database.terrain.rightGameBackC}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jeu;