import React from "react";
import {CoinRow} from "./CoinRow";


export function TableCoins({ coins, search }) {
	const filterCoinsByName = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()))
	return (
		<table className="table table-dark mt-4 table-hover">
			<thead>
				<tr>
					<td>#</td>
					<td>Coin</td>
					<td>Price</td>
					<td>Price Change</td>
					<td>24h Valume</td>
				</tr>
			</thead>
			<tbody>
				{filterCoinsByName.map((coin, index) => (
					<CoinRow coin={coin} key={index} index={index}/>
				))}
			</tbody>
		</table>
	);
}
