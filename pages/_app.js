import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Component {...pageProps}/>
        <a
        href="https://wa.me/2348100000000"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </>
    
  ) 
    


}

export default MyApp
