import React from "react";

class BaitapJSX  extends React.Component {
    
    render() { 
        const listArr = ["HTML","CSS","Javascript","reactjs"];
        return ( 
        <div>
            <h1>Danh Sách Khoá Học</h1>
            <ul>
                {listArr.map((value,index)=>
                <li key={index}> {value} </li>
                    )}
            </ul>
        </div>
        )};
}

export default BaitapJSX ;