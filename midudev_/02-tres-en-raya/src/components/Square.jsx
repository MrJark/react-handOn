
export const Square = ( { children, isSelected ,updateBoard, index } ) => {
    
    const className = `square ${isSelected ? 'is-selected' : '' }`;

    const handleClick = () => {
        updateBoard(index);
        // console.log('click');
    };

    return (
        <div 
            onClick={handleClick}
            className={className}
        >
            {children}
        </div>
    );
};