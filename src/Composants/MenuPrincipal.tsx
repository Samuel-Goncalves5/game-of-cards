import './MenuPrincipal.css'

function MenuPrincipal({setMenu} : any) {
    return (
    <div className='MenuPrincipal'>
        <div className='MovingBackground'>
            <div className='FixedBackground'>
                <div className='Header'/>
                <div className='Border3'>
                    <div className='Border2'>
                        <div className='Border1'>
                            <div className='Contenu'>
                                <button className='PrincipalButton1' onClick={() => setMenu(1)}>
                                    <div className='PlayButton'/>
                                    <div className='Text'>Commencer</div>
                                </button>
                                <button className='PrincipalButton2' onClick={() => setMenu(2)}>
                                    <div className='OptionsButton'/>
                                    <div className='Text'>Options</div>
                                </button>
                                <button className='PrincipalButton3' onClick={() => setMenu(3)}>
                                    <div className='DataBaseButton'/>
                                    <div className='Text'>Base de Donnée</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default MenuPrincipal;