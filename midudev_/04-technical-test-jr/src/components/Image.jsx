


export const Image = ( { image, fact }) => {

    return (
       <>
        { image && <img src={image} alt={`This image is an cat aleatory image with this text: ${fact}`} />}
       </>
    )
}
