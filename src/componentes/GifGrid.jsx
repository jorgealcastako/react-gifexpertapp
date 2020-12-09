import React  from 'react'
import { GrifGridItem } from './GrifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';

//Componentes


export const GifGrid = ({categoria}) => {

    // const [count, setCount] = useState(0);

    const {data: images, loading } = useFetchGifs(categoria);
    
    return (
        <>
            <h3>{categoria}</h3> 
            {loading && <p className=" animate__animated animate__flash">Cargando....</p>}
            <div className="card-grid">
                
                {
                    images.map((img) => ( 
                        <GrifGridItem 
                            key={img.id}
                            {...img} />
                    ))
                }
                    
                
                {/* <p>{count}</p>
                <button onClick={() => {setCount(count + 1)} }>Button</button> */}
            </div>
        </>
    )
}
