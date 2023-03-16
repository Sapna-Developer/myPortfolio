import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export let fadeIn = trigger('fadeIn', [
  state('void', style({ opacity: 0, transform: 'translateX(20px)' })),
  transition(':enter,:leave', [animate(2000)]),
]);
