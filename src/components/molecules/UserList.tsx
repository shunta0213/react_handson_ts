import React from "react";

import { List } from "../atoms/List";
import { User } from "../../data/data";
import { BigList } from "../../data/data";

const UserList = () => {
    return (
        <List<User>
            data={BigList}
            renderItem={(item) => (
                <div style={{ display: "flex" }}>
                    <img src={item.avatar} alt={item.name} width={50} />
                    <p> {item.name} - {item.email} </p>
                </div>
            )}
            renderEmpty={< li > No Item</li >}
        />

    )
}

export default UserList