class Wolf {
    constructor() {
      this.strength = Math.floor(Math.random() * 100);
    }
  
    howl() {
      console.log('Auuuuu!');
    }
  }
  
  // TODO 2: Ekspor class Wolf
  module.exports = Wolf;
  