<script setup>
import NavTopTwo from '../../components/NavTopTwo.vue'
import NavBottom from '../../components/NavBottom.vue'
</script>
<template>
  <div>
  <NavTopTwo/>
  <NavBottom/>

<div class='anima'>
      <!-- Início Cabeçalho principal da página -->
      <h1>{{ postTitle }}</h1>
      <h4>{{ subPostTitle }}</h4>
      <h5 class="main-r">
        <i class="fa-solid fa-user-graduate"></i> {{ autorOne }}
        <br>
        <i class="fa-solid fa-calendar-day"></i> {{date}} 
        <br>
        <i class="fa-solid fa-clock"></i> 07:00
      </h5>
      <!-- Fim Cabeçalho principal da página -->
      <div>
        <img src="/img/feedSeven.jpg" alt="Foto de uma articulação do joelho"  style="margin-left: 10px; width:360px; ">
      </div>
      <!--
      <div class='details'>
        <h4 @click='articleResume' class='postTitle' :class='{ postTitleHover: aplicar }'>
          Introdução
        </h4>
        <a href="/auriculoterapia-visao-oriental-ocidental.pdf" download="" class='postTitle'
          :class='{ postTitleHover: aplicarTwo }'>
          Download
        </a>
      </div>
      -->
      <div class='postTitleVHTML' v-html='outputPostOne'></div>

      <br>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  head() {
    return {
      title: [this.postTitle + this.subPostTitle + ' |' + this.area],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: [this.descript]
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: [this.key]
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
    }
  },
  data() {
    return {
      postTitle: 'O que é acupuntura?',
      subPostTitle: '', /* deixar com um espaço inicial */
      area: ' Blog | Deep Acupuntura', /* deixar com um espaço inicial */
      autorOne: 'Professor Leandro Cesar', /* deixar com um espaço inicial */
      autorTwo: '', /* deixar com um espaço inicial */
      autorTree: '', /* deixar com um espaço inicial */
      autorFour: '', /* deixar com um espaço inicial */
      autorFive: '', /* deixar com um espaço inicial */
      autorSix: '',  /* deixar com um espaço inicial */
      descript: '', /* descrição de no máximo 200 caracteres */
      key: ', , ', /* colocar 3 keywords */
      date: '22/08/2022',
      hours: '07:00',
      oneReeditionDate: '',
      oneReeditionHours: '',
      aplicar: true,
      aplicarTwo: 'true',
      aplicarRef: '',
      aplicarTree: '',
      aplicarFour: '',
      aplicarFive: '',
      aplicarSix: '',
      aplicarSeven: '',
      outputPostOne: `
           <!-- Início do conteúdo principal 
           
          <h4 style="margin-left: 10px; margin-right: 5px;">
        
      </h4>   
           -->   
    <p style="margin:0 10px 0 10px; font-size:1.1em;">
Acupuntura consiste na aplicação de agulhas em pontos específicos do corpo, chamados de ‘pontos de acupuntura’ ou ‘acupontos’, 
que são colocados sobre linhas energéticas chamadas de ‘meridianos’ ou ‘canais de energia’, para se obter efeitos terapêuticos 
diversos conforme o tipo de síndrome.
<br><br>
Por sua vez, síndromes são sinais e sintomas que são relatados pelo paciente/cliente. O diagnóstico feito pela Medicina Tradicional 
Chinesa (MTC), por métodos da observação, audição e olfação, interrogação e palpação, onde o “exterior reflete o interior”, revelam 
o aspecto externo do paciente, seu pulso e seus sintomas, encontrando a desarmonia interna do mesmo.
<br><br>
Você sabia, que o Projeto de Lei 2821/19 cria a Política de Práticas Integrativas e Complementares em Saúde (PNPIC), na faz com que a acupuntura, 
a Medicina Tradicional Chinesa e outros recursos terapêuticos sejam inclusas como Práticas Integrativas e Complementares em Saúde - PICS, em todos 
os níveis de atenção à saúde no âmbito do Sistema Único de Saúde – SUS?
<br><br>
A acupuntura só pode ser realizada por profissional competente, que fez uma especialização em Acupuntura, que seja feita por um profissional graduado 
na área da saúde, ou seja, não necessita ser médico como muitos acham, ou que o Conselho Regional de Medicina (CRM) tentar impor!
<br><br>

    </p>    
          `,
    }
  },
  methods: {
    articleResume() {
      this.aplicar = true,
        this.aplicarTwo = true,
        this.aplicarRef = false,
        this.outputPostOne = `
           <!-- Início do conteúdo principal -->   
          <h4 style="margin-left: 10px; margin-right: 5px;">
        Introdução
      </h4>   
    <p style="margin-left: 10px; margin-right: 5px;font-size:1.1em;">
Segundo Oleson (2003) a <b>auriculoterapia</b> é uma modalidade
de saúde em que a <b>superfície externa da orelha, ou aurícula, é
estimulada para aliviar condições patológicas em outras partes
do corpo</b>, isso embora, originalmente baseado sobre a antiga
prática chinesa de acupuntura, a <b>correspondência somatotópica
de partes do corpo a partes específicas da orelha</b> foi desenvolvido pela primeira vez na França moderna.
Para Dal Mas (2004), o emprego da Auriculoterapia no tratamento das patologias não é recente e no livro Nei-Ching, livro
que data mais de cinco mil anos atrás, já haviam relatos sobre
a auriculoterapia. Santos (2010) relata que a auriculoterapia é
<b>praticada há milênios pelo povo chinês e também por outras
culturas antigas, principalmente pelos egípcios</b>.
De acordo com Oleson (2003) esta prática pode ser praticada
por diversos profissionais da área da saúde, como: acupunturistas, dentistas, enfermeiros, osteopatas entre outros.    <p style="margin-left: 10px; margin-right: 5px; font-size:.9em;">
      ¹ Artigo - Revista Brasileira de Medicina Chinesa - Ano XI n° 34 pg.:26 a 28, ² Lucas Rocha Fiori Sobreira, Carla A. da S. M. Guimarães, Leandro César Ramos da Costa, Natália Paixão Santos da Silva, Patrique Machado de Sá - Formados em Acupuntura Pelo Centro Universitário Celso Lisboa; ³ Deborah Vieira Machado - Graduanda em Fisioterapia do Centro Universitário Celso Lisboa. 
    </p>    
          `
    },
    articleAnatomia() {
      this.aplicar = false,
        this.aplicarTwo = true,
        this.aplicarRef = false,
        this.outputPostOne = `
          <div>
      <h4 style="margin-left: 10px; margin-right: 5px;font-size:1.1em;">
        Anatomia
      </h4>
    </div>
    <p style="margin-left: 10px; margin-right: 5px;">
      O joelho é uma articulação sinovial com estruturas bem complexas. É formada pelos ossos do 
      fêmur, tíbia, e patela. Conectados pelos muitos componentes articulares para garantir sua 
      movimentação e estabilidade, permitindo sustentar grandes cargas para a mobilidade, necessárias
      para as atividades locomotoras do dia-a-dia.<sup> 2</sup>.
    </p>
    <div>
      <img src="/img/articulacao-do-joelho.png" alt="Foto de uma articulação do joelho" style="margin-left: 10px; height:400px;">
      <br>
      <sub style="margin-left: 10px; margin-right: 5px;">Corte sagital do Joelho direito (Rasch e Burke, 1986 p.340) <sup> 3</sup></sub>    
    </div>
    <p>
    </p>
    
    <!-- Fim do Conteúdo principal da página -->
          `
    },
    articleReferencia() {
      this.aplicar = false,
        this.aplicarRef = true,
        this.aplicarTwo = false,
        this.outputPostOne = `
      <h4 style="margin-left: 10px; margin-right: 5px;">Referências Bibliográficas:</h4>
      <p style="margin-left: 10px; margin-right: 5px;">
        1) (Macnicol, 2002)
        <br>
        2) Biomecânica Básica
        <br>
        3) Rasch e Burke    
      </p>
          `

    }
  }
}
</script>

<style scoped>
p {
  line-height: 2;
}

h1 {
  font-size: 1.1em;
  margin: 20px 0 0 10px;
  line-height: 1.1;
  color: #efc289;
}

h4 {
  font-size: 1em;
  margin: 5px 0 0 10px;
  cursor: pointer;  color: #fff;
}

h5 {
  margin: 0px 10px 20px 0px;
  text-align: right;
    color: #dbd1d1;
}

.details {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-end;
  align-self: center;
}

.details h4 {
  padding: 5px 10px;

}

.postTitle {
  color: #fff;
  font-size: .9em;
}

.postTitleVHTML {
  color: #fff;
  font-size: .9em;
}

.postTitleHover {
  font-size: 1em;
  color: #e23a28;
}

.details a {
  color: #ffffff90;
  text-decoration: none;
  font-weight: bold;
  font-size: 1em;
  font-size: .9em;
  margin: 5px 0 0 10px;
}
</style>