/** @format */

import React, { useContext } from "react";
import GlobalContext from "../../components/AppComponents/Layout/GlobalContext";
function Sellerspage() {
    const { text, hello, searchQuery, setSearchQuery } = useContext(GlobalContext);

	return (
		<div>
            <h1> Sellerspage {text}</h1>
            <p>{hello}</p>
            <p>{searchQuery}</p>
		</div>
	);
}

export default Sellerspage;
