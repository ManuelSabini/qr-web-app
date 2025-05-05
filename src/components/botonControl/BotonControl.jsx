import React from 'react'
import { Button } from "antd";

const BotonControl = (props) => {
    return (
    <Button icon={props.icon} iconPosition={props.iconPosition} onClick={props.formula}>{props.children}</Button>
    )
}

export default BotonControl