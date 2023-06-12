import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage:"url(/img/footer.png)"}}>
    <div className="redes">
        <a href='https://www.aluracursos.com/'> 
            <img src="/img/facebook.png" alt="Facebook"/>
        </a>
        <a href='https://www.aluracursos.com/'> 
            <img src="/img/instagram.png" alt="instagram" />
        </a>
        <a href='https://www.aluracursos.com/'> 
            <img src="/img/linkedin.png" alt="linkedin" />
        </a>
    </div>
    <img src='/img/logo.png' alt='org' /> 
    <strong>Desarrollado por Jose Carlos C. Y.</strong>
</footer>

}

export default Footer