import { fromEvent } from 'rxjs';

const node = document.querySelector('input[type=text]');

const input$ = new fromEvent(node, 'input');
input$.subscribe({
  next: event => console.log(`You just typed ${event.target.value}!`),
  error: err => console.log(`Oops... ${err}`),
  complete: () => console.log(`Complete!`),
});