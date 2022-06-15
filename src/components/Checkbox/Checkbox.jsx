import { useState } from "react"
import checkedSVG from "../../assets/img/checked.svg"
import roundSVG from "../../assets/img/circle.svg"

import "./Checkbox.css"

const Checkbox = ({checkInit, style, id, updateTodo}) => {
    const [checked, setChecked] = useState(checkInit)

    const clickHandle = () => {
        setChecked(!checked)
        updateTodo(id)
    }

    return (
        <div className="checkbox" onClick={clickHandle} style={style}>
            <div className="checkbox__round" ><img src={roundSVG} /></div>
            {checked ? <div className="checkbox__checked"><img src={checkedSVG} /></div>
            : undefined }
        </div>
    )
}

export default Checkbox