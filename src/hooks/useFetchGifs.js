import {useState, useEffect} from 'react'
import {getGifs} from '../helpers/getGifs';


export const useFetchGifs = (categoria) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    //UseEffect recibe una funcion que quiero ejecutar como primer argumento
    //El segundo argumento es una lista de dependencias(arreglo)
    //Si se manda un arreglo vacio solo se ejecutaria una sola vez
    useEffect(() => {
        getGifs(categoria).then(imgs => setstate({
            data: imgs,
            loading: false
        }))
    }, [categoria])

    // setTimeout(() => {
    //     setstate({
    //         data: [1,2,3,4,5,6],
    //         loading: false
    //     })
    // }, 3000)

    return state; // {data: [], loading: true}
}