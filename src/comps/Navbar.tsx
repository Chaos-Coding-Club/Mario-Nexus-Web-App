import Link from  'next/link'

const Navbar = () => {
    return ( 
        <nav className='navbar'>
            {/* <div className="logo"> 
                <h1 className='titleCard'>Mario Nexus</h1>
            </div>

            <div className='navItems'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/dataVis">Data Visualization</Link>
            </div> */}

            <i className="nes-mario"></i>
            <h1 className="title">MARIO NEXUS</h1>
            <div className="links">
                <Link className='nes-btn is-warning' href="/">Home</Link>
                <Link className='nes-btn is-error' href="/about">About</Link>
                <Link className='nes-btn is-primary' href="/dataVis">Data Visualization</Link>
            </div>

        </nav>
     );
}
 
export default Navbar;