// import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifts';

export const GifGrid = ({ category }) => {

    const { data:images , loading } = useFetchGifs( category ) //Aplicamos nuestro Custom Hook
    
    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs( category )
    //         .then( setImages ); // == .then( img => setImages(img))
    // },[ category ]) //Solo si esta dependencia cambia el useEffect volver a cargar sino no

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            {/* Si loading es true entones ejecuta sino nada, es mejor que operador ternario en estos casos q no se hara nada si es false */}
            { loading && <p className="animate__animated animate__flash">Loading</p> } 
            {/* { loading ? <p>Loading</p> : null } */}

            <div className="card-grid">
                { 
                    images.map( img => 
                        <GifGridItem 
                            key={ img.id }
                            // img={ img } Es una forma
                            { ...img } //Otra forma de mandar a los props con el operador 'spred'
                        />
                    )
                }
            </div>
        </>
    )
}
