import { Square } from "./Square"


export const WinnerModal = ( { winner, resetGame } ) => { // las props luego se las tiene que llamar cuando lo rendericemos

    if ( winner === null ) return null; // para validar si no hay un winner

    const winnerText = winner === false ? 'Tie' : 'Win';
    
    return (
        <section>
            {
                <section className='winner'>
                    <div className='text'>
                        <h2>
                            {winnerText}
                        </h2>
                        <header className='win'>
                            {winner && <Square>{winner}</Square>}
                        </header>
                        <footer>
                            <button onClick={resetGame}>
                                Restart
                            </button>
                        </footer>
                    </div>
                </section>
            }
        </section>
    )
}
