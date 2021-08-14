import React, {Fragment} from 'react'

export function CoinRow({coin, index}){
	return ( 
		<Fragment>
			<tr key={index}>
				<td>{index}</td>
				<td>
					<img src={coin.image} alt={coin.name} style={{width: '3%'}} className="img-fuild me-2" />
					<span>{coin.name}</span>
					<span className="ms-3 text-muted text-uppercase">{coin.symbol}</span>
				</td>
				<td>{new Intl.NumberFormat("en-US",{'style': "currency", 'currency': "USD"}).format(coin.current_price)}</td>
				<td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>{coin.price_change_percentage_24h}%</td>
				<td>{new Intl.NumberFormat("en-US",{'style': "currency", 'currency': "USD"}).format(coin.total_volume)}</td>
			</tr>
		</Fragment>
	)
}
