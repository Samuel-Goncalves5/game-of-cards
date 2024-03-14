import './CreateCard.css';
import { Carte } from "./Interfaces/Carte";

function CreateCard({infos} : {infos : Carte | undefined})
{
    return infos === undefined ? null :
    (
    <div className='BackgroundA'>
        <div className='MainBackground' style={{backgroundImage: `url(${infos.picture})`}}>
            <div className='BackgroundB'>
            </div>
        </div>
    </div>
    )
}

export default CreateCard;