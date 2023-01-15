<template>
    <div>


        <div class='main-tree'>
            <div>
                <h5><i class="fa-solid fa-arrows-spin"></i> Terapias</h5>
            </div>
        </div>
        <div class='main-four'>
            <div class='main-four-card'>
                <nuxt-link to="/terapias">Todas</nuxt-link>
                <nuxt-link to="/terapias/acupuntura">Acupuntura</nuxt-link>
                <nuxt-link to="/terapias/craniopuntura">Crâniopuntura</nuxt-link>
                <nuxt-link to="/terapias/ventosaterapia">Ventosaterapia</nuxt-link>
                <nuxt-link to="/terapias/auriculoterapia">Auriculoterapia</nuxt-link>
            </div>
        </div>



        <nuxt-child />

        <div class='divider'></div>


    </div>
</template>
<script>
export default {
    scrollToTop: true,
    head: {
        title: 'Terapias | Deep Acupuntura',
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
    padding-left: 10px;
    margin-left: 15px;
    margin-right: 60px;
    border-left: solid 5px #e23a28;
    color: #ddd;
}

.divider {
    height: 15px;
    background-color: #860d0d89;
}

.divider-ultimate {
    height: 30px;
    background-color: #860d0d;
}

.profile {
    background: #860d0d;
    display: flex;
    justify-content: flex-start;
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
}

.profile h4 {
    margin: 0 0 0 -10px;
    font-size: .9em;
    font-weight: 100;
    color: #e23a28;
}

.main-one {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 10px 0 15px 0;
    box-shadow: 0px 10px 5px #fff;
    background: #860d0d;
}

.main-one div {
    margin: 0 0 0 15px;
}

.main-one a:nth-child(1) i,
.main-one a:nth-child(2) i {
    padding-right: 3px;
    margin: 0 0 0 3px;
}

.main-one a:nth-child(2) i {
    padding-right: 4px;
    margin: 0 0 0 4px;
}

.main-one a:nth-child(3) i {
    margin: 0 0 0 3px;
    padding-right: 3px;
}

.main-one a {
    margin: 0 0 0 10px;
    color: #ddd;
}

.main-two {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    padding: 15px 0 18px 0;
    color: black;
    box-shadow: 0px 10px 20px #fff;
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
    margin: 10px 0px 22px 10px;
}

.main-four {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: -10px 0 0 0;
    color: #fff;
    background: #860d0d;
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
    margin: -10px 0 10px 10px;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
}

.main-four-card a {
    border: solid .1px #dddddd54;
    padding: 2px 6px;
    margin: 10px 4px;
    border-radius: 0% 10% 10% 10%;
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

.main-five {
    background: #860d0d;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: -10px 0 0 0;
    color: #fff;
    box-shadow: 0px 10px 10px#fff;
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
    border: solid .5px #e23a28;
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

@media only screen and (max-width: 369px) {}
</style>