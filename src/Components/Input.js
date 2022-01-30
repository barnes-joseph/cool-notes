import React from 'react'
import {FormInput,FormLabel} from '../Components/Styled'

const Input = ({name,type,onChange,label}) => {
    return(
        <div style={{display:'flex',flexDirection:'column'}}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <FormInput name={name} type={type} onChange={onChange} required/>
        </div>
    )
}

export default Input;