import { WINNER_COMBOS } from "../components";


export const checkWinnerFrom = ( boardToCheck ) => {
    // revisamos todas las combinaciones de los ganadores
    for ( const combo of WINNER_COMBOS ) {
        const [ a, b, c ] = combo;
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
    }
    return null;
};