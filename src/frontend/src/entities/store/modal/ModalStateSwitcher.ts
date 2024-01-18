import { makeAutoObservable } from "mobx";


class ModalStatementHandler {
    showing: boolean = false;
    wheelEvent: string;

    constructor() {
        makeAutoObservable(this);
        this.wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    }
   
    open = () => {
        this.showing = true;
        window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
        window.removeEventListener(this.wheelEvent, this.preventDefault, {passive: false}); 
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
        this.preventDefault(e);
        let keys = ["ArrowDown", "ArrowUp", "PageUp", "PageDown"];
        if (e.key in keys) {
            this.preventDefault(e)
            return false
        };
        if (e.key == "Escape") {
            this.switchState();
        }
    }

}

export default ModalStatementHandler;