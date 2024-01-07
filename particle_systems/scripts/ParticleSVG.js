// ======= HELPERS ==========




export class ParticleSVG {

    constructor(svgSrc, container, colorsArray){

        this.seed = Math.random();
        this.container = container;
        this.id = this.makeid(6);
        this.obj = document.createElement('object');
        this.accentColor =  colorsArray[this.getIntFromSeed( colorsArray.length)];
        this.size = this.getIntFromSeed(7) * 10 + 50;
        this.speed = 150/this.size;
        this.zIndex = this.getIntFromSeed(7) * 20;
        this.positionLeft = this.getIntFromSeed(80);
        this.delay = this.seed * 15;
        this.style = "";
        this.style.concat(
            `left: ${this.positionLeft}%; `,
            `width: ${size}px; `,
            `transition: all ${speed}s linear; `, 
            `transition-delay: ${this.delay}s;`,
            `z-index: ${this.zIndex};`
        );

        this.obj.setAttribute('class', `particle p${this.id}`);
        this.obj.setAttribute('data', svgSrc);
        this.obj.setAttribute('type', 'image/svg+xml');
        this.obj.setAttribute('style', this.style );
    }

    getIntFromSeed(max){
        return Math.floor(this.seed * max);
    }
    makeid(length) {
        // By csharptest.net & Code_Worm || stackoverflow => https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }
}