<template>
<div id='app'>
  <NavTop/>
  
  <NavBottom/>

    <div id="main-two">
    <i class="fas fasi fa-diagnoses"></i>
        <h1>Tabela dos principais pontos</h1>
            

    <div class='table-overflow'>
        <table class="table-overflow">          
                <thead>
                    <th class="headcol"><br></th>
                    <th>Pulmão</th>
                    <th>Intestino Grosso</th>
                    <th>Estômago</th>
                    <th>Baço-pâncreas</th>
                    <th>Coração</th>
                    <th>Intestino Delgado</th>
                    <th>Bexiga</th>
                    <th>Rim</th>
                    <th>Pericárdio</th>
                    <th>Triplo Aquecedor</th>
                    <th>Vesícula Biliar</th>
                    <th>Fígado</th>
                </thead>
                <tfoot></tfoot>
                <tbody>
                    <tr>
                        <th class="headcol">Tonificação</th>
                        <td @click="pNove" class="dot" :class='{ dotHover: aplicarPNove }'>*P9</td>
                        <td class='ig-onze '>IG11</td>
                        <td class='e-quarenta-um '>E41</td>  
                        <td class='bp-dois '>BP2</td>
                        <td class='c-nove '>C9</td>
                        <td class='id-tres '>ID3</td>
                        <td class='b-sessenta-sete '>B67</td>
                        <td class='r-sete '>R7</td>
                        <td class='pc-nove '>PC9</td>
                        <td class='ta-tres '>TA3</td>
                        <td class='vc-quarenta-tres '>VB43</td>
                        <td class='f-oito '>F8</td>
                    </tr>
                    <tr>
                        <th class="headcol">Sedação</th>    
                        <td @click="pCinco" class="dot":class='{ dotHover: aplicarPCinco }'>*P5</td>
                        <td class='ig-dois '>IG2</td>
                        <td class='e-quarenta-cinco '>E45</td>
                        <td class='bp-cinco '>BP5</td>
                        <td class='c-sete '>C7</td>
                        <td class='id-oito '>ID8</td>
                        <td class='b-sessenta-cinco '>B65</td>
                        <td class='r-um '>R1</td>
                        <td class='pc-sete '>PC7</td>
                        <td class='ta-dez '>TA10</td>
                        <td class='vb-trinta-oito '>VB38</td>
                        <td class='f-dois '>F2</td>
                    </tr>
                    <tr>
                        <th class="headcol">Fonte</th>
                        <td @click="pNove" class="dot" :class='{ dotHover: aplicarPNove }'>*P9</td>
                        <td class="ig sete ">IG7</td>
                        <td class='e-quarenta-dois '>E42</td>
                        <td class='bp-tres '>BP3</td>
                        <td class='c-sete '>C7</td>
                        <td class='id-quatro '>ID4</td>
                        <td class='b-sessenta-quatro '>B64</td>
                        <td class='r-um '>R1</td>
                        <td class='pc-sete '>PC7</td>
                        <td class='ta-quatro '>TA4</td>
                        <td class='vc-quarenta '>VB40</td>
                        <td class='f-tres '>F3</td>
                    </tr>
                    <tr>
                        <th class="headcol">Luo</th>
                        <td @click="pSete" class="dot" :class='{ dotHover: aplicarPSete }'>*P7</td>
                        <td class="ig-seis ">IG6</td>
                        <td class='e-quarenta '>E40</td>
                        <td class='bp-quatro '>BP4</td>
                        <td class='c-cinco '>C5</td>
                        <td class='id-sete '>ID7</td>
                        <td class='b-cinquenta-oito '>B58</td>
                        <td class='r-quatro '>R4</td>
                        <td class='pc-seis '>PC6</td>
                        <td class='ta-cinco '>TA5</td>
                        <td class='vb-trinta-sete '>VB37</td>
                        <td class='f-cinco '>F5</td>
                    </tr>
                    <tr>
                        <th class="headcol">Shu dorsal</th>
                        <td class="b-treze ">B13</td>
                        <td class='b-vinte-cinco '>B25</td>
                        <td class='b-vinte-um '>B21</td>
                        <td class='b-vinte '>B20</td>
                        <td class='b-quinze '>B15</td>
                        <td class='b-vinte-sete '>B27</td>
                        <td class='b-vinte-oito '>B28</td>
                        <td class='b-vinte-tres '>B23</td>
                        <td class='b-quatorze '>B14</td>
                        <td class='b-vinte-dois '>B22</td>
                        <td class='b-dezenove '>B19</td>
                        <td class='b-dezoito '>B18</td>
                    </tr>
                    <!--
                    <tr>
                        <th class="headcol">Shu dosal externo</th>
                        <td class="b-quarenta-dois ">B42</td>
                        <td>--</td>
                        <td class='b-cinquenta '>B50</td>
                        <td class='b-quarenta-nove '>B49</td>
                        <td class='b-quarenta-quatro '>B44</td>
                        <td>--</td>
                        <td>--</td>
                        <td class='b-cinquenta-dois '>B52</td>
                        <td class='B-quarenta-tres '>B43</td>
                        <td class='b-cinquenta-um '>B51</td> 
                        <td class='b-quarenta-oito '>B48</td>
                        <td class='b-quarenta-sete '>B47</td>
                    </tr>                    
                    <tr>
                        <th class="headcol">Horário</th>
                        <td class="p-oito ">P8</td>
                        <td class='ig-um '>IG1</td>
                        <td class='e-trinta-seis '>E36</td>
                        <td class='bp-tres '>BP3</td>
                        <td class='c-oito '>C8</td>
                        <td class='id-cinco '>ID5</td>
                        <td class='b-sessenta-seis '>B66</td>
                        <td class='r-dez '>R10</td>
                        <td class='pc-oito '>PC8</td>
                        <td class='ta-seis '>TA6</td>
                        <td class='vb-quarenta-um '>VB41</td>
                        <td class='f-um '>F1</td>    
                    </tr>
                    -->
                    <tr>
                        <th class="headcol">Xi (acúmulo)</th>
                        <td class="p-seis ">P6</td>
                        <td class='ig-sete '>IG7</td>
                        <td class='e-trinta-quatro '>E34</td>
                        <td class='bp-oito '>BP8</td>
                        <td class='c-seis '>C6</td>
                        <td class='id-seis '>ID6</td>
                        <td class='b-sessenta-tres '>B63</td>
                        <td class='r-cinco '>R5</td>
                        <td class='pc-quatro '>PC4</td>
                        <td class='ta-sete '>TA7</td>
                        <td class='vb-trinta-seis '>VB36</td>
                        <td class='f-seis '>F6</td>
                    </tr>
                    <!--
                    <tr>
                        <th class="headcol">Entrada</th>
                        <td class="p-um ">P1</td>
                        <td class='ig-quatro '>IG4</td>
                        <td class='e-um '>E1</td>
                        <td class='bp-um '>BP1</td>
                        <td class='c-um '>C1</td>
                        <td class='id-um '>ID1</td>
                        <td class='b-um '>B1</td>
                        <td class='r-um '>R1</td>
                        <td class='pc-um '>PC1</td>
                        <td class='ta-um '>TA1</td>
                        <td class='vb-um '>VB1</td>
                        <td class='f-um '>F1</td>
                    </tr>
                    <tr>
                        <th class="headcol">Saída</th>
                        <td @click="pSete" class="dot">*P7</td>
                        <td class='ig-vinte '>IG20</td>
                        <td class='e-quarenta-dois '>E42</td>
                        <td class='bp-vinte-um '>BP21</td>
                        <td class='c-nove '>C9</td>
                        <td class='id-dezenove '>ID19</td>
                        <td class='b-sessenta-sete '>B67</td>
                        <td class='r-vinte-dois '>R22</td>
                        <td class='pc-oito '>PC8</td>
                        <td class='ta-vinte-dois '>TA22</td>
                        <td>--</td>
                        <td class='f-quatorze '>F14</td>
                    </tr>
                    <tr>
                        <th class="headcol">Janela do Céu</th>
                        <td class="p-tres ">P3</td>
                        <td class='ig-dezoito '>IG18</td>
                        <td class='e-nove '>E9</td>
                        <td>--</td>
                        <td>--</td>
                        <td class='id-dezesseis-dezessete '>ID16 e ID17</td>
                        <td class='b-dez '>B10</td>
                        <td>--</td>
                        <td class='pc-um '>PC1</td>
                        <td class='ta-dezesseis '>TA16</td>
                        <td>--</td>
                        <td>--</td>
                    </tr>
                    -->
                </tbody>
            </table>
                 
  </div>
        <span>| Clique no Pontos com '*' para mais detalhes abaixo |</span>
        <br>

       <!-- <i class="fas fasi-big fa-child"></i> -->
       <!-- <img class="fas fasi-big fa-child" src="img/corpo-frente.png" alt=""> -->
       <!--  <i  @click="pNove" class="fas fasi p-nove fa-circle" :class='{ pNoveHover: aplicarPNove }'></i>
        <span :class='{ pNoveHover: aplicarFrente}'> Visão anterior</span> | 
        <span :class='{ pNoveHover: aplicarTras }'> Visão posterior</span> -->
  <div id='main-pontos' class='main-l' v-html="content"></div>
  </div>
</div>  


</template>

<script>
export default {
scrollToTop: true,
    head: {
    title: 'Pontos | Deep Acupuntura',
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
    data() {
        return {
            aplicarPNove: true,
            content: 
            `
            <hr>
            <h1>
                <b>
                    P9 - Tai Yuan
                    <br>
                    Ponto de Tonificação e fonte
                </b>
            </h1>
            <div class="main-c"><img src="" alt="Imagem do local de punção do ponto 'P9'"></div>
            <h4><b>Localização:</b></h4>
            <p>
                No espaço da articulação da mão, no punho, lado da região palmar (prega distal do punho), radial a 
                artéria e ulnar ao tendão do músculo abdutor longo do polegar.
            </p>
            <h4><b>Punção:</b></h4>
            <p>
                Vertical, de 0,2 a 0,5 cun. 
                <br>
                <b>Cuidado:</b> Proximidade com a artéria radial;
            </p>
            <h4><b>Indicações:</b></h4>
            <p>
                - Fortalece o pulmão, trata o muco, diminui a energia qi do pulmão;
                <br>
                - Regula a circulação do sangue;
                <br>
                - Torna Permeável o canal de energia e alivia dores;
                <br>
                - Doenças do trato respiratório, como tosse, dispneia;
                <br>
                - Doenças vasculares, doença cardíaca indireta(ex. palpitações);
                <br>
                - Problemas no trato do canal de energia e do canal de energia musculotendíneo.
            </p>
            <hr>
            `
        }
    },
    methods: {
        pNove() {
            this.aplicarFrente = true,
            this.aplicarPNove = true,
            this.aplicarPSete = false,
            this.aplicarPCinco = false,
            this.content= `
            <hr>
            <h1>
                <b>
                    P9 - Tai Yuan
                    <br>
                    Ponto de Tonificação e fonte
                </b>
            </h1>
            <div class="main-c"><img src="" alt="Imagem do local de punção do ponto 'P9'"></div>
            <h4><b>Localização:</b></h4>
            <p>
                No espaço da articulação da mão, no punho, lado da região palmar (prega distal do punho), radial a 
                artéria e ulnar ao tendão do músculo abdutor longo do polegar.
            </p>
            <h4><b>Punção:</b></h4>
            <p>
                Vertical, de 0,2 a 0,5 cun. 
                <br>
                <b>Cuidado:</b> Proximidade com a artéria radial;
            </p>
            <h4><b>Indicações:</b></h4>
            <p>
                - Fortalece o pulmão, trata o muco, diminui a energia qi do pulmão;
                <br>
                - Regula a circulação do sangue;
                <br>
                - Torna Permeável o canal de energia e alivia dores;
                <br>
                - Doenças do trato respiratório, como tosse, dispneia;
                <br>
                - Doenças vasculares, doença cardíaca indireta(ex. palpitações);
                <br>
                - Problemas no trato do canal de energia e do canal de energia musculotendíneo.
            </p>
            <hr>
        `
        },


        pSete() {
            this.aplicarFrente = true,
            this.aplicarPNove = false,
            this.aplicarPCinco = false,
            this.aplicarPSete = true,
            this.content= `
            <hr>
            <h1>
                <b>
                    P7 - Lie Que
                    <br>
                    Ponto Luo
                    <br>
                    Ponto de Saída
                </b>
            </h1>
            <div class="main-c"><img src="" alt="Imagem do local de punção do ponto 'P7'"></div>
            <h4><b>Localização:</b></h4>
            <p>
                Diretamente sobre o processo estilóide do rádio, no lado radial do antebraço, cerca de 1,5 cun proximal ao espaço na articulação da mão, no punho,
                em uma depressão em forma de "V".
            </p>
            <h4><b>Punção:</b></h4>
            <p>
                Oblíqua, de 0,5 a 1 cun, em direção ao ombro ou ao punho.
                <br>
                <b>Cuidado:</b> Veia cefálica;
            </p>
            <h4><b>Indicações:</b></h4>
            <p>
                - Abre o exterior, conduz o vento para fora, diminui a energia qi do pulmão;
                <br>
                - Problemas na nuca, cabeça e região cervical da coluna.
                <br>
                - Infecções com febre, paresia facial, neuralgia do trigêmio, dores na cabeça, doenças das vias respiratórias.
                <br>
                - Dores nas genitálias,doenças das vias urinárias.
                <br>
                - Distúrbios psiquícos (gargalhadas inadequadas, esquecimento..).
            </p>
            <hr>
        `
        },
        pCinco() {
            this.aplicarPCinco = true,
            this.aplicarPNove = false,
            this.aplicarPSete = false,
            this.content= `
            <hr>
            <h1>
                <b>
                    P5 - Chize
                    <br>
                    Ponto de Sedação
                </b>
            </h1>
            <div class='main-c'><img src="" alt="Imagem do local de punção do ponto 'P5'"></div>
            <h4><b>Localização:</b></h4>
            <p>
                Radial ao tendão do bíceps, na prega do cotovelo.
            </p>
            <h4><b>Punção:</b></h4>
            <p>
                Vertical, de 0,5 a 1 cun. Melhor maneira de puncionar é deixar o cotovelo em leve flexão e antebraço em supinação.
                <br>
                <b>Cuidado:</b> Veia Cubital;
            </p>
            <h4><b>Indicações:</b></h4>
            <p>
                - Filtra o calor do Triplo Aquecedor superior, diminui a energia Qi do pulmão, regula os caminhos da água, torna permeável 
                o canal de energia, relaxa os tendões e alivia a dor;
                <br>
                - Doenças do trato respiratório como tosse, dispnéia e asma brônquica;
                <br>
                - Distúrbios de micção e edemas;
                <br>
                - Ponto distante no caso de problemas de joelho e na região lombar.
                <br>
            </p>
            <hr>
            `
        },
        o() {
            this.content= `
            <hr>
            <h1>
                <b>
                    
                    <br>
                    
                </b>
            </h1>
            <div class='main-c'><img src="" alt="Imagem do local de punção do ponto ''"></div>
            <h4><b>Localização:</b></h4>
            <p>
                        
            </p>
            <h4><b>Punção:</b></h4>
            <p>
                
                <br>
                <b>Cuidado:</b> ;
            </p>
            <h4><b>Indicações:</b></h4>
            <p>
                - ;
                <br>
                - ;
                <br>
                - ;
                <br>
                - ;
                <br>
            </p>
                <hr>
        `
        }     
    }
}
</script>
<style scoped>
 th, td, tr{
  white-space: nowrap;
}
</style>