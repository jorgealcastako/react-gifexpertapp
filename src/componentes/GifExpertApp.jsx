import React, {useState} from 'react';
import { AddCategoria } from './AddCategoria';

//Componentes
import {GifGrid} from './GifGrid';

const GifExpertApp = () => {

    //const categorias = ['One punch', 'One Piece', 'Dragon Ball']
    const [categorias, setCategorias] = useState(['One Piece']);
    // const handleAdd = () => {
    //     // setCategorias([...categorias, 'Naruto'] );
    //     setCategorias(cats => [...cats, 'naruto'] );
    // }


    return(
        <div>
            <h2>GifExpertApp</h2>
            <AddCategoria setCategorias={setCategorias}/>
            <hr />
            <ol>
                {
                    categorias.map( (categoria) => {
                        return (<GifGrid 
                            categoria={categoria}
                            key={categoria}/>
                        )
                    })
                }
            </ol>
        </div>
        
    );
}

export default GifExpertApp;