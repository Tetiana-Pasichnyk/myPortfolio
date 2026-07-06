import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const MyNavbar = () => {
	return (
		<Navbar expand='md' className='bg-dark' variant='dark' fixed='top'>
			<Container fluid>
				<Navbar.Brand as={NavLink} to='/' bsPrefix='home'>
					<img
						src='./logo.png'
						width='25'
						height='25'
						alt='logo'
						className='d-inline-block align-top'
					/>
					Tetiana Pasichnyk
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav className='ms-auto' style={{ maxHeight: '100px' }} navbarScroll>
						<Nav.Item>
							<NavLink className='nav-list__link' to='/'>
								Home
							</NavLink>
						</Nav.Item>
						<Nav.Item>
							<NavLink className='nav-list__link' to='/portfolio'>
								My Portfolio
							</NavLink>
						</Nav.Item>
						<Nav.Item>
							<NavLink className='nav-list__link' to='/contact'>
								Contact me
							</NavLink>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default MyNavbar
