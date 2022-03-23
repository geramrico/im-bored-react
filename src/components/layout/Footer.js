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
        <p>Gerardo Morales</p>
        <p className=''>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
