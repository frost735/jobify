import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'

function Landing() {
  return (
    <Wrapper>
        <nav>
            <img src={logo} alt='jobify' className='logo'/>
        </nav>
        <div className='container page'>
            {/* info */}
            <div className='info'>
                <h1>
                    job <span>tracking</span> app
                </h1>
                <p>Cred succulents literally, chambray coloring book messenger bag fanny pack lumbersexual shoreditch echo park sriracha semiotics helvetica mixtape.</p>
                <button className='btn btn-hero'>Login/Register</button>
            </div>
            <img src={main} alt='job hunt' className='img main-img' />
        </div>
    </Wrapper>
  );
}

export default Landing;
