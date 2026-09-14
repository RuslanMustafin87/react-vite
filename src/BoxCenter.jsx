import { useEffect, useState } from 'react'
import Spinner from './Spinner.jsx'
import Person from './Person.jsx'
import { useTheme } from './ThemeContext.jsx'

import './BoxCenter.scss'

export function BoxCenter() {
	const [people, setPeople] = useState({})
	const { theme } = useTheme()

	useEffect(() => {
		fetch('http://localhost:3000/data')
			.then((response) => response.json())
			.then((data) => {
				console.log('l')
				console.log(data)
				setPeople(data)
			})
			.catch((e) => console.log(e))
	}, [])

	return (
		<div className="box-center">
			{people?.data ? (
				<ul style={{ backgroundColor: theme }}>
					{' '}
					{people.data.map((item) => (
						<li key={item.id}>
							<Person
								avatar={item.avatar}
								first_name={item.first_name}
								last_name={item.last_name}
								email={item.email}
							/>
						</li>
					))}
				</ul>
			) : (
				<Spinner />
			)}
		</div>
	)
}
