import './BaseDeDonnees.css'
import { useDatabase } from "./useDatabase";

function BaseDeDonnees({setMenu} : any) {
    let {database, updateDatabase} = useDatabase();

    return (
        <div className="BaseDeDonnees">
            <div className='Top'>
                <div className='Buttons'>
                    <button className='Options' onClick={() => setMenu(1)}>Commencer</button>
                    <button className='Database' onClick={() => setMenu(2)}>Options</button>
                    <button className='Quit' onClick={() => setMenu(0)}>Quitter</button>
                </div>
            </div>
            <div className="InterieurCarte">
                <div>Cartes</div>
                <ul className="Cartes">
                    {database.cartes.map((carte) => (
                    <li>
                        {carte.nom}
                    </li>
                    ))}
                </ul>
            </div>

            <div className="InterieurEffet">
                <div>Effets</div>
                <ul className="Effets">
                    {database.effets.map((effet) => (
                    <li>
                        {effet.nom}
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default BaseDeDonnees;