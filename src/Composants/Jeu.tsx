import './Jeu.css'

function Jeu({setMenu} : any) {
    return (
        <div className='Jeu'>
            <div className='Top'>
                <div className='Buttons'>
                </div>

                <div className='Infos'>
                </div>
            </div>


            <div className='Left'>
                <div className='Hand'>
                    <div className='A'>
                    </div>

                    <div className='B'>
                    </div>

                    <div className='C'>
                    </div>
                </div>

                <div className='Game'>
                    <div className='Front'>
                        <div className='A'>
                        </div>

                        <div className='B'>
                        </div>

                        <div className='C'>
                        </div>
                    </div>

                    <div className='Back'>
                        <div className='A'>
                        </div>

                        <div className='B'>
                        </div>

                        <div className='C'>
                        </div>
                    </div>
                </div>
            </div>

            <div className='Right'>
                <div className='Hand'>
                    <div className='A'>
                    </div>

                    <div className='B'>
                    </div>

                    <div className='C'>
                    </div>
                </div>

                <div className='Game'>
                    <div className='Front'>
                        <div className='A'>
                        </div>

                        <div className='B'>
                        </div>

                        <div className='C'>
                        </div>
                    </div>

                    <div className='Back'>
                        <div className='A'>
                        </div>

                        <div className='B'>
                        </div>

                        <div className='C'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jeu;