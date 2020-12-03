const addToCart = require('./index.js');
const mongoose = require('mongoose');

let data = [
  {
    shoeName: 'adidas D.O.N. ISSUE #2',
    gender: 'Men\'s',
    SKU: 'FU7385',
    price: '$100.00',
    size:
      [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18],
    currentShoeBigPictures:
      ['https://images.footlocker.com/is/image/EBFL2/FU7385_a1?wid=630&hei=630&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FU7385_a2?wid=630&hei=630&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FU7385_a3?wid=630&hei=630&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FU7385_a4?wid=630&hei=630&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FU7385_a5?wid=630&hei=630&fmt=png-alpha'],
    currentShoeSmallPictures: [
      'https://images.footlocker.com/is/image/EBFL2/FU7385_a1?wid=56&hei=56&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FU7385_a2?wid=56&hei=56&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FU7385_a3?wid=56&hei=56&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FU7385_a4?wid=56&hei=56&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FU7385_a5?wid=56&hei=56&fmt=png-alpha'
    ],
    otherColorWays:
      ['https://images.footlocker.com/is/image/EBFL2/FU7385?wid=185&hei=185&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FW8518?wid=185&hei=185&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FV8961?wid=185&hei=185&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FW8517?wid=185&hei=185&fmt=png-alpha'],
    colorway: 'Mitchell, Donovan | Glory Mint/Signal Green/Solar Red',
    fit: 'Width : Width - D - Medium',
    fitAlert:
      'Fit Alert: Item runs true to size. We suggest you order your normal size.',
    rating: 3
  },
  {
    shoeName: 'adidas D.O.N. ISSUE #2',
    gender: 'Men\'s',
    SKU: 'FW8518',
    price: '$110.00',
    size:
      [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18],
    currentShoeBigPictures:
      ['https://images.footlocker.com/is/image/EBFL2/FW8518_a1?wid=630&hei=630&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FW8518_a2?wid=630&hei=630&fmt=png-alpha'],
    currentShoeSmallPictures: [
      'https://images.footlocker.com/is/image/EBFL2/FW8518_a1?wid=56&hei=56&fmt=png-alpha', 'https://images.footlocker.com/is/image/EBFL2/FW8518_a2?wid=56&hei=56&fmt=png-alpha'
    ],
    otherColorWays:
      ['https://images.footlocker.com/is/image/EBFL2/FW8518?wid=185&hei=185&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FU7385?wid=185&hei=185&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FV8961?wid=185&hei=185&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FW8517?wid=185&hei=185&fmt=png-alpha'],
    colorway: 'Solar Gold/Black/Solar Gold | Avail to ship early October',
    fit: 'Width : Width - D - Medium',
    fitAlert:
      'Fit Alert: Item runs true to size. We suggest you order your normal size.',
    rating: 3
  },
  {
    shoeName: 'adidas D.O.N. ISSUE #2',
    gender: 'Men\'s',
    SKU: 'FV8961',
    price: '$110.00',
    size:
      [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18],
    currentShoeBigPictures: ['https://images.footlocker.com/is/image/EBFL2/FV8961_a1?wid=630&hei=630&fmt=png-alpha', 'https://images.footlocker.com/is/image/EBFL2/FV8961_a2?wid=630&hei=630&fmt=png-alpha'],
    currentShoeSmallPictures: [
      'https://images.footlocker.com/is/image/EBFL2/FV8961_a1?wid=56&hei=56&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FV8961_a2?wid=56&hei=56&fmt=png-alpha'
    ],
    otherColorWays: ['https://images.footlocker.com/is/image/EBFL2/FV8961?wid=185&hei=185&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FW8518?wid=185&hei=185&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FU7385?wid=185&hei=185&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FW8517?wid=185&hei=185&fmt=png-alpha'],
    colorway: 'Power Pink/Black/Power Pink',
    fit: 'Width : Width - D - Medium',
    fitAlert:
      'Fit Alert: Item runs true to size. We suggest you order your normal size.',
    rating: 3
  },
  {
    shoeName: 'adidas D.O.N. ISSUE #2',
    gender: 'Men\'s',
    SKU: 'FW8517',
    price: '$110.00',
    size:
      [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18],
    currentShoeBigPictures:
      ['https://images.footlocker.com/is/image/EBFL2/FW8517_a1?wid=630&hei=630&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FW8517_a2?wid=630&hei=630&fmt=png-alpha'],
    currentShoeSmallPictures: [
      'https://images.footlocker.com/is/image/EBFL2/FW8517_a1?wid=56&hei=56&fmt=png-alpha', 'https://images.footlocker.com/is/image/EBFL2/FW8517_a2?wid=56&hei=56&fmt=png-alpha'
    ],
    otherColorWays:
      ['https://images.footlocker.com/is/image/EBFL2/FW8517?wid=185&hei=185&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FW8518?wid=185&hei=185&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FV8961?wid=185&hei=185&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FU7385?wid=185&hei=185&fmt=png-alpha'],
    colorway: 'Signal Cyan/Black/Signal Cyan',
    fit: 'Width : Width - D - Medium',
    fitAlert:
      'Fit Alert: Item runs true to size. We suggest you order your normal size.',
    rating: 3
  }
];
//   {
//     shoeName: 'Jordan AJ 1 Mid',
//     gender: 'Men\'s',
//     SKU: '54724130',
//     price: '$115.00',
//     size: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/54724130_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/54724130_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/54724130_a3?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/54724130?wid=185&hei=185&fmt=png-alpha'],
//     colorway: 'White/White/White',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 785
//   },
//   {
//     shoeName: 'Nike Air Max 270',
//     gender: 'Men\'s',
//     SKU: ' ',
//     price: '$150.00',
//     size:
//       [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/H8050005_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050005_a2?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/H8050005?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050100?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050002?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/V6078600?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'Black/Black/Black',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 206
//   },
//   {
//     shoeName: 'Nike Air Max 270',
//     gender: 'Men\'s',
//     SKU: 'H8050100',
//     price: '$150.00',
//     size:
//       [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/H8050100_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050100_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050100_a3?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050100_a4?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050100_a5?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/H8050100?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050002?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050005?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/V6078600?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'White/Black/White',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 206
//   },
//   {
//     shoeName: 'Nike Air Max 270',
//     gender: 'Men\'s',
//     SKU: 'H8050002',
//     price: '$150.00',
//     size:
//       [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/H8050002_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050002_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050002_a3?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050002_a4?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050002_a5?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/H8050002?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050100?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050005?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/V6078600?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'Black/Anthracite/White',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 206
//   },
//   {
//     shoeName: 'Nike Air Max 270',
//     gender: 'Men\'s',
//     SKU: 'V6078600',
//     price: '$139.99$150.00',
//     size:
//       [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/V6078600_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/V6078600_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/V6078600_a3?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/V6078600_a4?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/V6078600_a5?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/V6078600?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050100?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050005?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050002?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'Red Orbit/Black/Vast Grey | Wonders of the City',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 206
//   },
//   {
//     shoeName: 'Nike Air Max 270',
//     gender: 'Men\'s',
//     SKU: 'J0550100',
//     price: '$129.99$150.00',
//     size:
//       [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/J0550100_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/J0550100_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/J0550100_a3?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/J0550100?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050100?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050005?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/V6078600?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'White/University Red/Vast Grey | SD',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 206
//   },
//   {
//     shoeName: 'Nike Air Max 270',
//     gender: 'Men\'s',
//     SKU: 'J0520001',
//     price: '$129.99$150.00',
//     size:
//       [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/J0520001_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/J0520001_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/J0520001_a3?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/J0520001_a4?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/J0520001?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050100?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050005?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/V6078600?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'Grey/Mint/Black',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 206
//   },
//   {
//     shoeName: 'Nike Air Max 270',
//     gender: 'Men\'s',
//     SKU: 'V7544600',
//     price: '$150.00',
//     size:
//       [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/V7544600_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/V7544600_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/V7544600_a3?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/V7544600_a4?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/V7544600_a5?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/V7544600?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050100?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/H8050005?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/V6078600?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'University Red/University Red/Black',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 206
//   },
//   {
//     shoeName: 'Nike Air Vapormax Plus',
//     gender: 'Men\'s',
//     SKU: '24453004',
//     price: '$200.00',
//     size: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/24453004_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453004_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453004_a3?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453004_a4?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453004_a5?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/24453004?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453602?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453100?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453107?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'Black/Black/Dark Grey',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 182
//   },
//   {
//     shoeName: 'Nike Air Vapormax Plus',
//     gender: 'Men\'s',
//     SKU: '24453602',
//     price: '$169.99$190.00',
//     size: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/24453602_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453602_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453602_a3?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453602_a4?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453602_a5?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/24453602?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453004?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453100?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453107?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'Bright Crimson/Black/White',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 182
//   },
//   {
//     shoeName: 'Nike Air Vapormax Plus',
//     gender: 'Men\'s',
//     SKU: '24453100',
//     price: '$200.00',
//     size: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/24453100_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453100_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453100_a3?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453100_a4?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453100_a5?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/24453100?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453602?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453004?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453107?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'White/White/Pure Platinum',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 182
//   },
//   {
//     shoeName: 'Nike Air Vapormax Plus',
//     gender: 'Men\'s',
//     SKU: '24453107',
//     price: '$169.99$190.00',
//     size: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/24453107_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453107_a2?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/24453107?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453602?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453100?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453004?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'White/Black/Aurora Green/Cosmic Clay',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 182
//   },
//   {
//     shoeName: 'Nike Air Vapormax Plus',
//     gender: 'Men\'s',
//     SKU: 'U4863600',
//     price: '$200.00',
//     size: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/U4863600_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/U4863600_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/U4863600_a3?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/U4863600_a4?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/U4863600_a5?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/U4863600?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453602?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453100?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453107?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'University Red/Black/White',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 182
//   },
//   {
//     shoeName: 'Nike Air Vapormax Plus',
//     gender: 'Men\'s',
//     SKU: 'W6973600',
//     price: '$200.00',
//     size: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/W6973600_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/W6973600_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/W6973600_a3?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/W6973600_a4?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/W6973600_a5?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/W6973600?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453602?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453100?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453107?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'University Red/University Red',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 182
//   },
//   {
//     shoeName: 'Nike Air Vapormax Plus',
//     gender: 'Men\'s',
//     SKU: 'U4709001',
//     price: '$179.99$210.00',
//     size: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/U4709001_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/U4709001_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/U4709001_a3?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/U4709001_a4?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/U4709001_a5?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/U4709001_a6?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/U4709001_a7?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/U4709001?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453602?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453100?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453107?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'Black/Laser Crimson/Volt',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 182
//   },
//   {
//     shoeName: 'Nike Air Vapormax Plus',
//     gender: 'Men\'s',
//     SKU: 'W7299001',
//     price: '$200.00',
//     size: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/W7299001_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/W7299001_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/W7299001_a3?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/W7299001_a4?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/W7299001_a5?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/W7299001_a6?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/W7299001?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453602?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453100?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453107?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'Black/Metallic Gold',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 182
//   },
//   {
//     shoeName: 'Nike Air Vapormax Plus',
//     gender: 'Men\'s',
//     SKU: 'Z7904001',
//     price: '$200.00',
//     size: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/Z7904001_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/Z7904001_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/Z7904001_a3?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/Z7904001_a4?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/Z7904001_a5?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/Z7904001?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453602?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453100?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/24453107?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'Black/Green Strike/Flash Crimson',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 182
//   },
//   {
//     shoeName: 'Nike KD 13',
//     gender: 'Men\'s',
//     SKU: 'A1340100',
//     price: '$160.00',
//     size:
//       [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/A1340100_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/A1340100_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/A1340100_a3?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/A1340100_a4?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/A1340100_a5?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/A1340100?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948600?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948900?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948002?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'Durant, Kevin | Sail/Hyper Pink/Lemon Venom',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 14
//   },
//   {
//     shoeName: 'Nike KD 13',
//     gender: 'Men\'s',
//     SKU: '9948600',
//     price: '$109.99$160.00',
//     size:
//       [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/9948600_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948600_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948600_a3?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948600_a4?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948600_a5?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/9948600?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948001?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948900?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948002?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'Durant, Kevin | Pink/Red/Pink',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 14
//   },
//   {
//     shoeName: 'Nike KD 13',
//     gender: 'Men\'s',
//     SKU: '9948900',
//     price: '$139.99$150.00',
//     size:
//       [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/9948900_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948900_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948900_a3?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948900_a4?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948900_a5?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/9948900?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948600?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948001?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948002?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'Durant, Kevin | Multi-Color/Racer Blue/Smoke Grey',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 14
//   },
//   {
//     shoeName: 'Nike KD 13',
//     gender: 'Men\'s',
//     SKU: '9948002',
//     price: '$109.99$150.00',
//     size:
//       [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/9948002_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948002_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948002_a3?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948002_a4?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948002_a5?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/9948002?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948600?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948900?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948001?wid=149&hei=149&fmt=png-alpha'],
//     colorway:
//       'Durant, Kevin | Black/White/University Red | avail to ship mid June',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 14
//   },
//   {
//     shoeName: 'Nike KD 13',
//     gender: 'Men\'s',
//     SKU: '9948002',
//     price: '$109.99$150.00',
//     size:
//       [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/9948002_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948002_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948002_a3?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948002_a4?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948002_a5?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/9948002?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948600?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948900?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948001?wid=149&hei=149&fmt=png-alpha'],
//     colorway:
//       'Durant, Kevin | Black/White/University Red | avail to ship mid June',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 14
//   },
//   {
//     shoeName: 'Nike KD 13',
//     gender: 'Men\'s',
//     SKU: 'A0895102',
//     price: '$150.00',
//     size:
//       [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/A0895102_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/A0895102_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/A0895102_a3?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/A0895102_a4?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/A0895102_a5?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/A0895102?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948600?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948900?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948002?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'Durant, Kevin | White/Metallic Gold/Baltic Blue',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 14
//   },
//   {
//     shoeName: 'Nike KD 13',
//     gender: 'Men\'s',
//     SKU: '9948004',
//     price: '$150.00',
//     size:
//       [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/9948004_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948004_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948004_a3?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948004_a4?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948004_a5?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/9948004?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948600?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948900?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948002?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'Durant, Kevin | Black/White/Wolf Grey',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 14
//   },
//   {
//     shoeName: 'Nike KD 13',
//     gender: 'Men\'s',
//     SKU: 'A4318100',
//     price: '$160.00',
//     size:
//       [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/A4318100_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/A4318100_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/A4318100_a3?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/A4318100_a4?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/A4318100_a5?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/A4318100_a6?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/A4318100?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948600?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948900?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948002?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'White/Yellow/Blue | Avail to ship early September',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 14
//   },
//   {
//     shoeName: 'Nike KD 13',
//     gender: 'Men\'s',
//     SKU: '9948001',
//     price: '$109.99$150.00',
//     size:
//       [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/9948001_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948001_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948001_a3?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948001_a4?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948001_a5?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948001_a6?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948001_a7?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948001_a8?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/9948001?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948600?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948900?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948002?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'Durant, Kevin | Black/White/Grey',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 14
//   },
//   {
//     shoeName: 'Nike KD 13',
//     gender: 'Men\'s',
//     SKU: 'D0011600',
//     price: '$160.00',
//     size:
//       [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18],
//     currentShoePictures:
//       ['https://images.footlocker.com/is/image/EBFL2/D0011600_a1?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/D0011600_a2?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/D0011600_a3?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/D0011600_a4?wid=56&hei=56&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/D0011600_a5?wid=56&hei=56&fmt=png-alpha'],
//     otherColorWays:
//       ['https://images.footlocker.com/is/image/EBFL2/D0011600?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948600?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948900?wid=149&hei=149&fmt=png-alpha',
//         'https://images.footlocker.com/is/image/EBFL2/9948002?wid=149&hei=149&fmt=png-alpha'],
//     colorway: 'Durant, Kevin | Arctic Pink/Blue Void/Light Orewood Brown',
//     fit: 'Width : Width - D - Medium',
//     fitAlert:
//       'Fit Alert: Item runs true to size. We suggest you order your normal size.',
//     rating: 14
//   }
// ];

addToCart.remove({})
  .then((results) => {
    console.log('seeded succesful');
  }).then(
    () => {
      addToCart.create(data)
        .then((results) => {
          console.log('seeded succesful');
          mongoose.connection.close();
        });
    }
  )
  .catch((err) => {
    console.log(err);
  });


