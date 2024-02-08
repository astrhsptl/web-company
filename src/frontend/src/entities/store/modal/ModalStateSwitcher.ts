import { makeAutoObservable } from "mobx";


class ModalStatementHandler {
    showing: boolean = false;
    wheelEvent: string;
    keys: string[];

    constructor() {
        makeAutoObservable(this);
        this.wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
        this.keys = ["ArrowDown", "ArrowUp", "PageUp", "PageDown", "Home", "End"];


    }
   
    open = () => {
        this.showing = true;
        window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
        window.removeEventListener(this.wheelEvent, this.preventDefault); 
        window.removeEventListener('touchmove', this.preventDefault, false);
        window.removeEventListener('keydown', this.preventDefaultForScrollKeys, false);
    }

    close = () => {
        this.showing = false;
        window.addEventListener('DOMMouseScroll', this.preventDefault, false);
        window.addEventListener(this.wheelEvent, this.preventDefault, {passive: false});
        window.addEventListener('touchmove', this.preventDefault, false);
        window.addEventListener('keydown', this.preventDefaultForScrollKeys, false);
    }

    switchState = () => {
        if (this.showing) {
            this.open()
        } else {
            this.close()
        }
        this.showing = !this.showing;
    }

    preventDefault = (e: Event) => {
        e.preventDefault();
    }
    
    preventDefaultForScrollKeys = (e: KeyboardEvent) => {
        if (this.keys.includes(e.key)) e.preventDefault();
        if (e.key == "Escape") this.switchState();
    }

}

export default ModalStatementHandler;