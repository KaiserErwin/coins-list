import React, { useEffect, useState } from "react";
import { TableCoins } from "./components/TableCoins";

export function App() {
	const [coins, setCoins] = useState([]);
	const [search, setSearch] = useState('');
	const getData = async () => {
		const res = await fetch(
			"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
		);
		const data = await res.json();
		setCoins(data);
	};
	useEffect(() => {
		getData();
	});
	return (
		<div className="container">
			<div className="row">
				<input onChange={e=>setSearch(e.target.value)} id="" type="text" name="" placeholder="Search a Coin" className="form-control text-light bg-dark boder-0 mt-4 text-center"/>
				<TableCoins coins={coins} search={search}/>
			</div>
		</div>
	);
}
