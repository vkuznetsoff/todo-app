import { useState } from "react"
import checkedSVG from "../../assets/img/checked.svg"
import roundSVG from "../../assets/img/circle.svg"

import "./Checkbox.css"

const Checkbox = ({checkInit}) => {
    const [checked, setChecked] = useState(checkInit)

    const clickHandle = () => {
        setChecked(!checked)
    }

    return (
        <div className="checkbox" onClick={clickHandle} >
            <div className="checkbox__round" ><img src={roundSVG} /></div>
            {checked ? <div className="checkbox__checked"><img src={checkedSVG} /></div>
            : undefined }
        </div>
    )
}

export default Checkbox