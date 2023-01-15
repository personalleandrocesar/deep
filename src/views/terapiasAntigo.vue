<template>
<div id='app'>
  <NavTop/>
  
  <NavBottom/>
    <div id="main">
      <div class="main-c">
          <i class="fas fasi fa-yin-yang"></i>
      <h1>Terapias</h1>
      <br>
        <div class='terapias'>
          <div class='acup terapias-bi'>
            <!--<div class='terapia-image'><img src="img/acup.jpg" alt=""></div>-->
            <div class='terapias-l'>
              <h2 class='terapias-l'>Acupuntura Sistêmica</h2>
              <p>
                Técnica chinesa milenar, em que os pontos se localizam ao longo de todo o corpo. Dentro da acupuntura sistêmica podemos utilizar
                 diversas técnicas e métodos de estímulos diferentes para trazer o equilíbrio ao nosso corpo, tratando diversos tipos de doenças.
                 <br>
                <b class='emphasis-red' @click='sistemica' :class= '{ preco: aplicar}'><i class="fas fa-caret-right"></i> Preços e pagamento online</b>
                 <div v-html="content"></div>
                 
              </p>
            </div>

          </div>
          <br>
        <div class="hr"></div>
            <!--<div class='terapia-image'><img src="img/auri.png" alt=""></div>-->
        <br>
        <div class='cranio terapias-bi'>
            <div class='terapia-image'></div>
            <div  class='terapias-r'>
            <h2 class='terapias-r'>Craniopuntura</h2>
              <p>
               Originalmente conhecida como, Escalpo Acupuntura, criado pelo Dr. Jiao Shunfa, é uma técnica chinesa que trata doenças de origem neural ou visceral, relacionadas com o córtex cerebral. 
               Consiste na inserção e manipulação de agulhas em regiões escalpeanas com correspondência em áreas funcionais do córtex.
                <br>
                <b class='emphasis-red' @click='cranio' :class= '{ preco: aplicarFour}'><i class="fas fa-caret-right"></i> Preços e pagamento online</b>
                 <div v-html="contentFour"></div>
              </p>
            </div>
          </div>
          <br>
        <div class="hr"></div>
            <!--<div class='terapia-image'><img src="img/auri.png" alt=""></div>-->
            <br>

          <div class='auri terapias-bi'>
            <div class='terapias-l'>
            <h2 class='terapias-l'>Auriculoterapia</h2>
              <p>Técnica de acupuntura que utiliza a orelha para avaliação e tratamento das disfunções tanto orgânicas quanto emocionais, bem como dores e algias em geral.  Indicada também para aversões a agulhas.
                  
                  <br>
                <b class='emphasis-red' @click='auricular' :class= '{ preco: aplicarTwo}'><i class="fas fa-caret-right"></i> Preços e pagamento online</b>
                 <div v-html="contentTwo"></div>                  
              </p>
                 
            </div>
            
          </div>
          <br>
        <div class="hr"></div>
        <br>
          <div class='vento terapias-bi'>
            <!--<div class='terapia-image'><img src="img/auri.png" alt=""></div>-->
            <div  class='terapias-r'>
            <h2 class='terapias-r'>Ventosaterapia</h2>
              <p>
                Associada com outros Instrumentos da Medicina Tradicional Chinesa, visa eliminar toxinas
                e retirar estagnações do sangue em determinadas zonas do corpo, visando sua maior utilização com grande sucesso em casos de dores musculares, lombalgias, artrite, hipertensão, celulite e gordura localizada.
               <br>
                <b class='emphasis-red' @click='ventosa' :class= '{ preco: aplicarTree}'><i class="fas fa-caret-right"></i> Preços e pagamento online</b>
                 <div v-html="contentTree"></div>                  
              </p>
              
            </div>
          </div>
          <br>
        <div class="hr"></div>
        <br>
        <br><br><br><br>
        </div>

      </div>
    </div>
 
</div>  
</template>

<script>
export default {
  scrollToTop: true,
  head: {
    title: 'Terapias | Deep Acupuntura',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Acupuntura'
      }
    ]
  },
  data () {
    return {
      aplicar: "",
      aplicarTwo: '',
      aplicarTree: '',
      aplicarFour: '',
      content: '',
      contentTwo: '',
      contentTree: '',
      contentFour: ''
    }
  },
  methods: {
    sistemica() {
      this.aplicar= true,
      this.aplicarTwo= false,
      this.aplicarTree = false,
      this.aplicarFour = false,
      this.content =`
        <table>
        <thead>
          <th></th>
          <th>1 sessão</th>
          <th>4 sessões</th>
        </thead>
        <tbody>
          <tr>
            <th>Meio de semana</th>
            <td><a  class='dot' href="https://pag.ae/7XUp2Rvw9" target='_blank'>80 R$</a></td> 
            <td><a  class='dot' href="http://pag.ae/7XUp4LJB9" target='_blank'><s>260 R$</s><br>200 R$</a></td> 
          </tr>
          <tr>
            <th>Sábados e/ou<br>Domiciliar</th>
            <td><a  class='dot' href="https://pag.ae/7XUp1q34m" target='_blank'>100 R$</a></td>
            <td><a  class='dot' href="http://pag.ae/7XUp5YFX1" target='_blank'><s>400 R$</s><br>320 R$</a></td> 
          </tr>

        </tbody>
      </table>
      `
      this.contentTwo ='',
      this.contentTree ='',
      this.contentfour =''
    },
    auricular() {

      this.aplicar= false,
      this.aplicarTwo= true,
      this.aplicarTree= false,
      this.aplicarFour= false,
      this.contentTwo =`
     <table>
        <thead>
          <th></th>
          <th>1 sessão</th>
          <th>4 sessões</th>
        </thead>
        <tbody>
          <tr>
            <th>Meio de semana</th>
            <td><a  class='dot' href="#">À Definir</a></td> 
            <td><a  class='dot' href="#">À Definir</a></td> 
          </tr>
          <tr>
            <th>Sábados e/ou<br>Domiciliar</th>
            <td><a  class='dot' href="#">À Definir</a></td> 
            <td><a  class='dot' href="#">À Definir</a></td>  
          </tr>

        </tbody>
      </table>

        
      `
      this.content ='',
      this.contentTree ='',
      this.contentFour =''
  },
    ventosa() {

      this.aplicar= false,
      this.aplicarTwo= false,
      this.aplicarTree= true,
      this.aplicarFour= false,
      this.contentTree =`
     <table>
        <thead>
          <th></th>
          <th>1 sessão</th>
          <th>4 sessões</th>
        </thead>
        <tbody>
          <tr>
            <th>Meio de semana</th>
            <td><a  class='dot' href="#">À Definir</a></td> 
            <td><a  class='dot' href="#">À Definir</a></td> 
          </tr>
          <tr>
            <th>Sábados e/ou<br>Domiciliar</th>
            <td><a  class='dot' href="#">À Definir</a></td> 
            <td><a  class='dot' href="#">À Definir</a></td>  
          </tr>

        </tbody>
      </table>

        
      `
      this.content ='',
      this.contentTwo ='',
      this.contentfour =''
  },
    cranio() {

      this.aplicar= false,
      this.aplicarTwo= false,
      this.aplicarTree= false,
      this.aplicarFour= true,
      this.contentFour =`
     <table>
        <thead>
          <th></th>
          <th>1 sessão</th>
          <th>4 sessões</th>
        </thead>
        <tbody>
          <tr>
            <th>Meio de semana</th>
            <td><a  class='dot' href="#">À Definir</a></td> 
            <td><a  class='dot' href="#">À Definir</a></td> 
          </tr>
          <tr>
            <th>Sábados e/ou<br>Domiciliar</th>
            <td><a  class='dot' href="#">À Definir</a></td> 
            <td><a  class='dot' href="#">À Definir</a></td>  
          </tr>

        </tbody>
      </table>

        
      `
      this.content ='',
      this.contentTwo ='',
      this.contentTree =''
    }
  }
}
</script>
