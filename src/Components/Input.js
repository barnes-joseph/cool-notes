import React from 'react'
import {FormInput,FormLabel} from '../Components/Styled'

const Input = ({name,type}) => {
    return(
        <div style={{display:'flex',flexDirection:'column'}}>
            <FormLabel htmlFor={name}>{name}</FormLabel>
            <FormInput name={name} type={type}/>
        </div>
    )
}

export default Input;