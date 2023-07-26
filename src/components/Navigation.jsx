import { Outlet, Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <header className='container' style={{padding: '5px', marginTop: '20px'}}>
				<Link to='/' className='logo'>
					<img
						src='https://user-images.githubusercontent.com/29473781/180619084-a56960ab-7efa-4e34-9d33-4e3e581d62ff.png'
						alt='Logo Pokedex'
					/>
				</Link>

				<Link to='/search' className='search'>Buscar</Link>
	  </header>

      <Outlet />
    </>
  )
}

export default Navigation