<template>
    <footer class="main-c">
        <nuxt-link to="/"><LCLogo/></nuxt-link>
        
        <h1>Leandro Cesar</h1>
        <div class="footer-icons-copyright">
            <ul class="ul-icons">
                 <li>
                <a href="https://api.whatsapp.com/send?phone=5521971305858" title="Conversar no WhatsApp" target="_blank">
                    <i class="fab fa-whatsapp-square"></i>
                </a>
                <a href="http://www.instagram.com/professorleandrocesar" title="Me Siga no Instagram" target="_blank">
                    <i class="fab fa-instagram-square"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCkfhc9GsqfSFEPFPzsXu4pQ" title="Futuro Canal (sendo criado)" target="_blank">
                    <i class="fab fa-youtube"></i>
                </a>
                <a href="https://github.com/professorleandrocesar" title="Meus Projetos online" target="_blank">
                    <i class="fab fa-github-square"></i>
                </a>
                <a href="mailto:professor@leandrocesar.co" title="Me mande um e-mail c/ dúvidas, sugestões..." target="_blank">
                    <i class="fas fa-envelope"></i>
                </a>
                </li>
            </ul>
        <p class="ul-icons-p ">
          <nuxt-link to="/">leandrocesar.co</nuxt-link> &copy; 2021 <br> CNPJ: 40.930.118/0001-33<br>| Leandro Cesar Ramos da Costa |
        </p>
        </div>
    </footer>
</template>


<style>

/* Início dos códigos do 'footer' */
footer {
  background: #223241;
  width: 100%;
  height: 300px;
  clear: both;
  margin: 30px 0;
}

svg {
  font-size: 0.9em;
  text-align: center;
}

footer h1 {
  margin: -25px 0 0 0;
  font-size: 1.5em;
}

footer a {
  display: inline;
  font-size: 1em;
}

.footer-icons-copyright {
  margin: auto;
  text-align: center;
  width: 85%;
  color: #929292;
  clear: both;
}

.footer-icons-copyright li {
  padding-top: 10px;
}

.ul-icons {
  font-size: 22px;
}

.ul-icons ul {
  padding: 0;
  margin: 0;
}

.ul-icons a {
  color: #929292;
  text-shadow: 1px 1px 1px #e23a2880;
  transition: color .3s linear;
  margin: 0 15px;
}

.ul-icons a:hover {
  color: #e23a28;
}

.ul-icons a:active {
  color: rgba(255,0,0,0.5);
}

.ul-icons-p a {
  color: #929292;
  transition: color .3s linear;
}

.ul-icons-p a:hover {
  color: #e23a28;
}

.ul-icons-p a:active {
  color: rgba(255,0,0,0.5);
}
  
.ul-icons-p {
  margin: 0;
  padding: 0;
}



/* fim dos códigos do 'footer' */
/* Início dos códigos para bloqueio dos conteúdos para celulares */
@media only screen and (min-width: 1126px) {

}
/* Término dos códigos para bloqueio dos conteúdos para celulares */
/* Alterações para responsividade do site para celular e midias menores que 1125px */
@media only screen and (max-width: 1125px) {

  /* Início dos códigos de formatação gerais (h1, h2, p, code... */
  .navegation, .navegation-index, .img-top-index, .img-top {
    display: none;
  }

    /* Início dos códigos do 'footer' */
  footer {
    background: #223241;
    width: 100%;
    height: 220px;
    clear: both;
    margin-top: 20px;
  }

  svg {
    font-size: 0.9em;
  }

  footer h1 {
    margin: -20px 0 -20px 0;
    font-size: 1.3em;
  }
  
  footer p {
    font-size: 14px;
  }

  footer a {
    font-size: 15px;
    display: inline;
  }

  .ul-icons a {
    font-size: 20px;
  }

  .footer-icons-copyright {
    margin: auto;
    text-align: center;
    width: 100%;
    color: #929292;
    clear: both;
  } 

  .footer-icons-copyright li {
  padding-top: 20px;
  }

  .ul-icons a {
    color: #929292;
    text-shadow: 1px 1px 1px #e23a2880;
    transition: color .3s linear;
    margin: 0 12px;
  }
/* F i m  d a s  a l t e r a ç õ e s  e s p e c í f i c a s  d a  p á g i n a  *  F i m  d o  s l i d e  p r i n c i p a l  */
}
</style>