import  { useState } from 'react'




export const useFormset = (initialState= {}) => {
  
const [values, setValue] = useState(initialState)


const reset = () => {

    setValue(initialState)

}


const handleInput = ({target}) => {
    

    setValue({...values,
                [target.name]: target.value})}



    return [values, handleInput,reset]
}