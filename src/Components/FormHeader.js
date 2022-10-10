import React from "react";
import {FormSpan,Line1,Line2} from '../Components/Styled'

const FormHeader = ({header}) => {
    return(
    <React.Fragment>
        <FormSpan>{header}</FormSpan>
        <Line1></Line1>
        <Line2></Line2>
    </React.Fragment>
    )
}

export default FormHeader;