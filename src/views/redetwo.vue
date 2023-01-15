<template>
<div id='app'>

      <div id="main">
          <div class="main-c"><i class="fas fasi fasi-rede fa-brain"></i></div>  
          <!-- <a href="sobre#teste">teste</a> -->
         
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div id="main">
          <div class="main-c"><i class="fas fasi-rede fa-seedling"></i></div>  
          <!-- <a href="sobre#teste">teste</a> -->
         
    </div>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div id="main">
          <div class="main-c"><i class="fas fasi-rede fa-diagnoses"></i></div>  
          <!-- <a href="sobre#teste">teste</a> -->
         
    </div>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    </div>
</template>

<script>
export default {
  scrollToTop: true,
  head: {
    title: 'Rede | Deep Acupuntura',
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
          aplicar : '',
          aplicarTwo : '',
          aplicarTree : 'true',
          aplicarFour : '',
          aplicarFive : '',
          aplicarSix : '',
          aplicarSeven : '',
          acontecimentos: `
          <h4>2022:</h4>
          <h4 style="text-align: left;"> Janeiro</h4>
          <p class="main-l">
            <i class="fas fa-chevron-circle-right"></i> Site deepacupuntura.com no ar;
            
          </p>
          <br>
          
          
          
          `,
      }
  },
  methods: {
      doisDois() {
        this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = true,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.acontecimentos = 
          `
          <h4>2022:</h4>
          <h4 style="text-align: left;"> Janeiro</h4>
          <p class="main-l">
            <i class="fas fa-chevron-circle-right"></i> Site deepacupuntura.com no ar;
            
          </p>
          <br>
          `
      },
      doisUm() {
          this.aplicar = true,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.acontecimentos = `
          <h4>2021:</h4>
          <h4 style="text-align: left;"> Julho</h4>
          <p class="main-l">
            <i class="fas fa-chevron-circle-right"></i> Início do curso de Pós-Graduação em Lesões e Doenças Musculoesqueléticas: Exercício Físico e Reabilitação;
            
          </p>
          <br>
        <h4 style="text-align: left;"> Fevereiro</h4>
          <p class="main-l">
             <i class="fas fa-chevron-circle-right"></i> Início do curso de Pós-Graduação em Cinesiologia, Biomecânica e Treinamento Físico - Universidade 
              Candido Mendes - UCAM;     
              <br>
            <i class="fas fa-chevron-circle-right"></i> Reinício do estágio em Acupuntura - Pós Pandemia (COVID-19);

            
          </p>
          <br>
          `
      },
      umOito(){
        this.aplicar = false,
          this.aplicarTwo = true,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.acontecimentos = `
          <h4>2018:</h4>
        <h4 style="text-align: left;">Novembro</h4>
          <p class="main-l">
            <i class="fas fa-chevron-circle-right"></i> Início do curso de Pós-Graduação em Acupuntura - Universidade Celso Lisboa - UCB;
            
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
          this.acontecimentos =
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
          this.acontecimentos =
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
          this.acontecimentos =
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
          this.acontecimentos = 
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

