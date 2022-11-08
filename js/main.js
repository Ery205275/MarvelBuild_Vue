//import component first
import HeroThumb from './components/HeroThumbnail.js';
import LightBox from './components/Lightbox.js';

(() => {
    // create vue instance here
    const { createApp } = Vue

    createApp({
        created() {
            fetch('./data.json')
             .then(res =>res.json())
             .then(data => this.heroData = data)
            .catch(error => console.error(error));
        },

        data() {
            return {
                heroData: {},
                lbData: {},
                showLightBox: false,
            }
        },
        components: {
            theherothumb: HeroThumb,
            lightbox: LightBox
        },
        methods:{
            loadLightbox(item) {
                this.lbData = item;
                this.showLightBox = true;
            }
        }
    }).mount('#app')
})()