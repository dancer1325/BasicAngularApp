import { Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{
    mostrar = true;
    frase: any={
        mensaje: 'Blabla',
        autor: 'Yo'
    }
    personajes: string[] = ['Mi', 'Tu', 'El'];
}