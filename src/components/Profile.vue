<template>
    <div>

        <div class='profile'>
            <img src='../assets/img/MyLogoBold.svg' alt=''>

            <div>
                <h1>Deep Acupuntura</h1>
                <h4>Clinica de Medicina Chinesa</h4>
            </div>


        </div>
        <div class='main-two'>
            <code>
              Tratando a raiz do seu problema
        </code>
            <!-- <code v-else-if="Math.random() > 0.5">
              <i class="fa-solid fa-quote-left"></i> Nascer, morrer, renascer ainda, progredir sempre, tal é a lei.<br>
              Allan Kardec
            </code>
        <code v-else-if="Math.random() > 0.5">
              <i class="fa-solid fa-quote-left"></i> Para crer, não basta ver, é necessário compreender.
              <br>
              Allan Kardec
            </code>
        <code v-else>
              <i class="fa-solid fa-quote-left"></i> De uma forma ou de outra, se a evolução humana é para continuar, teremos de aprender a apreciar mais a vida completamente.
              <br>
              Mihaly Csikszentmihalyi
            </code> -->
        </div>

        <div class='main-tree'>
            <div class='homeTwo'>
                <div class='homeTwoDot'>
                    <RouterLink to="">Acupuntura Sistêmica</RouterLink>
                </div>
                <div class='homeTwoDot'>
                    <RouterLink to="">Auriculoterapia</RouterLink>
                </div>
                <div class='homeTwoDot'>
                    <RouterLink to="">Ventosaterapia</RouterLink>
                </div>
                <div class='homeTwoDot'>
                    <RouterLink to="">Craniopuntura</RouterLink>
                </div>
                <div class='homeTwoDot'>
                    <RouterLink to="">Fórmulas Magistrais Chinesas</RouterLink>
                </div>
                <!--
                  // <div @click='acupuntura()' class='homeTwoDot' :class='{ selectTitle: aplicarAcu }'>Acupuntura Sistêmica</div>
                  // <div @click='craniopuntura()' class='homeTwoDot' :class='{ selectTitle: aplicarCran }'>Craniopuntura</div>
                  // <div @click='auriculo()' class='homeTwoDot' :class='{ selectTitle: aplicarAur }'>Auriculoterapia</div>
                  // <div @click='ventosa()' class='homeTwoDot' :class='{ selectTitle: aplicarVen }'>Ventosaterapia</div>
                  -->
            </div>
            <br>
            


            <!-- <div class='divider'></div> -->


        </div>
        <!-- 
    <div id='main-white'><br>
      <h4 style='text-transform: uppercase;'>2002:</h4>
      <h5 class='clientesGraph'>25 clientes</h5>
      <h5 class='clientesGraph'>250 sessões de acupuntura</h5>
      <h5 class='clientesGraph'>250 sessões de acupuntura</h5>
      <h5 class='clientesGraph'>250 sessões de acupuntura</h5>
      <div class="clientesGraph"></div>
      <br>
    </div>
    
  -->

      

    </div>

</template>
<script>
export default {
    scrollToTop: true,
    transition: {
        name: 'page',
        mode: 'ease-in'
    },
    head: {
        title: 'Agenda - Deep Acupuntura',
        htmlAttrs: {
            lang: 'pt-br'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { hid: 'keywords', name: 'description', content: 'Acupuntura' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'msapplication-TileColor', content: '#860d0d' },
            { name: 'theme-color', content: '#860d0d' }
        ],
        link: [
            { rel: 'apple-touch-icon', size: '180x180', href: '/img/MyLogoBoldFundo.png' },
            { rel: 'icon', type: 'image/png', size: '32x32', href: '/img/MyLogoBoldFundo.png' },
            { rel: 'icon', type: 'image/png', size: '16x16', href: '/img/MyLogoBoldFundo.png' },
            { rel: 'apple-touch-icon', size: '180x180', href: '/img/apple-touch-icon.png' },
            { rel: 'manifest', href: '/img/site.webmanifest' },
            { rel: 'mask-icon', href: '/img/safari-pinned-tab.svg', color: '#860d0d' }
        ]
    },
    data() {
        return {
            aplicar: '',
            output: '',
            aplicarAcu: '',
            aplicarAur: '',
            aplicarVen: '',
            aplicarForm: '',
            aplicarGua: '',
            aplicarCran: '',
            aplicarAcu: '',
            aplicarAur: '',
            aplicarVen: '',
            aplicar: '',
            aplicarTwo: '',
            aplicarTree: '',
            aplicarFour: '',
            aplicarFive: '',
            aplicarSix: '',
            aplicarSeven: '',
            aplicarEight: '',
            aplicarNine: '',
            aplicarTen: '',
            aplicarEleven: '',
            aplicarTwelve: '',
            aplicarThirteen: '',
            aplicarFourteen: '',
            rSegunda: 'Segunda',
            rTerca: 'Terça',
            rQuarta: 'Quarta',
            rQuinta: 'Quinta',
            rSexta: 'Sexta',
            rSabado: 'Sábado',
            rCefaleia: 'Cefaleia',
            rBaixaImunidade: 'Baixa Imunidade',
            rBurnout: 'Burnout',
            rLaringite: 'Laringite',
            rInsonia: 'Insônia',
            rZumbido: 'Zumbido',
            rLabirintite: 'Labirintite',
            rSinusite: 'Sinusite',
        }
    },
    methods: {
        acupuntura() {
            this.aplicarAcu = true,
                this.aplicarAur = false,
                this.aplicarVen = false,
                this.aplicarCran = false,
                this.aplicar = true,
                this.aplicarTwo = true,
                this.aplicarTree = true,
                this.aplicarFour = true,
                this.aplicarFive = true,
                this.aplicarSix = true,
                this.aplicarSeven = true,
                this.aplicarEight = true,
                this.aplicarNine = true,
                this.aplicarTen = true,
                this.aplicarEleven = true,
                this.aplicarTwelve = true,
                this.aplicarThirteen = true,
                this.aplicarFourteen = true,
                this.rSegunda = 'Segunda',
                this.rTerca = 'Terça',
                this.rQuarta = 'Quarta',
                this.rQuinta = 'Quinta',
                this.rSexta = 'Sexta',
                this.rSabado = 'Sábado',
                this.rCefaleia = 'Cefaleia',
                this.rBaixaImunidade = 'Baixa Imunidade',
                this.rBurnout = 'Burnout',
                this.rLaringite = 'Laringite',
                this.rInsonia = 'Insônia',
                this.rZumbido = 'Zumbido',
                this.rLabirintite = 'Labirintite',
                this.rSinusite = 'Sinusite'
        },
        craniopuntura() {
            this.aplicarAcu = false,
                this.aplicarAur = false,
                this.aplicarVen = false,
                this.aplicarCran = true,
                this.aplicar = true,
                this.aplicarTwo = true,
                this.aplicarTree = true,
                this.aplicarFour = true,
                this.aplicarFive = true,
                this.aplicarSix = true,
                this.aplicarSeven = true,
                this.aplicarCran = true,
                this.aplicarEight = true,
                this.aplicarNine = true,
                this.aplicarTen = true,
                this.aplicarEleven = true,
                this.aplicarCran = true,
                this.aplicarTwelve = true,
                this.aplicarThirteen = true,
                this.aplicarFourteen = true,
                this.rSegunda = 'Segunda',
                this.rTerca = 'Terça',
                this.rQuarta = 'Quarta',
                this.rQuinta = 'Quinta',
                this.rSexta = 'Sexta',
                this.rSabado = 'Sábado',
                this.rCefaleia = 'Cefaleia',
                this.rBaixaImunidade = 'Baixa Imunidade',
                this.rBurnout = 'Burnout',
                this.rLaringite = 'Laringite',
                this.rInsonia = 'Insônia',
                this.rZumbido = 'Zumbido',
                this.rLabirintite = 'Labirintite',
                this.rSinusite = 'Sinusite'
        },
        auriculo() {
            this.aplicarAur = true,
                this.aplicarAcu = false,
                this.aplicarVen = false,
                this.aplicar = true,
                this.aplicarCran = false,
                this.aplicarTwo = true,
                this.aplicarTree = true,
                this.aplicarFour = true,
                this.aplicarFive = true,
                this.aplicarSix = true,
                this.aplicarSeven = true,
                this.aplicarEight = true,
                this.aplicarNine = true,
                this.aplicarTen = true,
                this.aplicarEleven = true,
                this.aplicarTwelve = true,
                this.aplicarThirteen = true,
                this.aplicarFourteen = true,
                this.rSegunda = 'Segunda',
                this.rTerca = 'Terça',
                this.rQuarta = 'Quarta',
                this.rQuinta = 'Quinta',
                this.rSexta = 'Sexta',
                this.rSabado = 'Sábado',
                this.rCefaleia = 'Cefaleia',
                this.rBaixaImunidade = 'Baixa Imunidade',
                this.rBurnout = 'Burnout',
                this.rLaringite = 'Laringite',
                this.rInsonia = 'Insônia',
                this.rZumbido = 'Zumbido',
                this.rLabirintite = 'Labirintite',
                this.rSinusite = 'Sinusite'
        },
        ventosa() {
            this.aplicarVen = true,
                this.aplicarCran = true,
                this.aplicarAcu = false,
                this.aplicarAur = false,
                this.aplicar = false,
                this.aplicarCran = false,
                this.aplicarTwo = false,
                this.aplicarTree = true,
                this.aplicarFour = true,
                this.aplicarFive = false,
                this.aplicarSix = false,
                this.aplicarSeven = false,
                this.aplicarEight = false,
                this.aplicarNine = false,
                this.aplicarTen = false,
                this.aplicarEleven = false,
                this.aplicarTwelve = false,
                this.aplicarThirteen = false,
                this.aplicarFourteen = false,
                this.rSegunda = 'Segunda',
                this.rTerca = 'Terça',
                this.rQuarta = 'Quarta',
                this.rQuinta = 'Quinta',
                this.rSexta = 'Sexta',
                this.rSabado = 'Sábado',
                this.rCefaleia = 'Cefaleia',
                this.rBaixaImunidade = 'Baixa Imunidade',
                this.rBurnout = 'Burnout',
                this.rLaringite = 'Laringite',
                this.rInsonia = 'Insônia',
                this.rZumbido = 'Zumbido',
                this.rLabirintite = 'Labirintite',
                this.rSinusite = 'Sinusite'
        },
        Segunda() {
            this.aplicarAcu = true,
                this.aplicarAur = true,
                this.aplicarCran = true,
                this.aplicarVen = false,
                this.aplicarGua = false,
                this.aplicarForm = false,
                this.aplicar = true,
                this.aplicarTwo = false,
                this.aplicarTree = false,
                this.aplicarFour = false,
                this.aplicarFive = false,
                this.aplicarSix = false,
                this.aplicarSeven = false,
                this.aplicarEight = false,
                this.aplicarNine = false,
                this.aplicarTen = false,
                this.aplicarEleven = false,
                this.aplicarTwelve = false,
                this.aplicarThirteen = false,
                this.aplicarFourteen = false,
                this.rTerca = 'Terça',
                this.rSegunda = `<span><h4>Segunda</h4></span>
          <h4 class='white dot-index'>- 08:00 - 09:00 </h4>
          <!-- 
            <h4 class='white dot-index'>- 07:00 - 08:00 </h4>
            <h4 class='white dot-index'>- 09:00 - 10:00 </h4>
            <h4 class='white dot-index'>- 10:00 - 11:00 </h4>
            <h4 class='white dot-index'>- 11:00 - 12:00 </h4>
            <h4 class='white dot-index'>- 12:00 - 13:00 </h4>
            <h4 class='white dot-index'>- 13:00 - 14:00 </h4>
            <h4 class='white dot-index'>- 14:00 - 15:00 </h4>
            <h4 class='white dot-index'>- 15:00 - 16:00 </h4>
            <h4 class='white dot-index'>- 16:00 - 17:00 </h4>
            <h4 class='white dot-index'>- 17:00 - 18:00 </h4>
            <h4 class='white dot-index'>- 18:00 - 19:00 </h4>
            -->
          <h4 class='white dot-index'>- 19:00 - 20:00 </h4>
          <h4 class='white dot-index'>- 20:00 - 21:00 </h4>
          `,
                this.rQuarta = 'Quarta',
                this.rQuinta = 'Quinta',
                this.rSexta = 'Sexta',
                this.rSabado = 'Sábado',
                this.rCefaleia = 'Cefaleia',
                this.rBaixaImunidade = 'Baixa Imunidade',
                this.rBurnout = 'Burnout',
                this.rLaringite = 'Laringite',
                this.rInsonia = 'Insônia',
                this.rZumbido = 'Zumbido',
                this.rLabirintite = 'Labirintite',
                this.rSinusite = 'Sinusite'
        },
        Terca() {
            this.aplicarAcu = true,
                this.aplicarAur = true,
                this.aplicarCran = true,
                this.aplicarVen = false,
                this.aplicarGua = false,
                this.aplicarForm = false,
                this.aplicar = false,
                this.aplicarTwo = true,
                this.aplicarTree = false,
                this.aplicarFour = false,
                this.aplicarFive = false,
                this.aplicarSix = false,
                this.aplicarSeven = false,
                this.aplicarEight = false,
                this.aplicarNine = false,
                this.aplicarTen = false,
                this.aplicarEleven = false,
                this.aplicarTwelve = false,
                this.aplicarThirteen = false,
                this.aplicarFourteen = false,
                this.rSegunda = 'Segunda',
                this.rTerca = `<span><h4>Terça</h4></span>
          <h4 class='white dot-index'>- 07:00 - 08:00 </h4>
          <h4 class='white dot-index'>- 08:00 - 09:00 </h4>
          <h4 class='white dot-index'>- 11:00 - 12:00 </h4>
          <!-- 
            <h4 class='white dot-index'>- 09:00 - 10:00 </h4>
            <h4 class='white dot-index'>- 10:00 - 11:00 </h4>
            <h4 class='white dot-index'>- 12:00 - 13:00 </h4>
            <h4 class='white dot-index'>- 16:00 - 17:00 </h4>
            <h4 class='white dot-index'>- 20:00 - 21:00 </h4>
            -->
          <h4 class='white dot-index'>- 13:00 - 14:00 </h4>
          <h4 class='white dot-index'>- 14:00 - 15:00 </h4>
          <h4 class='white dot-index'>- 15:00 - 16:00 </h4>
          <h4 class='white dot-index'>- 17:00 - 18:00 </h4>
          <h4 class='white dot-index'>- 18:00 - 19:00 </h4>
          <h4 class='white dot-index'>- 19:00 - 20:00 </h4>
          `,
                this.rQuarta = 'Quarta',
                this.rQuinta = 'Quinta',
                this.rSexta = 'Sexta',
                this.rSabado = 'Sábado',
                this.rCefaleia = 'Cefaleia',
                this.rBaixaImunidade = 'Baixa Imunidade',
                this.rBurnout = 'Burnout',
                this.rLaringite = 'Laringite',
                this.rInsonia = 'Insônia',
                this.rZumbido = 'Zumbido',
                this.rLabirintite = 'Labirintite',
                this.rSinusite = 'Sinusite'
        },
        Quarta() {
            this.aplicarAcu = true,
                this.aplicarAur = true,
                this.aplicarVen = false,
                this.aplicarTwo = false,
                this.aplicarCran = false,
                this.aplicar = false,
                this.aplicarTree = false,
                this.aplicarFour = false,
                this.aplicarFive = true,
                this.aplicarSix = false,
                this.aplicarSeven = false,
                this.aplicarEight = false,
                this.aplicarNine = false,
                this.aplicarTen = false,
                this.aplicarEleven = false,
                this.aplicarTwelve = false,
                this.aplicarThirteen = false,
                this.aplicarFourteen = false,
                this.rSegunda = 'Segunda',
                this.rTerca = 'Terça',
                this.rQuarta = `<span><h4>Quarta</h4></span>
          <h4 class='white dot-index'>- 07:00 - 08:00 </h4>
          <h4 class='white dot-index'>- 11:00 - 12:00 </h4>
          <!-- 
            <h4 class='white dot-index'>- 08:00 - 09:00 </h4>
            <h4 class='white dot-index'>- 09:00 - 10:00 </h4>
            <h4 class='white dot-index'>- 10:00 - 11:00 </h4>
            <h4 class='white dot-index'>- 12:00 - 13:00 </h4>
            <h4 class='white dot-index'>- 14:00 - 15:00 </h4>
            <h4 class='white dot-index'>- 15:00 - 16:00 </h4>
            <h4 class='white dot-index'>- 16:00 - 17:00 </h4>
            <h4 class='white dot-index'>- 18:00 - 19:00 </h4>
            -->
          <h4 class='white dot-index'>- 13:00 - 14:00 </h4>
          <h4 class='white dot-index'>- 17:00 - 18:00 </h4>
          <h4 class='white dot-index'>- 19:00 - 20:00 </h4>
          <h4 class='white dot-index'>- 20:00 - 21:00 </h4>
          `,
                this.rQuinta = 'Quinta',
                this.rSexta = 'Sexta',
                this.rSabado = 'Sábado',
                this.rCefaleia = 'Cefaleia',
                this.rBaixaImunidade = 'Baixa Imunidade',
                this.rBurnout = 'Burnout',
                this.rLaringite = 'Laringite',
                this.rInsonia = 'Insônia',
                this.rZumbido = 'Zumbido',
                this.rLabirintite = 'Labirintite',
                this.rSinusite = 'Sinusite'
        },
        Quinta() {
            this.aplicarAcu = true,
                this.aplicarAur = true,
                this.aplicarCran = false,
                this.aplicarVen = true,
                this.aplicarGua = true,
                this.aplicarForm = false,
                this.aplicar = false,
                this.aplicarCran = false,
                this.aplicarTwo = false,
                this.aplicarTree = true,
                this.aplicarFour = false,
                this.aplicarFive = false,
                this.aplicarSix = false,
                this.aplicarSeven = false,
                this.aplicarEight = false,
                this.aplicarNine = false,
                this.aplicarTen = false,
                this.aplicarEleven = false,
                this.aplicarTwelve = false,
                this.aplicarThirteen = false,
                this.aplicarFourteen = false,
                this.rSegunda = 'Segunda',
                this.rTerca = 'Terça',
                this.rQuarta = 'Quarta',
                this.rQuinta = `<span><h4>Quinta</h4></span>
          <h4 class='white dot-index'>- 07:00 - 08:00 </h4>
          <h4 class='white dot-index'>- 08:00 - 09:00 </h4>
          <h4 class='white dot-index'>- 11:00 - 12:00 </h4>
          <!-- 
            <h4 class='white dot-index'>- 09:00 - 10:00 </h4>
            <h4 class='white dot-index'>- 10:00 - 11:00 </h4>
            <h4 class='white dot-index'>- 12:00 - 13:00 </h4>
            <h4 class='white dot-index'>- 16:00 - 17:00 </h4>
            <h4 class='white dot-index'>- 19:00 - 20:00 </h4>
            <h4 class='white dot-index'>- 20:00 - 21:00 </h4>
            -->
            <h4 class='white dot-index'>- 13:00 - 14:00 </h4>
            <h4 class='white dot-index'>- 14:00 - 15:00 </h4>
            <h4 class='white dot-index'>- 15:00 - 16:00 </h4>
          <h4 class='white dot-index'>- 17:00 - 18:00 </h4>
          <h4 class='white dot-index'>- 18:00 - 19:00 </h4>
          `,
                this.rSexta = 'Sexta',
                this.rSabado = 'Sábado',
                this.rCefaleia = 'Cefaleia',
                this.rBaixaImunidade = 'Baixa Imunidade',
                this.rBurnout = 'Burnout',
                this.rLaringite = 'Laringite',
                this.rInsonia = 'Insônia',
                this.rZumbido = 'Zumbido',
                this.rLabirintite = 'Labirintite',
                this.rSinusite = 'Sinusite'
        },
        Sexta() {
            this.aplicarAcu = true,
                this.aplicarAur = true,
                this.aplicarCran = false,
                this.aplicarVen = true,
                this.aplicarGua = true,
                this.aplicarForm = false,
                this.aplicar = false,
                this.aplicarTwo = false,
                this.aplicarTree = false,
                this.aplicarFour = true,
                this.aplicarFive = false,
                this.aplicarSix = false,
                this.aplicarSeven = false,
                this.aplicarEight = false,
                this.aplicarNine = false,
                this.aplicarTen = false,
                this.aplicarEleven = false,
                this.aplicarTwelve = false,
                this.aplicarThirteen = false,
                this.aplicarFourteen = false,
                this.rSegunda = 'Segunda',
                this.rTerca = 'Terça',
                this.rQuarta = 'Quarta',
                this.rQuinta = 'Quinta',
                this.rSexta = `<span><h4>Sexta</h4></span>
          <h4 class='white dot-index'>- 07:00 - 08:00 </h4>
          <h4 class='white dot-index'>- 10:00 - 11:00 </h4>
          <h4 class='white dot-index'>- 11:00 - 12:00 </h4>
          <!-- 
            <h4 class='white dot-index'>- 08:00 - 09:00 </h4>
            <h4 class='white dot-index'>- 09:00 - 10:00 </h4>
            <h4 class='white dot-index'>- 12:00 - 13:00 </h4>
            <h4 class='white dot-index'>- 14:00 - 15:00 </h4>
            <h4 class='white dot-index'>- 15:00 - 16:00 </h4>
            <h4 class='white dot-index'>- 16:00 - 17:00 </h4>
            <h4 class='white dot-index'>- 18:00 - 19:00 </h4>
            -->
            <h4 class='white dot-index'>- 13:00 - 14:00 </h4>
            <h4 class='white dot-index'>- 17:00 - 18:00 </h4>
          <h4 class='white dot-index'>- 19:00 - 20:00 </h4>
          <h4 class='white dot-index'>- 20:00 - 21:00 </h4>
`,
                this.rSabado = 'Sábado',
                this.rCefaleia = 'Cefaleia',
                this.rBaixaImunidade = 'Baixa Imunidade',
                this.rBurnout = 'Burnout',
                this.rLaringite = 'Laringite',
                this.rInsonia = 'Insônia',
                this.rZumbido = 'Zumbido',
                this.rLabirintite = 'Labirintite',
                this.rSinusite = 'Sinusite'
        },
        Sábado() {
            this.aplicarAcu = true,
                this.aplicarAur = true,
                this.aplicarCran = true,
                this.aplicarVen = false,
                this.aplicarGua = false,
                this.aplicarForm = false,
                this.aplicar = false,
                this.aplicarTwo = false,
                this.aplicarTree = false,
                this.aplicarFour = false,
                this.aplicarFive = false,
                this.aplicarSix = true,
                this.aplicarSeven = false,
                this.aplicarEight = false,
                this.aplicarNine = false,
                this.aplicarTen = false,
                this.aplicarEleven = false,
                this.aplicarTwelve = false,
                this.aplicarThirteen = false,
                this.aplicarFourteen = false,
                this.rSegunda = 'Segunda',
                this.rTerca = 'Terça',
                this.rQuarta = 'Quarta',
                this.rQuinta = 'Quinta',
                this.rSexta = 'Sexta',
                this.rSabado = `<span><h4>Sábado</h4></span>
          <h4 class='white dot-index'>- 07:00 - 08:00 </h4>
          <h4 class='white dot-index'>- 08:00 - 09:00 </h4>
          <h4 class='white dot-index'>- 11:00 - 12:00 </h4>
          <!-- 
            <h4 class='white dot-index'>- 09:00 - 10:00 </h4>
            <h4 class='white dot-index'>- 10:00 - 11:00 </h4>
            -->
            <h4 class='white dot-index'>- 12:00 - 13:00 </h4>
          <h4 class='white dot-index'>- 13:00 - 14:00 </h4>
          <h4 class='white dot-index'>- 14:00 - 15:00 </h4>
          <h4 class='white dot-index'>- 15:00 - 16:00 </h4>
`,
                this.rCefaleia = 'Cefaleia',
                this.rBaixaImunidade = 'Baixa Imunidade',
                this.rBurnout = 'Burnout',
                this.rLaringite = 'Laringite',
                this.rInsonia = 'Insônia',
                this.rZumbido = 'Zumbido',
                this.rLabirintite = 'Labirintite',
                this.rSinusite = 'Sinusite'
        },
        cefaleia() {
            this.aplicarAcu = true,
                this.aplicarAur = true,
                this.aplicarCran = true,
                this.aplicarVen = false,
                this.aplicarGua = false,
                this.aplicarForm = false,
                this.aplicar = false,
                this.aplicarTwo = false,
                this.aplicarTree = false,
                this.aplicarFour = false,
                this.aplicarFive = false,
                this.aplicarSix = false,
                this.aplicarSeven = true,
                this.aplicarCran = true,
                this.aplicarEight = false,
                this.aplicarNine = false,
                this.aplicarTen = false,
                this.aplicarEleven = false,
                this.aplicarTwelve = false,
                this.aplicarThirteen = false,
                this.aplicarFourteen = false,
                this.rSegunda = 'Segunda',
                this.rTerca = 'Terça',
                this.rQuarta = 'Quarta',
                this.rQuinta = 'Quinta',
                this.rSexta = 'Sexta',
                this.rSabado = 'Sábado',
                this.rCefaleia = `<span><h4>Cefaléia</h4></span>
          <span class='white'>Uma sensação dolorosa em qualquer parte da cabeça,
          desde aguda até incômoda, podendo ocorrer junto com outros sintomas.</span>`,
                this.rBaixaImunidade = 'Baixa Imunidade',
                this.rBurnout = 'Burnout',
                this.rLaringite = 'Laringite',
                this.rInsonia = 'Insônia',
                this.rZumbido = 'Zumbido',
                this.rLabirintite = 'Labirintite',
                this.rSinusite = 'Sinusite'
        },
        baixaImunidade() {
            this.aplicarAcu = true,
                this.aplicarAur = true,
                this.aplicarCran = false,
                this.aplicarVen = false,
                this.aplicarGua = false,
                this.aplicarForm = true,
                this.aplicar = false,
                this.aplicarTwo = false,
                this.aplicarTree = false,
                this.aplicarFour = false,
                this.aplicarFive = false,
                this.aplicarSix = false,
                this.aplicarSeven = false,
                this.aplicarEight = true,
                this.aplicarNine = false,
                this.aplicarTen = false,
                this.aplicarEleven = false,
                this.aplicarTwelve = false,
                this.aplicarThirteen = false,
                this.aplicarFourteen = false,
                this.rSegunda = 'Segunda',
                this.rTerca = 'Terça',
                this.rQuarta = 'Quarta',
                this.rQuinta = 'Quinta',
                this.rSexta = 'Sexta',
                this.rSabado = 'Sábado',
                this.rCefaleia = 'Cefaleia',
                this.rBaixaImunidade = `<span><h4>Baixa Imunidade</h4></span>
          <span class='white'>pode ser percebida quando o organismo dá alguns sinais, indicando que as defesas do organismo estão baixas e que o sistema imunológico não está sendo capaz de combater
          os agentes infecciosos, como vírus e bactérias, o que pode fazer com que a pessoa fique doente com mais frequência.</span>`,
                this.rBurnout = 'Burnout',
                this.rLaringite = 'Laringite',
                this.rInsonia = 'Insônia',
                this.rZumbido = 'Zumbido',
                this.rLabirintite = 'Labirintite',
                this.rSinusite = 'Sinusite'
        },
        burnOut() {
            this.aplicarAcu = true,
                this.aplicarAur = true,
                this.aplicarCran = false,
                this.aplicarVen = false,
                this.aplicarGua = false,
                this.aplicarForm = true,
                this.aplicar = false,
                this.aplicarTwo = false,
                this.aplicarTree = false,
                this.aplicarFour = false,
                this.aplicarFive = false,
                this.aplicarSix = false,
                this.aplicarSeven = false,
                this.aplicarEight = false,
                this.aplicarNine = true,
                this.aplicarTen = false,
                this.aplicarEleven = false,
                this.aplicarTwelve = false,
                this.aplicarThirteen = false,
                this.aplicarFourteen = false,
                this.rSegunda = 'Segunda',
                this.rTerca = 'Terça',
                this.rQuarta = 'Quarta',
                this.rQuinta = 'Quinta',
                this.rSexta = 'Sexta',
                this.rSabado = 'Sábado',
                this.rCefaleia = 'Cefaleia',
                this.rBaixaImunidade = 'Baixa Imunidade',
                this.rBurnout = `<span><h4>Burnout</h4></span>
          <span class='white'>A síndrome de burnout é um distúrbio psíquico causado pela exaustão extrema, sempre relacionada ao trabalho de um indivíduo. Essa condição
          também é chamada de “síndrome do esgotamento profissional” e afeta quase todas as facetas da vida de um indivíduo.</span>`,
                this.rLaringite = 'Laringite',
                this.rInsonia = 'Insônia',
                this.rZumbido = 'Zumbido',
                this.rLabirintite = 'Labirintite',
                this.rSinusite = 'Sinusite'
        },
        laringite() {
            this.aplicarAcu = true,
                this.aplicarAur = true,
                this.aplicarCran = false,
                this.aplicarVen = false,
                this.aplicarGua = false,
                this.aplicarForm = false,
                this.aplicar = false,
                this.aplicarTwo = false,
                this.aplicarTree = false,
                this.aplicarFour = false,
                this.aplicarFive = false,
                this.aplicarSix = false,
                this.aplicarSeven = false,
                this.aplicarEight = false,
                this.aplicarNine = false,
                this.aplicarTen = true,
                this.aplicarEleven = false,
                this.aplicarTwelve = false,
                this.aplicarThirteen = false,
                this.aplicarFourteen = false,
                this.rSegunda = 'Segunda',
                this.rTerca = 'Terça',
                this.rQuarta = 'Quarta',
                this.rQuinta = 'Quinta',
                this.rSexta = 'Sexta',
                this.rSabado = 'Sábado',
                this.rCefaleia = 'Cefaleia',
                this.rBaixaImunidade = 'Baixa Imunidade',
                this.rBurnout = 'Burnout',
                this.rLaringite = `<span><h4>Laringite</h4></span>
          <span class='white'>é a inflamação da laringe (região das vias aéreas onde ficam localizadas as cordas vocais), que conecta a faringe à traqueia e faz parte do sistema respiratório. A inflamação
          dessa região pode ser causada por vírus (mais prevalente), bactérias, inalação de agentes alérgicos ou esforço excessivo da voz.</span>`,
                this.rInsonia = 'Insônia',
                this.rZumbido = 'Zumbido',
                this.rLabirintite = 'Labirintite',
                this.rSinusite = 'Sinusite'
        },
        insonia() {
            this.aplicarAcu = true,
                this.aplicarAur = true,
                this.aplicarCran = true,
                this.aplicarVen = false,
                this.aplicarGua = false,
                this.aplicarForm = false,
                this.aplicar = false,
                this.aplicarTwo = false,
                this.aplicarTree = false,
                this.aplicarFour = false,
                this.aplicarFive = false,
                this.aplicarSix = false,
                this.aplicarSeven = false,
                this.aplicarEight = false,
                this.aplicarNine = false,
                this.aplicarTen = false,
                this.aplicarEleven = true,
                this.aplicarCran = true,
                this.aplicarTwelve = false,
                this.aplicarThirteen = false,
                this.aplicarFourteen = false,
                this.rSegunda = 'Segunda',
                this.rTerca = 'Terça',
                this.rQuarta = 'Quarta',
                this.rQuinta = 'Quinta',
                this.rSexta = 'Sexta',
                this.rSabado = 'Sábado',
                this.rCefaleia = 'Cefaleia',
                this.rBaixaImunidade = 'Baixa Imunidade',
                this.rBurnout = 'Burnout',
                this.rLaringite = 'Laringite',
                this.rInsonia = `<span><h4>Insônia</h4></span>
          <span class='white'>é caracterizada pela dificuldade de dormir ou conseguir manter um sono contínuo sem ser interrompido durante a noite. Cerca de 30% a 50% dos brasileiros sofrem com a insônia,
          que pode se manifestar por diversas razões, como Quarta, Segunda, depressão, dor crônica e uso de certos medicamentos.</span>`,
                this.rZumbido = 'Zumbido',
                this.rLabirintite = 'Labirintite',
                this.rSinusite = 'Sinusite'
        },
        zumbido() {
            this.aplicarAcu = true,
                this.aplicarAur = true,
                this.aplicarCran = true,
                this.aplicarVen = false,
                this.aplicarGua = false,
                this.aplicarForm = false,
                this.aplicar = false,
                this.aplicarTwo = false,
                this.aplicarTree = false,
                this.aplicarFour = false,
                this.aplicarFive = false,
                this.aplicarSix = false,
                this.aplicarSeven = false,
                this.aplicarEight = false,
                this.aplicarNine = false,
                this.aplicarTen = false,
                this.aplicarEleven = false,
                this.aplicarTwelve = true,
                this.aplicarThirteen = false,
                this.aplicarFourteen = false,
                this.rSegunda = 'Segunda',
                this.rTerca = 'Terça',
                this.rQuarta = 'Quarta',
                this.rQuinta = 'Quinta',
                this.rSexta = 'Sexta',
                this.rSabado = 'Sábado',
                this.rCefaleia = 'Cefaleia',
                this.rBaixaImunidade = 'Baixa Imunidade',
                this.rBurnout = 'Burnout',
                this.rLaringite = 'Laringite',
                this.rInsonia = 'Insônia',
                this.rZumbido = `<span><h4>Zumbido</h4></span>
          <span class='white'>Também chamado de Sibilo ou Tinido, pode ser definido como uma ilusão auditiva, ou seja, uma sensação sonora não relacionada com uma fonte externa de estimulação.</span>`,
                this.rLabirintite = 'Labirintite',
                this.rSinusite = 'Sinusite'
        },
        labirintite() {
            this.aplicarAcu = true,
                this.aplicarAur = true,
                this.aplicarCran = true,
                this.aplicarVen = false,
                this.aplicarGua = false,
                this.aplicarForm = false,
                this.aplicar = false,
                this.aplicarTwo = false,
                this.aplicarTree = false,
                this.aplicarFour = false,
                this.aplicarFive = false,
                this.aplicarSix = false,
                this.aplicarSeven = false,
                this.aplicarEight = false,
                this.aplicarNine = false,
                this.aplicarTen = false,
                this.aplicarEleven = false,
                this.aplicarTwelve = false,
                this.aplicarThirteen = true,
                this.aplicarFourteen = false,
                this.rSegunda = 'Segunda',
                this.rTerca = 'Terça',
                this.rQuarta = 'Quarta',
                this.rQuinta = 'Quinta',
                this.rSexta = 'Sexta',
                this.rSabado = 'Sábado',
                this.rCefaleia = 'Cefaleia',
                this.rBaixaImunidade = 'Baixa Imunidade',
                this.rBurnout = 'Burnout',
                this.rLaringite = 'Laringite',
                this.rInsonia = 'Insônia',
                this.rZumbido = 'Zumbido',
                this.rLabirintite = `<span><h4>Labirintite</h4></span>
          <span class='white'>Labirintite é o nome popular que se dá a todos os transtornos do labirinto, uma estrutura interna do ouvido composta pela cóclea (imprescindível para a
          nossa audição), pelo vestíbulo e pelos canais semicirculares (que têm papel na manutenção do nosso equilíbrio).</span>`,
                this.rSinusite = 'Sinusite'
        },
        sinusite() {
            this.aplicarAcu = true,
                this.aplicarAur = false,
                this.aplicarCran = false,
                this.aplicarVen = false,
                this.aplicarGua = false,
                this.aplicarForm = false,
                this.aplicar = false,
                this.aplicarTwo = false,
                this.aplicarTree = false,
                this.aplicarFour = false,
                this.aplicarFive = false,
                this.aplicarSix = false,
                this.aplicarSeven = false,
                this.aplicarEight = false,
                this.aplicarNine = false,
                this.aplicarTen = false,
                this.aplicarEleven = false,
                this.aplicarTwelve = false,
                this.aplicarThirteen = false,
                this.aplicarFourteen = true,
                this.rSegunda = 'Segunda',
                this.rTerca = 'Terça',
                this.rQuarta = 'Quarta',
                this.rQuinta = 'Quinta',
                this.rSexta = 'Sexta',
                this.rSabado = 'Sábado',
                this.rCefaleia = 'Cefaleia',
                this.rBaixaImunidade = 'Baixa Imunidade',
                this.rBurnout = 'Burnout',
                this.rLaringite = 'Laringite',
                this.rInsonia = 'Insônia',
                this.rZumbido = 'Zumbido',
                this.rLabirintite = 'Labirintite',
                this.rSinusite = `<span><h4>Sinusite</h4></span>
          <span class='white'>é a inflamação das mucosas dos seios da face, região do crânio formada por cavidades ósseas ao redor do nariz, maçãs do rosto e olhos. Os
          seios da face dão ressonância à voz, aquecem o ar inspirado e diminuem o peso do crânio, o que facilita sua sustentação.</span>`
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: #fff;
}

i {
    color: #fff;
    font-size: .9em;
    margin: auto;
}

code {
    font-size: 0.6em;
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 30px;
    margin-top: -10px;
    margin-right: 30px;
    border-left: solid 4px #e23a28;
    border-right: solid 4px #e23a28;
    color: #ddd;
}

.divider {
    height: 15px;
    background-color: #e23a2840;
}

.divider-ultimate {
    height: 30px;
    background-color: #fff;
}

.profile {
    background: #860d0d;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px 0 5px 0;
    margin-top: -10px;
}

.profile a {
    text-decoration: none;
    color: #fff;
    font-size: .9em;
}

.profile img {
    height: 70px;
    margin-left: 10px;
    padding: 0 25px 0 0;
}

.profile h1 {
    margin: 13px 0 -5px -10px;
    font-size: 1.5em;
    color: #fff;
    text-shadow: -2px 2px 5px #ffffff70,
        -2px -2px 5px #ffffff70,
        2px 2px 5px #ffffff70,
        2px -2px 5px #ffffff70;
    transition: all .3s linear;
}

.profile h1:hover {
    color: #fff;
    cursor: pointer;
    text-shadow: -2px 2px 5px #e23a28,
        -2px -2px 5px #e23a28,
        2px 2px 5px #e23a28,
        2px -2px 5px #e23a28;
}

.profile h4 {
    margin: 0 0px 0 -8px;
    padding: 0 5px;
    font-size: .8em;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    color: #e23a28;
    border-left: solid 4px #e23a28;
    border-right: solid 4px #e23a28;
}

.main-one {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    flex-direction: row;
    box-shadow: 0px 10px 15px #ffffff10;
    background: #860d0d;
}

.main-one a i {
    display: block;
    font-size: 18px;
}

.main-one a {
    color: #ddd;
    border: solid .1px #ffffff70;
    padding: 8px 15px;
    border-radius: 5% 4% 15%;
    transition: all .3s linear;
}

.main-one a:hover {
    background-color: #d8d8d840;
}

.main-two {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    padding: 15px 0 18px 0;
    color: black;
    background: #860d0d;
    color: #fff;
}

.main-two a {
    margin: 20px 0 0 0px;
    color: #fff;
    font-weight: 600;
}

.main-two i {
    color: #fff;
    font-size: 1.1em;
    font-weight: 600;
}

.main-tree {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0px 0 0 0;
    color: #fff;
    background: #860d0d;
    overflow-x: auto;
}

.main-tree i {
    font-size: 1.2em;
    color: #fff;
}

.main-tree h5 {
    margin-left: 10px;
}

.hCincoOne {
    margin: 10px 0px 22px 10px;
}

.hCincoTwo {
    margin: -10px 0px 22px 10px;

}

#main-white {
    position: static;
    color: #fff;
    background-color: #d8d8d840;
    width: 100%;
    margin: 30px auto 0px;
    text-align: left;
}

#main-white div {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    color: #fff;
    overflow-x: auto;
}

#main-white h4 {
    margin: 0 10px;
}

#main-white .clientesGraph {
    margin: 10px;
    background-color: #e23a28;
}

.main-four {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: -10px 0 0 0;
    color: #fff;
    overflow-x: auto;
}

.main-four i {
    font-size: 1.2em;
    color: #555;
}

.main-four h5 {
    margin: 0 auto 20px auto;
}

.main-four-card {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
}

.main-four-card a {
    padding: 2px 6px;
    margin: 10px 4px;
    font-size: .8em;
}

.main-four-card a:hover {
    background-color: #dddddd54;
}

.main-four-card span {
    position: relative;
    top: -6px;
    left: -14px;
}

.main-four-card h4 {
    margin: 0 0 0 15px;
    background: #92929240;
    padding: 0px 10px 0px 10px;
    border-radius: 12% 12% 12% 0%;
}

.main-four-card p {
    margin: 0 0 0 10px;
    font-size: .9em;
}

.body-map {
    width: 375px;
    height: 270px;
    margin: 10px auto 30px auto;
}

.main-five {
    background: #860d0d;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: -10px 0 0 0;
    color: #fff;
    box-shadow: 0px 10px 10px#bbb;
    overflow-x: auto;
}

.main-five i {
    font-size: 1.2em;
    color: #555;
}

.main-five h5 {
    margin-left: 10px;
}

.main-five-card {
    height: 370px;
    margin: 0 10px;
    border: solid .5px #e23a2890;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
}

.main-five-card a {
    border: solid .1px #dddddd54;
    margin: 0px 5px 20px 10px;
    width: 500px;
    border-radius: 3% 3% 3% 3%;
}

.main-five-card span {
    position: relative;
    top: -6px;
    left: -14px;
}

.main-five-card h4 {
    margin: 0 5px 0 10px;
}

.main-five-card p {
    margin: 0 0 0 10px;
    font-size: .9em;
}

.mini-profile {
    height: 25px;
    border-radius: 50%;
    margin: 10px 0 0 10px;
    padding: 0 15px 0 0;
}

a.nuxt-link-exact-active {
    background-color: #e23a2890;
    color: #fff;
    border-radius: 0% 10% 10% 10%;
}

.main-l-trat {
    width: 95%;
    text-align: left;
    margin: -10px auto 20px auto;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    align-self: center;
}

.dot-index {
    cursor: pointer;
    transition: all .3s ease-in;
    background-color: #d8d8d840;
    margin: 10px 16px;
    padding: 10px;
    font-size: 1em;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 5% 4% 15%;
    border: solid .5px;
}

.dot-index:Hover {
    color: #fff;
    border: solid .5px #e23a28;
}

.dot-index {
    margin: 5px 2px;
    padding: 4px;
    font-size: .7em;
}

.dotHover {
    background-color: #d8d8d840;
    color: #ddd;
    border: solid .5px #e23a28;
}

.dot:hover {
    background-color: #d8d8d840;
}

.dot:active {
    color: dbd1d1;
    background-color: #d8d8d8;
}

.selectTitle {
    text-shadow: -2px 2px 5px #e23a28,
        -2px -2px 5px #e23a28,
        2px 2px 5px #e23a28,
        2px -2px 5px #e23a28;
    color: #fff;
}

.selectTitleHover {
    color: #fff;
    border: solid .5px #e23a28;
    opacity: 1s;
}

.selectTitleHover span {
    font-size: 1.2em;
}

.white {
    color: #ffffff;
    margin: 0;
}

.homeTwo {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
    align-self: center;
    font-size: .9em;
    width: 95%;
    margin: auto;
    font-weight: bold;
    color: #dbd1d1;
}

.homeTwo div {
    padding-top: 5px;
    padding-left: 10px;
    padding-right: 10px;

}

.homeTwo a {
    font-size: 1em;
    margin: auto;
    font-weight: bold;
    color: #efc289;
}

.homeTwoDot:hover {
    text-shadow: -1px 1px 10px #fff;
    cursor: pointer;
}

.hr {
    width: 95%;
    border: solid .3px #e23a2840;
    margin: 30px auto 0px auto;
}


@media only screen and (max-width: 369px) {}
</style>
