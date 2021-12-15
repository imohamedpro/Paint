export class MenuItem{
    icon:string;
    text:string;
    isClicked: boolean;
    style: string;
    constructor(icon:string, text:string){
        this.icon = icon;
        this.text = text;
        (text == 'Move') ? this.isClicked=true : this.isClicked=false;
        (this.isClicked) ? this.style = 'color: #342ead': this.style = '';
    }
    click():void{
        if(!this.isClicked) this.invertIcon();
        this.isClicked = true;
        this.style = 'color: #342ead'
    }
    declick():void{
        if(this.isClicked) this.invertIcon();
        this.isClicked = false;
        this.style = '';
    }
    invertIcon():void{
        switch(this.icon){
            case '□':
                this.icon = '■';
                break;
            case '■':
                this.icon = '□';
                break;
            case '⬬':
                this.icon = '⬭';
                break;
            case '⬭':
                this.icon = '⬬';
                break;
            case '△':
                this.icon = '▲';
                break;
            case '▲':
                this.icon = '△';
                break;
            case '▭':
                this.icon = '▬';
                break;
            case '▬':
                this.icon = '▭';
                break;
            case '○':
                this.icon = '●';
                break;
            case '●':
                this.icon = '○';
                break;
        }
    }
}