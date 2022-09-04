import React from "react";

import { FixedSizeList } from "react-window";

import { List } from "../atoms/List";
import { User } from "../../data/data";
import { BigList } from "../../data/data";

// const UserList = () => {
//     return (
//         <List<User>
//             data={BigList}
//             renderItem={(item) => (
//                 <div style={{ display: "flex" }}>
//                     <img src={item.avatar} alt={item.name} width={50} />
//                     <p> {item.name} - {item.email} </p>
//                 </div>
//             )}
//             renderEmpty={< li > No Item</li >}
//         />

//     )
// }

const UserList = () => {
    const renderRow = ({ index, style }: { index: number, style: object }) => (
        <div style={{ ...style, ...{ display: "flex" } }}>
            <img src={BigList[index].avatar} alt={BigList[index].name} width={50} />
            <p>
                {BigList[index].name} - {BigList[index].email}
            </p>
        </div>
    )

    return (
        <FixedSizeList
            height={window.innerHeight}
            width={window.innerWidth - 20}
            itemCount={BigList.length}
            itemSize={50}
        >
            {renderRow}
        </FixedSizeList>
    )
}

export default UserList