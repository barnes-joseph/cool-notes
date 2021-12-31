import React from "react";
import {FormSpan} from '../Components/Styled'

const FormHeader = ({header}) => {
    return(
    <React.Fragment>
        <FormSpan>{header}</FormSpan>
    </React.Fragment>
    )
}

export default FormHeader;