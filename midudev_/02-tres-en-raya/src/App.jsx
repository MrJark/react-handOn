import { useState } from 'react';
import confetti from 'canvas-confetti';

import './App.css';

import { BOARD, TURNS } from './components/constants';
import { Square, WinnerModal, Turns } from './components'
import { checkWinnerFrom, checkEndGameFrom } from './logic';



export const App = () => {

    // como tengo que guardar en el localStorage el board y el turn, lo que voy a hacer es en los useState de cada uno de ellos, como estado inicial pueden ser dos: si ya tengo algo en el localStorage, que renderice eso, sino, que lo haga de nuevo
    // const [board, setBoard] = useState(BOARD); // sin localStorage
    const [board, setBoard] = useState(() => {
        const boardFromStorage = window.localStorage.getItem('board');
        return boardFromStorage
            ? JSON.parse(boardFromStorage)
            : BOARD
    }); // con localStorage

    // const [turn, setTurn] = useState(TURNS.X); // sin LS
    const [turn, setTurn] = useState( () => {
        const turnFromStorage = window.localStorage.getItem('turn');
        return turnFromStorage ?? TURNS.X ; // el ?? mira si el turnFromStorage es null o undefined y el || mira si es falsy
    }); // con LS

    const [winner, setWinner] = useState(null); // null == no hay ganador, false == hemos perdido



    const resetGame = () => {
        setBoard(BOARD);
        setTurn(TURNS.X);
        setWinner(null);

        // para eliminar el ls cunado das al btn resetGame
        window.localStorage.removeItem('board');
        window.localStorage.removeItem('turn');
    };


    const updateBoard = (index) => { // esta no podría tenerla en el SQUARE porque necesitas cambiar el estado con el setTurn
        
        // no actualizar la posición si ya tiene algo
        if( board[index] || winner ) return;
        // actualizar el tablero
        const newBoard = [ ...board];
        newBoard[index] = turn;
        setBoard(newBoard);
        // cambiar el turno
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X ;
        setTurn(newTurn);
        // guaradar partida
        window.localStorage.setItem('board', JSON.stringify(newBoard)); // guardar el board
        window.localStorage.setItem('turn', newTurn); // guardar el turn
        // revisar si hay ganador
        const newWinner = checkWinnerFrom(newBoard);
        if (newWinner) {
            setWinner(newWinner);
            confetti(); // para el confetti
            // alert('you win'); // esto se renderizaría antes ya que este estado no es asincrono por tanto, no te puedes fiar
        } else if ( checkEndGameFrom(newBoard)) {
            setWinner(false); // empate
        }
    };

    return (
        <main className='board'>
            <h1>3 en Raya</h1>
            <button onClick={resetGame}>Reset Game</button>

            <section className='game'>
                {
                    board.map(( _, index ) => {
                        return (
                            <Square 
                                key={index}
                                index={index}
                                updateBoard={updateBoard}
                            >{board[index]}</Square>
                        )
                    }) 
                }
            </section>

            <Turns turn={turn}/>

            <WinnerModal
                winner={winner}
                resetGame={resetGame}
            />
        </main>
    )
}
