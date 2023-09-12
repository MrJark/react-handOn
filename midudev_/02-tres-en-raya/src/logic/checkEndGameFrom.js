


export const checkEndGameFrom = (newBoard) => {
    // con este miras si hay un empate, es decir, si no hay espacios vacios en el tablero y además nadie ha ganado
    return newBoard.every( ( square ) => square !== null );
};