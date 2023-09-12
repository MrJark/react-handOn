import { Square } from './';
import { BOARD } from './constants';



export const Board = ( { updateBoard } ) => {

    return (
        <section className='game'>
            {
                BOARD.map(( _, index ) => {
                    return (
                        <Square 
                            key={index}
                            index={index}
                            updateBoard={updateBoard}
                        >{BOARD[index]}</Square>
                    )
                }) 
            }
        </section>
    )
}
