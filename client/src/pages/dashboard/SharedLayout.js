import { Outlet, Link } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'
import { Navbar, BigSitebar, SmallSitebar } from '../../components'

function SharedLayout() {
    return (
        <Wrapper>
            <main className='dashboard'>
                <SmallSitebar/>
                <BigSitebar/>
                <div>
                    <Navbar/>
                    <div className='dashborad-page'>
                        <Outlet/>
                    </div>
                </div>
            </main>
            
        </Wrapper>
    )
}

export default SharedLayout 