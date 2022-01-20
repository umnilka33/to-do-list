import React, {Fragment} from "react";
import './styles.css'
//with array
/*
const Columns = () => ([
        <td key="1">Col1</td>,
        <td key="2">Col2</td>
])
*/
const inlineStyles = {color: 'red', textTransform: 'uppercase'};

//with Fragments
const Columns = () => (
    <Fragment>  
        <td style={inlineStyles}>Inline</td>
        <td className="title">Simple class</td>
    </Fragment>
)

const Table = () => (
    <table>
        <tbody>
            <tr>
                <Columns />
            </tr>
        </tbody>
    </table>
)

export default Table;