import { useEffect, useRef, useState } from 'react';

const useFetch = (url) => {

    const isMounted = useRef(true)  // false si se desmonta el componente 

    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {


        return () => {
            isMounted.current = false
        };
    }, []);

    useEffect(() => {
        setState({ data: null, loading: true, error: null }) // limpia para mostrar loading

        fetch(url)

            .then(resp => resp.json())
            .then(data => {

                if (isMounted.current) {   // true muestra los valores en el componente
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                }
            })
            .catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'no se pudo mostrar los cambios'

                })
            })
    }, [url]);

    return state

};

export default useFetch;
