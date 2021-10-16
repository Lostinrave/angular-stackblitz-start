export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Iphone 13',
    price: 799,
    description: 'A large phone with one of the best screens',
    photo: 'https://images.kaina24.lt/43/63/iphone-13-128gb.jpg'
  },
  {
    id: 2,
    name: 'Samsung s21',
    price: 699,
    description: 'A great phone with one of the best cameras',
    photo:'https://images.kaina24.lt/43/14/samsung-galaxy-s21-128gb-2.jpg'
  },
  {
    id: 3,
    name: 'One plus 9',
    price: 299,
    description: '',
    photo:'https://images.kaina24.lt/43/93/oneplus-9-pro-2.jpg'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/