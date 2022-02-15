import { useState } from 'react';

const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const rest = () => {
        setValues(initialState)
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [target.name]: target.value
        })
    }


    return [values, handleInputChange, rest]
}



export default useForm;
