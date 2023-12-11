const app = Vue.createApp({
    data() {
      return {
        images: [
          { url: './images/caspian.jpg', alt: 'Image 1', description: 'Caspian Tiger' },
          { url: './images/goldentoad.jpg', alt: 'Image 2', description: 'Golden Toad' },
          { url: './images/sealion.jpg', alt: 'Image 3', description: 'Japanese Sea lion' },
          { url: './images/tastiger.jpg', alt: 'Image 4', description: 'Tasmanian Tiger' },
          { url: './images/tort.jpg', alt: 'Image 5', description: 'Pinta Island Tortoise' },
          { url: './images/dodo.jpg', alt: 'Image 6', description: 'Dodo Bird' },

        ],
      };
    },
    methods: {
        flipCard(index) {
          console.log(`Flipping card ${index}`);
        },
        unflipCard(index) {
          console.log(`Unflipping card ${index}`);
        },
      },
    });
    
    app.mount('#app');