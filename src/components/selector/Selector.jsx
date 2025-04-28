import React from 'react'
import { Radio } from "antd";

const Selector = () => {
    return (
        <div>
            <Radio.Group
                options={[
                    { value: "manual", label: "Manual" },
                    { value: "auto", label: "Automatico"},
                ]}
                defaultValue="auto"
                optionType="button"
                buttonStyle="solid"
            />
        </div>
    )
}

export default Selector