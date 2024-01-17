import { makeAutoObservable } from "mobx";

class ModalStatementHandler {
    showing: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    open = () => {
        this.showing = true;
    }

    close = () => {
        this.showing = false;
    }

    switchState = () => {
        this.showing = !this.showing;        
    }
}

export default ModalStatementHandler;