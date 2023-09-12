import { useState } from "react";



// para que sea reutilizable, el componente debe recibir las props que serán específicas de cada uno de los users pero la estructura del article es común a todas
export const XFollowCard = ({ userName, name, initialIsFollowing }) => {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const imageSRC = `https://unavatar.io/github/${userName}`;
    // ternarias para cambiar textos
    const text = isFollowing ? ' Following' : 'Follow';
    // para que el btn sea reactivo
    const btnFollow = isFollowing 
        ? 'tw-followCard-button is-Following'
        : 'tw-followCard-button'
    ;

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard '>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar' 
                    src={imageSRC}
                    alt={`An avatar of ${userName} `}
                />

                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{userName === 'mrjark' ? userName + '_' : userName }</span>
                </div>
            </header>

            <aside>
                <button 
                    className={btnFollow}
                    onClick={handleClick}    
                > 
                    <span className="tw-followCard-text">{text}</span> {/* los elementos que envuelve otro elemento se le llaman childrens. Follow es childern de button y button es children de aside */}
                    <span className="tw-followCard-stopFollow">Unfollow</span>
                </button>
            </aside>
        </article>
    )
}
