import React, { useEffect } from 'react'
import { FaCode } from 'react-icons/fa'
import { API_KEY, API_URL } from '../../Config'
import MainImage from './Sections/MainImage'
import { Typography, Row } from 'antd'
const { Title } = Typography
function LandingPage() {
	useEffect(() => {
		fetch(
			`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
		)
			.then(response => response.json())
			.then(response => {
				console.log(response)
			})
	}, [])
	return (
		<div style={{ width: '100%', margin: 0 }}>
			{/* Movie main image */}
			<MainImage />
			<div>
				<div
					style={{
						position: 'absolute',
						maxWidth: '500px',
						bottom: '2rem',
						marginLeft: '2rem'
					}}>
					<Title style={{ color: 'white' }} level={2}>
						Title
					</Title>
					<p style={{ color: 'white', fontSize: '1rem' }}>text</p>
				</div>
			</div>

			{/* Body */}
			<div style={{ width: '85%', margin: '1rem auto' }}>
				<Title level={2}>Movies by latest</Title>
				<hr />

				{/* Grid cards */}
				<Row gutter={[16, 16]}></Row>

				{/* Load more button */}
				<br />
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<button onClick> Load More </button>
				</div>
			</div>
		</div>
	)
}

export default LandingPage
