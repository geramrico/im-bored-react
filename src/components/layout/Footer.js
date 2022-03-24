import { FaEnvelope } from 'react-icons/fa'
const Footer = () => {
  const footerYear = new Date().getFullYear()

  return (
    <footer
      className='
        footer 
        p-8 
        shadow-lg rounded-lg
        bg-white
        footer-center'
    >
      <div>
        <a href='mailto:geramoralesrico@gmail.com'>
          Gerardo Morales <FaEnvelope className='inline' />
        </a>

        <p className=''>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
