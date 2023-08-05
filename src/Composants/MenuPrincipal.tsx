import './MenuPrincipal.css'
import shiro from '../Images/Shiro.png'

function MenuPrincipal({setMenu} : any) {
    return (
    <div className='MenuPrincipal'>
        <div className='MovingBackground'>
            <div className='FixedBackground'>
                <div className='Header'>
                    <img src={shiro} alt=' Shiro Games' width={200} height={200}/>
                </div>
                <div className='Contenu'>
                    <div className='Border1'>
                        <div className='Border2'>
                            <button className='PrincipalButton' onClick={() => setMenu(1)}>
                                <div className='PlayButton'/> Commencer
                            </button>
                            <br />
                            <button className='PrincipalButton' onClick={() => setMenu(2)}>
                                <div className='OptionsButton'/> Options
                            </button>
                            <br />
                            <button className='PrincipalButton' onClick={() => setMenu(3)}>
                                <div className='DataBaseButton'/>Base de Donnée
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default MenuPrincipal;