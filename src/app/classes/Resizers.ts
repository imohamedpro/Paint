export class Resizer {
    array: Array<String>;
    constructor(){
        this.array = ['NW', 'N', 'NE',
                         'W',       'E',
                         'SW', 'S', 'SE'];
    }
}
export class Resizer1D extends Resizer{
    constructor(){
        super();
        this.array = ['NW',     'NE',
                      'SW',     'SE'];
    }
}
export class Resizer0D extends Resizer{
    constructor(x: number){
        super();
        for(let i = 0; i < x; i++){
            this.array[i] = 'a' + i;
        }
    }
}
export class ResizerFactory {
    getResizer(type: string): Resizer{
        let resizer = new Resizer();
        switch(type){
            case 'square':
            case 'circle':
                resizer = new Resizer1D();
                break;
            case 'line':
                resizer = new Resizer0D(2);
                break;
            case 'triangle':
                resizer = new Resizer0D(3);
        }
        return resizer;
    }
}