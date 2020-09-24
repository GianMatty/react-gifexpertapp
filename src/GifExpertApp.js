import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
 
export const GifExpertApp = () => {
    // const categories = ['Yo', 'Tu', 'El']; //no renderiza nada solo cambia internamente
    const [categories, setCategories] = useState(['One Punch']); //Para mantener el estado actualizado y renderizado en tiempo real

    // const handleAdd = () => {
    //     // setcategories([...categories, 'nosotros']); //Agrega al final
    //     // setcategories(['nosotros', ...categories]); //Agrega al inicio
    //     setCategories( cats =>[...cats, 'nosotros']); // funciona igual
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>           
            <hr/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map( (category) =>  //El map trae 2 elementos (valor, indice)
                        <GifGrid 
                            key={category}
                            category={ category }
                        />
                        // <li key={category}>{ category }</li> //Siempre debe tener una llave para identificarlo
                    )
                }
            </ol>
        </>
    )

 }


