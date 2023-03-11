import github from './GitHub-Mark-Light-32px.png'
import './Footer.css'
import linkedIn from './linkedIn.svg'

export default function Footer() {
    return(
        <main className='footerContainer'>
            <h1 className='footerText'>JOIN US ON</h1>
            <div className='footerLinkContainer'>
                <a
                className='footerLink'
                target='_blank'
                href="https://github.com/jason330">
                    <img className='footerImg' src={github} alt="github" />
                </a>
                <a
                className='footerLink'
                target='_blank'
                href="https://www.linkedin.com/in/jason-s-a2b08b258/">
                    <img className='footerImg' src={linkedIn} alt="linked in" />
                </a>
            </div>
        </main>
    )
}