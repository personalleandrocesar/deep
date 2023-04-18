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
    <h1>{{postTitle}}</h1><h4>{{subPostTitle}}</h4>
    <h5 class="main-r"> 
    Autor: {{autorOne}}
      <br>
      Criado: <i class="fa-solid fa-calendar-day"></i> {{date}} <i class="fa-solid fa-clock"></i> {{hours}}
      
    </h5>
    <!-- Fim Cabeçalho principal da página -->
    <div class='details'>
      <h4 @click='articleIntroducao()' class='postTitle' :class='{ postTitleHover: aplicar }'>
              Introdução
    </h4>
      <h4 @click='articleConceitos()' class='postTitle' :class='{ postTitleHover: aplicarTwo }'>
              Conceitos
    </h4>
      <h4 @click='articleEstacoes()' class='postTitle' :class='{ postTitleHover: aplicarTree }'>
              Estações
    </h4>
      <h4 @click='articleOrgaos()' class='postTitle' :class='{ postTitleHover: aplicarFour }'>
              Orgãos/Vísceras
    </h4>
    </div>  
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
      title: [this.postTitle + this.subPostTitle + ' |' + this.area + ' |' + this.autorOne],
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
        postTitle: 'A Teoria Yin-Yang¹',
        subPostTitle: '', /* deixar com um espaço inicial */
        area: ' Acupuntura | Blog', /* deixar com um espaço inicial */
        autorOne: ' Leandro Cesar¹', /* deixar com um espaço inicial */
        autorTwo: '', /* deixar com um espaço inicial */
        autorTree: '', /* deixar com um espaço inicial */
        autorFour: '', /* deixar com um espaço inicial */
        autorFive: '', /* deixar com um espaço inicial */
        autorSix: '',  /* deixar com um espaço inicial */
        descript: '', /* descrição de no máximo 200 caracteres */
        key: ', , ', /* colocar 3 keywords */
        date: '06/06/2022',
        hours: '07:00',
        oneReeditionDate: '',
        oneReeditionHours: '',
        aplicar : true,
        aplicarTwo : '',
        aplicarRef : '',
        aplicarTree : '',
        aplicarFour : '',
        aplicarFive : '',
        aplicarSix : '',
        aplicarSeven : '',
        outputPostOne: `
           <!-- Início do conteúdo principal -->   
          <h4 style="margin-left: 10px; margin-right: 5px;">
        Introdução
      </h4>   
    <p style="margin-left: 10px; margin-right: 5px;font-size:1.1em;">
      A Medicina Tradicional Chinesa (MTC) tem sua <b>origem</b> das combinações da prática da <b>moxabustão, acupuntura e da 
      farmacologia natural</b> cujos efeitos e resultados eram eficazes e precisos. A Acupuntura é o conjunto de <b>conhecimentos 
      teórico-empíricos</b> da MTC através da aplicação de <b>agulhas e de moxas</b>. Existem diversas <b>teorias na MTC</b> para podermos tratar
       patologias, como a <b>teoria dos 5 Elementos, Princípio de Geração (Ciclo Sheng), Princípio de Controle (Dominância – Ciclo KE), 
       a teoria Yin/Yang, teoria dos meridianos (canais de energia) e a teoria dos canais unitários</b>. A dor lombar é o principal 
       problema de saúde entre os países ocidentais industrializados e uma das principais causas de despesas médicas, ausência 
       e incapacidade. Existem 4 métodos <b>diagnósticos na MTC</b> que são a <b>inspeção, audição e olfação, anamnese e palpação de pulso 
       e palpação</b>. A <b>lombalgia TaiYang</b> precisa ser diferenciada da lombalgia da protusão e hérnia discais lombar, esta apresenta 
       perda de força muscular, alteração da sensibilidade, hipotrofia dos músculos da perna e sinal positivo no Teste de Lasègue. 
       Pela <b>literatura</b> relacionada à lombalgia Tai Yang, <b>houve evidência consistente da relevância do tratamento da acupuntura 
       para tal patologia</b>, porém é sugestivo estudos mais aprofundados sobre o tema. <b>Objetivos:</b> <i> identificar e diferenciar os 
       diversos tipos de lombalgias dentro da visão ocidental e oriental e assim elaborar o tratamento ideal para os pacientes 
       diagnosticados com Lombalgia TaiYang.</i>
    </p>
    <p style="margin-left: 10px; margin-right: 5px; font-size:.9em;">
      ¹ TCC do Curso de Pós-graduação em Acupuntura do Centro Universitário Celso Lisboa ² FIORI; PAIXÃO; GUIMARÃES; DA COSTA; MACHADO, pós-graduandos do Curso de Acupuntura do Centro Universitário 
             Celso Lisboa; ³ DE MORAES, Cláudio, professor e orientador. 
    </p>         
          `,
      }
  },
  methods: {
      articleIntroducao() {
          this.aplicar = true,
          this.aplicarTwo = false,
          this.aplicarFour = false,
          this.aplicarTree = false,
          this.aplicarRef = false,
          this.outputPostOne = `
            <!-- Início do conteúdo principal -->   
          <h4 style="margin-left: 10px; margin-right: 5px;">
        Introdução
      </h4>   
    <p style="margin-left: 10px; margin-right: 5px;font-size:1.1em;">
      A Medicina Tradicional Chinesa (MTC) tem sua <b>origem</b> das combinações da prática da <b>moxabustão, acupuntura e da 
      farmacologia natural</b> cujos efeitos e resultados eram eficazes e precisos. A Acupuntura é o conjunto de <b>conhecimentos 
      teórico-empíricos</b> da MTC através da aplicação de <b>agulhas e de moxas</b>. Existem diversas <b>teorias na MTC</b> para podermos tratar
       patologias, como a <b>teoria dos 5 Elementos, Princípio de Geração (Ciclo Sheng), Princípio de Controle (Dominância – Ciclo KE), 
       a teoria Yin/Yang, teoria dos meridianos (canais de energia) e a teoria dos canais unitários</b>. A dor lombar é o principal 
       problema de saúde entre os países ocidentais industrializados e uma das principais causas de despesas médicas, ausência 
       e incapacidade. Existem 4 métodos <b>diagnósticos na MTC</b> que são a <b>inspeção, audição e olfação, anamnese e palpação de pulso 
       e palpação</b>. A <b>lombalgia TaiYang</b> precisa ser diferenciada da lombalgia da protusão e hérnia discais lombar, esta apresenta 
       perda de força muscular, alteração da sensibilidade, hipotrofia dos músculos da perna e sinal positivo no Teste de Lasègue. 
       Pela <b>literatura</b> relacionada à lombalgia Tai Yang, <b>houve evidência consistente da relevância do tratamento da acupuntura 
       para tal patologia</b>, porém é sugestivo estudos mais aprofundados sobre o tema. <b>Objetivos:</b> <i> identificar e diferenciar os 
       diversos tipos de lombalgias dentro da visão ocidental e oriental e assim elaborar o tratamento ideal para os pacientes 
       diagnosticados com Lombalgia TaiYang.</i>
    </p>
    <p style="margin-left: 10px; margin-right: 5px; font-size:.9em;">
      ¹ TCC do Curso de Pós-graduação em Acupuntura do Centro Universitário Celso Lisboa ² FIORI; PAIXÃO; GUIMARÃES; DA COSTA; MACHADO, pós-graduandos do Curso de Acupuntura do Centro Universitário 
             Celso Lisboa; ³ DE MORAES, Cláudio, professor e orientador. 
    </p>  
          `
},
      articleConceitos() {
          this.aplicar = false,
          this.aplicarTwo = true,
          this.aplicarTree = false,
          this.aplicarRef = false,
          this.outputPostOne = `
          <div>
      <h4 style="margin-left: 10px; margin-right: 5px;">
        Anatomia
      </h4>
    </div>
    <p style="margin-left: 10px; margin-right: 5px;font-size:1.1em;">
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
      articleEstacoes() {
          this.aplicar = false,
          this.aplicarRef = true,
          this.aplicarTwo = false,
          this.aplicarFour = false,
          this.aplicarTree = true,
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
          
},
      articleOrgaos() {
          this.aplicar = false,
          this.aplicarRef = true,
          this.aplicarTwo = false,
          this.aplicarFour = true,
          this.aplicarTree = false,
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

b {
  color: #e23a28;
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
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-end;
  align-self: center;
  overflow-x: auto;

}

.details h4 {
  padding: 5px 10px;

}

.postTitle {
  color: #d8d8d890;
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