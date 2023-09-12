import React from 'react';
import { XFollowCard } from './components';
import {Users} from './components/assets';


export const App = () => {

    // para envolver más de un elemento en react y no usar el React. Fragment, se usan <> </>
    return (
        <section className='App'>
            {
                Users.map( user => {
                    const { userName, name, isFollowing } = user;
                    return (
                        <XFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                            name={name}
                        />
                    )
                })
            }
        </section>
    )
}
