/**
 * Cuando se vaya a extraer lógica del App.jsx, debes evitar el trasladar a los customHooks elementos del los hooks internos como los set... 
 * y demás que tengan que estar en ese archivo ya que esto hará que el código no sea reutilizabla ya que dependerá de ese
 * hook.
 * En este caso, me haría falta el setFact y se lo podría pasar como props y luego llamarla en el App.jsx pero estaría haciendo 
 * dependiente a este elemento
*/

import { CAT_ENDPOINT_RANDOM_FACT } from "../constants";


//! Mala práctica 👇🏼
// export const getRandomFact = () => {
//     fetch(CAT_ENDPOINT_RANDOM_FACT)
//         .then( res => {
//             if(!res.ok) {
//                 setFactError(' Error fetching fact');
//             }
//             return res.json()
//         })
//         .then( data => {
//             const { fact } = data;
//             setFact(fact);
//         })
// };

// * Buenas prácticas 1
// export const getRandomFact = async () => {
//     const res = await fetch(CAT_ENDPOINT_RANDOM_FACT);
//     if (!res.ok) {
//         setFactError(' Error fetching fact');
//     }
//     const data = await res.json();
//     const { fact } = data;
//     return fact;
// };

//* Buenas prácticas 2
export const getRandomFact = () => {
    return fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then( res => {
            if (!res.ok) {
                throw new Error(' Error fetching fact');
            }
            return res.json()
        })
        .then( data => {
            const { fact } = data;
            return fact;
        });
};