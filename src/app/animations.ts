import { animation, style, animate, trigger, transition, useAnimation, state } from '@angular/animations';

export const openCloseAnimation = trigger('openClose', [
    state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow',
        border: '6px solid black'
    })),
    state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'orange',
        border: '3px solid red'
    })),
    transition('open => closed', [
        animate('1s')
    ]),
    transition('closed => open', [
        animate('0.5s')
    ])
]);
