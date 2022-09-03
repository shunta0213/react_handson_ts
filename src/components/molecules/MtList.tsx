import React from "react";

import { List } from "../atoms/List";
import { MtData } from "../../data/data";
import { mt_peaks } from "../../data/data";

const MtList = () => {
    return (
        <List<MtData>
            data={mt_peaks}
            renderItem={(item) => (
                <>
                    {item.name} - {item.elevation.toLocaleString()}
                </>
            )}
            renderEmpty={<li>No Item</li>}
        />
    )
}

export default MtList