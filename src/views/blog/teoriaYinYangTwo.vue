<script setup>
import NavTopTwo from '../../components/NavTopTwo.vue'
import NavBottom from '../../components/NavBottom.vue'
</script>
<template>
<div id='app'>

  <NavTopTwo/>
  <NavBottom/>

      <div id="main">
        <div class='years'>
            <a @click="$router.go(-1)"><i class="fas fasi-post main-l fa-arrow-left"></i> Voltar</a>
        </div>  
        <div class="main-c"><i class="fas fasi fa-file-invoice"></i></div>
          <h2>  
              A Teoria Yin-Yang
          </h2>
          <p class='main-r autors'>
            DA COSTA, Leandro C. R.¹

          </p>
        <div class='years'>
            <h4 @click='articleResume' class='postTitle' :class='{ postTitleHover: aplicar }'>
            Resumo
            </h4>
            <h4 @click='postTwo' class='postTitle' :class='{ postTitleHover: aplicarTwo }'>
              Introdução
            </h4>
            <div v-html='outputPostOne'></div>
            <div v-html='outputPostTwo'></div>
        <!--    <h4 @click='umSete' class='postTitle' :class='{ postTitleHover: aplicarTree }'>| 2017 |</h4>
            <h4 @click='umUm' class='postTitle' :class='{ postTitleHover: aplicarFour }'>| 2011 |</h4>
            <h4 @click='zeroOito' class='postTitle' :class='{ postTitleHover: aplicarFive }'>| 2008 |</h4>
            <h4 @click='zeroCinco' class='postTitle' :class='{ postTitleHover: aplicarSix }'>| 2005 |</h4>
            <h4 @click='oitoSeis' class='postTitle' :class='{ postTitleHover: aplicarSeven }'>| 1986 |</h4>
        -->    
        </div>
        <br>
      </div>

        <!-- <div>
          <span class="nav-in dois-vinte-um">2021</span> | <span class="nav-in dois-vinte">2022</span>
        </div> -->
    </div>
</template>

<script>
export default {
  scrollToTop: true,
  head: {
    title: 'A Acupuntura no Tratamento da Lombalgia Tai Yang: Revisão Bibliográfica | Posts | Deep Acupuntura',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: ''
      }
    ]
  },
  data() {
      return {
          aplicar : true,
          aplicarTwo : '',
          aplicarTree : '',
          aplicarFour : '',
          aplicarFive : '',
          aplicarSix : '',
          aplicarSeven : '',
          outputPostOne: `
          <h4>Resumo</h4>
          <p class='post'>
            A Teoria Yin-yang é o principal conceito aplicado à Medicina Tradicional Chinesa (MTC). 
            Teoria antiga que é, é conhecida em qualquer canto do mundo, até você provavelmente já ouviu falar;
            Yin-yang, fala de ciclos, de constância, de fases (mundanças), alternâncias etc. Tal conceito é simples, sendo que ao mesmo tempo profundo, 
            podemos dizer que aspectos da fisiologia, da patologia e do tratamento com base na medicina chinesa, podem, essencialmente, ser reduzidos
            a Yin-Yang².
            <br>
          </p>
          <br>
          
          `,
          outputPostTwo: `
          <p class='main-l autors'> 
             ¹ Pós-graduação (Especialização) em Acupuntura do Centro Universitário Celso Lisboa - 2022; Graduação em Educação física - Univesidade Salgado de Oliveira - 2008
             <br>
             ² Maciocia
          </p>
          <br>
          <br>
          <br>
          `
          
          ,
      }
  },
  methods: {
      articleResume() {
          this.aplicar = true,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.outputPostOne = `
          <p class='post'>
            A Teoria Yin-yang é o principal conceito aplicado à Medicina Tradicional Chinesa (MTC). 
            Teoria antiga que é, é conhecida em qualquer canto do mundo, até você provavelmente já ouviu falar;
            Yin-yang, fala de ciclos, de constância, de fases (mundanças), alternâncias etc. Tal conceito é simples, sendo que ao mesmo tempo profundo, 
            podemos dizer que aspectos da fisiologia, da patologia e do tratamento com base na medicina chinesa, podem, essencialmente, ser reduzidos
            a Yin-Yang².
            <br>
            Como primeiro 'post' deste despretencioso 'blog' para divulgação de conhecimentos mais aprofundados, no universo da MTC, não teria como deixar de
            
          </p>
          <br>
          `,
          this.outputPostTwo= `
          <p class='main-l autors'> 
             ¹ Pós-graduação (Especialização) em Acupuntura do Centro Universitário Celso Lisboa - 2022; Graduação em Educação física - Univesidade Salgado de Oliveira - 2008
             <br>
             ² Maciocia
          </p>
          <br>
          <br>
          <br>
        `
      },
      postTwo(){
        this.aplicar = false,
          this.aplicarTwo = true,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.outputPostOne = `
          <p class='post'>
          
          </p>
            
          `,
          this.outputPostTwo= `
          <p class='main-l autors'> 
             ¹ Pós-graduação (Especialização) em Acupuntura do Centro Universitário Celso Lisboa - 2022; Graduação em Educação física - Univesidade Salgado de Oliveira - 2008
          </p>
          <br>
          <br>
          <br>
        `
      },
      umSete() {
        this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = true,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.outputPostOne = 
          `
          <p>

          </p>
          <br>
          `
      },
      umUm(){
        this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = true,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.outputPostOne =
          `
          <h4>2011:</h4>
        <h4 style="text-align: left;">Novembro</h4>
          <ul class="main-l">
            <li>
              Término do curso de Formação de Instrutor de Krav-Maga - Bukan School of Krav-maga - Rio de Janeiro - RJ;
            </li>
          </ul>
          <br>
        <h4 style="text-align: left;">Março</h4>
          <ul class="main-l">
            <li>
              Início do curso de Formação de Instrutor de Krav-Maga - Bukan School of Krav-maga - Rio de Janeiro - RJ;
            </li>
          </ul>
          <br>
          <br>
          `
      },
      zeroOito(){
        this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = true,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.outputPostOne =
          `
          <h4>2008:</h4>
        <h4 style="text-align: left;">Fevereiro</h4>
          <ul class="main-l">
            <li>
              Término do curso de Graduação em Educação Física - Universidade Salgado de Oliveita - UNIVERSO;
            </li>
          </ul>
          <br>
          `
      },
      zeroCinco() {
        this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = true,
          this.aplicarSeven = false,
          this.outputPostOne =
          `
          <h4>2005:</h4>
        <h4 style="text-align: left;">Fevereiro</h4>
          <ul class="main-l">
            <li>
              Início do curso de Graduação em Educação Física - Universidade Salgado de Oliveita - UNIVERSO;
            </li>
          </ul>
          <br>
          `
      },
      oitoSeis () {
        this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = true,
          this.outputPostOne = 
          `
          <h4>1986:</h4>
        <h4 style="text-align: left;">Outubro</h4>
          <ul class="main-l">
            <li>
              Nascimento no dia 08 - Neves - São Gonçalo - RJ;
            </li>
          </ul>
          <br>
          `
      }
  }
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.years {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content:space-end;  
    align-self: center;
}
.years h4 {
  padding: 5px 10px;
  cursor: pointer;
}

.postTitle {
  color: #d8d8d880;
}

.postTitleHover {
  color: #e23a28;
}

.years a {
   color: #d8d8d880;
 }

@media only screen and (max-width: 820px) {
 .years h4, .years a{
   font-size: 1.2em;
 }
}

</style>
