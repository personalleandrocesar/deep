<template>
  <div>

    <div class='main-four'>

    </div>
    <div class='main-five'>

      <div @click="personal" class='main-five-card'>
        
        <span><h4>Depressão</h4></span>
            <span class='white'>É um transtorno mental caracterizado por tristeza profunda persistente
            e aversão a atividades. Pode afetar os pensamentos, comportamentos, sentimentos e o bem-estar de uma pessoa.</span>
        
      </div>

      <br>
    </div>
  </div>
</template>
<script>
export default {
  scrollToTop: true,
  head: {
    title: 'Acupuntura| Terapias | Leandro Cesar',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Sobre Leandro Cesar Ramos da Costa, Personal Leandro Cesar, Professor Leandro Cesar',
        name: 'msapplication-TileColor', content: '#860d0d',
        name: 'theme-color', content: '#860d0d'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Personal, Personal Trainer, Niterói, São Gonçalo, Professor Leandro Cesar'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/img/favicon.svg' },
      { rel: 'apple-touch-icon', size: '180x180', href: '/img/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', size: '32x32', href: '/img/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', size: '16x16', href: '/img/favicon-16x16.png' },
      { rel: 'apple-touch-icon', size: '180x180', href: '/img/apple-touch-icon.png' },
      { rel: 'manifest', href: '/img/site.webmanifest' },
      { rel: 'mask-icon', href: '/img/safari-pinned-tab.svg', color: '#002937' }
    ],
  },
  data() {
    return {
      aplicar: '',
      aplicarTwo: '',
      aplicarTree: '',
      aplicarFour: '',
      aplicarFive: '',
      aplicarSix: '',
      aplicarSeven: '',
      aplicarEight: true,
      aplicarEduca: true,
      aplicarAcupu: '',
      acontecimentos: `
        <h4 style="margin-left: 10px;">Personal | Consultoria | Avaliação Física | Krav-maga</h4>
          <ul class="com-bullet com-indent">
            <li>
              Conlusão do curso de Pós-Graduação Lato-sensu em Acupuntura - Universidade Celso Lisboa - UCL;
            </li>
            <li>
              Finalizando o estágio em Acupuntura na Celso Lisboa - UCL;
            </li>
          </ul>
        <h4 style="margin-left: 10px;">Janeiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Site deepacupuntura.com no ar;
            </li>
            <li>
              Curso de aprimoramento teórico e prático de Acupuntura Escalpiana de Jiao Shunfa; 
            </li>
            <li>
              Início dos trabalhos da Deep Acupuntura na academia BodyClass;
            </li>
          </ul>
          
          `,
    }
  },
  methods: {
    doisUm() {
      this.aplicar = true,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.acontecimentos = `
        <h4 style="margin-left: 10px;"> Novembro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Pós-Graduação em Cinesiologia, Biomecânica e Treinamento Físico - Universidade 
              Castelo Branco - UCB;     
            </li>
          </ul>
          <h4 style="margin-left: 10px;"> Julho</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Pós-Graduação em Lesões e Doenças Musculoesqueléticas: Exercício Físico e Reabilitação - Universidade 
              Castelo Branco - UCB;
            </li>
          </ul>
        <h4 style="margin-left: 10px;"> Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Reinício do estágio em Acupuntura - Pós Pandemia (COVID-19);
            </li>
          </ul>
          `
    },
    umOito() {
      this.aplicar = false,
        this.aplicarTwo = true,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.acontecimentos = `
        <h4 style="margin-left: 10px;">Novembro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Pós-Graduação em Acupuntura - Universidade Celso Lisboa - UCB;
            </li>
          </ul>
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
        this.aplicarEight = false,
        this.acontecimentos =
        `
          <h4 style="margin-left: 10px;">Março</h4>
        <ul class="com-bullet com-indent">
          <li>
            Início do curso de Formação de Professor de Yoga - Shiva Studio - Rio de Janeiro - RJ;
          </li>
          </ul>
          `
    },
    umUm() {
      this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = true,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.acontecimentos =
        `
        <h4 style="margin-left: 10px;">Novembro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Término do curso de Formação de Instrutor de Krav-Maga - Bukan School of Krav-maga - Rio de Janeiro - RJ;
            </li>
          </ul>
        <h4 style="margin-left: 10px;">Março</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Formação de Instrutor de Krav-Maga - Bukan School of Krav-maga - Rio de Janeiro - RJ;
            </li>
          </ul>
          `
    },
    zeroOito() {
      this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = true,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.acontecimentos =
        `
        <h4 style="margin-left: 10px;">Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Término do curso de Graduação em Educação Física - Universidade Salgado de Oliveita - UNIVERSO;
            </li>
          </ul>
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
        this.aplicarEight = false,
        this.acontecimentos =
        `
        <h4 style="margin-left: 10px;">Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Graduação em Educação Física - Universidade Salgado de Oliveita - UNIVERSO;
            </li>
          </ul>
          `
    },
    oitoSeis() {
      this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = true,
        this.aplicarEight = false,
        this.acontecimentos =
        `
        <h4 style="margin-left: 10px;">Outubro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Nascimento no dia 08 - Neves - São Gonçalo - RJ;
            </li>
          </ul>
          `
    },
    doisDois() {
      this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = true,
        this.acontecimentos =
        `
          <h4 style="margin-left: 10px;">Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Conlusão do curso de Pós-Graduação Lato-sensu em Acupuntura - Universidade Celso Lisboa - UCL;
            </li>
            <li>
              Finalizando o estágio em Acupuntura na Celso Lisboa - UCL;
            </li>
          </ul>
        <h4 style="margin-left: 10px;">Janeiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Site deepacupuntura.com no ar;
            </li>
            <li>
              Curso de aprimoramento teórico e prático de Acupuntura Escalpiana de Jiao Shunfa; 
            </li>
            <li>
              Início dos trabalhos da Deep Acupuntura na academia BodyClass;
            </li>
          </ul>
          `
    },
    educa() {
      this.aplicarEduca = true,
        this.aplicarAcupu = false,
        this.projetos =
        `
          <h4 style="margin-left: 10px;">Personal | Consultoria</h4>
        <h5 style="text-align: left; margin:0; color: #ffffff90">Ativo</h5>
          <ul class="com-bullet com-indent">
            <li>
              Nascimento no dia 08 - Neves - São Gonçalo - RJ;
            </li>
          </ul>
          <br>
          <h4 style="margin-left: 10px;">EternFlow.com</h4>
        <h5 style="text-align: left; margin:0; color: #ffffff90">Em desenvolvimento</h5>
          <ul class="com-bullet com-indent">
            <li>
              Nascimento no dia 08 - Neves - São Gonçalo - RJ;
            </li>
          </ul>
          <br>
          `
    },
    acupu() {
      this.aplicarAcupu = true,
        this.aplicarEduca = false,
        this.projetos =
        `
          <h4 style="margin-left: 10px;">Deep Acupuntura</h4>
        <h5 style="text-align: left; margin:0; color: #ffffff90">Em Desenvolvimento</h5>
          <ul class="com-bullet com-indent">
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
<style scoped>
body {
  background: #fff;
  font-family: 'Philosopher', sans-serif;
  color: #aaa;
  line-height: 1.6;
}

iframe {
  margin-left: 10px;
}

a {
  text-decoration: none;
  color: #aaa;
}

i {
  color: #aaa;
  font-size: .9em;
  margin: auto;
}

code {
  font-size: 0.6em;
  margin-left: 15px;
  padding-left: 10px;
  border-left: solid 5px #eee;
  color: #888;
}

.divider {
  height: 15px;
  background-color: #dddddd54;
}

.nav-one {
  height: 35px;
  position: sticky;
  top: -1px;
}

.nav-one div {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
}

.nav-one a {
  text-decoration: none;
  margin: 0 14px 0 6px;
  font-size: 1.2em;
}

.nav-one i {
  color: #0000FF;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}

.profile {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 10px 0 5px 0;
  color: black;
}

.profile a {
  text-decoration: none;
  color: #aaa;
  font-size: .9em;
}

.profile img {
  height: 70px;
  border-radius: 50%;
  margin-left: 10px;
  padding: 0 25px 0 0;
}

.profile h1 {
  margin: 5px 0 0 -10px;
  font-size: 1.5em;
}

.profile h4 {
  margin: 0 0 0 -10px;
  font-size: .9em;
  font-weight: 100;
  color: #aaa;
}

.main-one {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px 0 15px 0;
  color: black;
}

.main-one div {
  margin: 0 0 0 15px;
}

.main-one a:nth-child(1) i,
.main-one a:nth-child(2) i {
  padding-right: 4px;
  margin: 0 0 0 3px;
}

.main-one a:nth-child(3) i {
  padding-right: 2px;
  margin: 0 0 0 2px;
}

.main-one a {
  margin: 0 0 0 10px;
  color: #555;
}

.main-two {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 15px 0 15px 0;
  color: black;
  box-shadow: 4px 4px 10px #bbb;
}

.main-tree {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  overflow-x: auto;
}

.main-tree i {
  font-size: 1.2em;
  color: #555;
}

.main-tree h5 {
  margin-left: 10px;
}

.main-four {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -5px 0 0 0;
  padding: 10px 0 10px 0;
  color: #fff;
  background-color: #860d0d;
  box-shadow: 0px 10px 5px #fff;
  overflow-x: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: collumn;
}

.main-four img {
  height: 70px;
  border-radius: 50%;
  margin-left: 10px;
  padding: 0 25px 0 0;
}

.main-four i {
  font-size: 1em;
  color: #fff;
}

.main-four h4 {
  margin: 10px 0 0 10px;
  color: #fff;
}

.main-four h5:nth-child(1) {
  margin: 0px auto 5px auto;
  color: #fff;
}

.main-four h5 {
  margin: 0px 10px 0px 10px;
  color: green;
}

.main-four div {
  border-radius: 3% 3% 3% 3%;
}

.main-four-card {
  margin: 0px 10px 20px 10px;
  border: solid .1px #dddddd54;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-four p {
  padding: 0px;
  margin: 10px 0 10px 10px;
  font-size: .9em;
}

.main-four .mini-profile {
  height: 6em;
  border-radius: 50%;
  margin: 10px 10px 0 10px;
  padding: 0 15px 0 0;
}

.main-five {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #fff;
  background-color: #860d0d;
  overflow-x: auto;
  height: 500px;
  display: flex;
  justify-content: flex-start;
  flex-direction: collumn;
}

.main-five img {
  height: 70px;
  border-radius: 50%;
  margin-left: 10px;
  padding: 0 25px 0 0;
}

.main-five i {
  font-size: 1em;
  color: #fff;
}

.main-five h4 {
  margin: 10px 0 0 10px;
  color: #fff;
}

.main-five h5:nth-child(1) {
  margin: 0px auto 5px auto;
  color: #fff;
}

.main-five h5 {
  margin: 0px 10px 0px 10px;
  color: #7FFFD4;
}

.main-five div {
  border-radius: 3% 3% 3% 3%;
}

.main-five-card {
  margin: 0px 10px 20px 10px;
  border: solid .1px #dddddd54;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px;
}

.main-five p {
  padding: 0px;
  margin: 10px 0 10px 10px;
  font-size: .9em;
}

.main-five .mini-profile {
  height: 6em;
  border-radius: 50%;
  margin: 10px 10px 0 10px;
  padding: 0 15px 0 0;
}

.mini-profile {
  height: 25px;
  border-radius: 50%;
  margin: 10px 0 0 0px;
  padding: 0 15px 0 0;
}

.dateYear {
  color: #ccc;
  padding: 0 10px 0 10px;
}

.dateYearHover {
  color: #000;
  border-bottom: solid .2px #000;
  padding: 0 10px 0 10px;
}

@media only screen and (max-width: 369px) {}</style>