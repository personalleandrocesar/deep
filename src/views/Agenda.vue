<template>
    <div id='app'>
    <div id="main">
        <div class="main-cc">
        <i class="fas fasi fa-calendar-day"></i>
            </div>
          
          </div>


      <h1 id='main-c'>Horários Livres</h1>
      <br>
      <div class='turn'>
        <h3 @click='turnM' class='turnOff' :class= '{ turnOn: aplicar }'>Turno da Manha </h3>
        <h3 @click='turnT' class='turnOff' :class= '{ turnOn: aplicarTwo }'>Turno da Tarde </h3>
        <h3 @click='turnN' class='turnOff' :class= '{ turnOn: aplicarTree }'>Turno da Noite </h3>
      </div>
      
  <div v-html="content"></div>

      

  
</div>  
</template>
<script>
export default {
  scrollToTop: true,
  data() {
      return {
          aplicar : true,
          aplicarTwo : '',
          aplicarTree : '',
          content : `
              <table>
        <thead>
          <th></th>
          <th>Segunda</th>
          <th>Terça</th>
          <th>Quarta</th>
          <th>Quinta</th>
          <th>Sexta</th>
          <th class='emphasis-red'>Sábado</th>
        </thead>
        <tfoot>
          <td colspan="7">
            <b>Legenda:</b>
            <br>
            Livre &#8680; Horários Vagos; |
            -- &#8680; Horários preenchidos ou indisponíveis; 
          </td>
        </tfoot>
        <tbody>
          <tr>
            <th>07:00</th>
            <td>--</td> <!-- Amaju -->
            <td>Livre</td>
            <td>--</td> <!-- Amaju -->
            <td>Livre</td>
            <td>--</td> <!-- Amaju -->
            <td>Livre</td>
          </tr>
          <tr>
            <th>08:00</th>
            <td>Livre</td> 
            <td>Livre</td> 
            <td>Livre</td> 
            <td>Livre</td> 
            <td>--</td> 
            <td>--</td> 
          </tr>
          <tr>
            <th>09:00</th>
            <td>--</td> <!-- Haroldo -->
            <td>--</td> <!-- Haroldo -->
            <td>--</td> <!-- Haroldo -->
            <td>--</td> <!-- Haroldo -->
            <td>--</td> 
            <td>Livre</td> 
          </tr>

          <tr>
            <th>10:00</th> 
            <td>Livre</td>
            <td>Livre</td>
            <td>--</td>
            <td>Livre</td>
            <td>--</td>
            <td>Livre</td>
          </tr>
          <tr>
            <th>11:00</th>
            <td>Livre</td> 
            <td>Livre</td>
            <td>Livre</td>
            <td>--</td>
            <td>--</td> <!-- Letícia Constantino -->
            <td>Livre</td>
          </tr>
          

        </tbody>
      </table>
      <br><br><br><br>
          `,
      }
  },
  methods: {
      turnM() {
          this.aplicar = true,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.content = `
          <table>
        <thead>
          <th></th>
          <th>Segunda</th>
          <th>Terça</th>
          <th>Quarta</th>
          <th>Quinta</th>
          <th>Sexta</th>
          <th class='emphasis-red'>Sábado</th>
        </thead>
        <tfoot>
          <td colspan="7">
            <b>Legenda:</b>
            <br>
            Livre &#8680; Horários Vagos; |
            -- &#8680; Horários preenchidos ou indisponíveis; 
          </td>
        </tfoot>
        <tbody>
          <tr>
            <th>07:00</th>
            <td>--</td> <!-- Amaju -->
            <td>Livre</td>
            <td>--</td> <!-- Amaju -->
            <td>Livre</td>
            <td>--</td> <!-- Amaju -->
            <td>Livre</td>
          </tr>
          <tr>
            <th>08:00</th>
            <td>Livre</td> 
            <td>Livre</td> 
            <td>Livre</td> 
            <td>Livre</td> 
            <td>--</td> 
            <td>--</td> 
          </tr>
          <tr>
            <th>09:00</th>
            <td>--</td> <!-- Haroldo -->
            <td>--</td> <!-- Haroldo -->
            <td>--</td> <!-- Haroldo -->
            <td>--</td> <!-- Haroldo -->
            <td>--</td> 
            <td>Livre</td> 
          </tr>

          <tr>
            <th>10:00</th> 
            <td>Livre</td>
            <td>Livre</td>
            <td>--</td>
            <td>Livre</td>
            <td>--</td>
            <td>Livre</td>
          </tr>
          <tr>
            <th>11:00</th>
            <td>Livre</td> 
            <td>Livre</td>
            <td>Livre</td>
            <td>--</td>
            <td>--</td> <!-- Letícia Constantino -->
            <td>Livre</td>
          </tr>
          

        </tbody>
      </table>
      <br><br><br><br>
          `
      },
      turnT(){
          this.aplicar = false,
          this.aplicarTwo = true,
          this.aplicarTree = false,
          this.content = `
          <table>
        <thead>
          <th></th>
          <th>Segunda</th>
          <th>Terça</th>
          <th>Quarta</th>
          <th>Quinta</th>
          <th>Sexta</th>
          <th class='emphasis-red'>Sábado</th>
        </thead>
        <tfoot>
          <td colspan="7">
            <b>Legenda:</b>
            <br>
            Livre &#8680; Horários Vagos; |
            -- &#8680; Horários preenchidos ou indisponíveis; 
          </td>
        </tfoot>
        <tbody>
          <tr>
            <th>12:00</th>
            <td>Livre</td> 
            <td>Livre</td> 
            <td>Livre</td>
            <td>Livre</td>
            <td>--</td> 
            <td>Livre</td>
          </tr>
          <tr>
            <th>13:00</th>
            <td>Livre</td> 
            <td>Livre</td> 
            <td>Livre</td>
            <td>Livre</td>
            <td>--</td>
            <td>Livre</td>
          </tr>
          <tr>
            <th>14:00</th>
            <td>Livre</td> 
            <td>Livre</td> 
            <td>Livre</td>
            <td>Livre</td>
            <td>--</td>
            <td>Livre</td>
          </tr>
          <tr>
            <th>15:00</th>
            <td>Livre</td> 
            <td>Livre</td> 
            <td>Livre</td>
            <td>Livre</td>
            <td>--</td>
            <td>Livre</td>
          </tr>
          <tr>
            <th>16:00</th>
            <td>Livre</td> 
            <td>Livre</td> 
            <td>Livre</td>
            <td>--</td>
            <td>--</td>
            <td>Livre</td>
          </tr>
          <tr>
            <th>17:00</th>
            <td>Livre</td> 
            <td>Livre</td> 
            <td>Livre</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>
          

        </tbody>
      </table>
      <br><br><br><br>
          `
      },
      turnN(){
          this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = true,
          this.content = `
          <table>
        <thead>
          <th></th>
          <th>Segunda</th>
          <th>Terça</th>
          <th>Quarta</th>
          <th>Quinta</th>
          <th>Sexta</th>
          <th class='emphasis-red'>Sábado</th>
        </thead>
        <tfoot>
          <td colspan="7">
            <b>Legenda:</b>
            <br>
            Livre &#8680; Horários Vagos; |
            -- &#8680; Horários preenchidos ou indisponíveis; 
          </td>
        </tfoot>
        <tbody>
          <tr>
            <tr>
            <th>18:00</th>
            <td>Livre</td> 
            <td>Livre</td> 
            <td>Livre</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>
          <tr>
            <th>19:00</th>
            <td>Livre</td> 
            <td>Livre</td> 
            <td>Livre</td>
            <td>Livre</td>
            <td>Livre</td>
            <td>--</td>
          </tr>
          <tr>
            <th>20:00</th>
            <td>--</td> 
            <td>--</td>
            <td>Livre</td> 
            <td>--</td>
            <td>Livre</td>
            <td>--</td>
          </tr>
          <tr>
            <th>21:00</th>
            <td>--</td> 
            <td>Livre</td> 
            <td>Livre</td>
            <td>Livre</td>
            <td>livre</td>
            <td>--</td>
          </tr>
          

        </tbody>
      </table>
      <br><br><br><br>
          `
      }
  }
}
</script>
