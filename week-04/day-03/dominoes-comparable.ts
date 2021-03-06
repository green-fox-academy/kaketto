'use strict';

import {Domino} from "./domino-comparable";

let dominoes: Domino[] = [];
dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2 ,4));
dominoes.push(new Domino(7, 1));

dominoes.sort(function (a: Domino, b: Domino): number {
  return a.compareTo(b);
  });

console.log(dominoes);

for (let domino of dominoes) {
  domino.printAllFields();
}
