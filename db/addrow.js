let addRow = `INSERT INTO products(
  shoeName,
  gender,
  SKU,
  price,
  size,
  currentShoeBigPictures,
  currentShoeSmallPictures,
  otherColorWays,
  colorway,
  fit,
  fitAlert,
  rating) VALUES (
    'adidas D.O.N. ISSUE #2',
    'Men''s',
    'FU7385',
    '$100.00',
    ARRAY[
      7.5,
      8,
      8.5,
      9,
      9.5,
      10,
      10.5,
      11,
      11.5,
      12,
      12.5,
      13,
      14,
      15,
      16,
      17,
      18
  ],
  ARRAY[
      'https://images.footlocker.com/is/image/EBFL2/FU7385_a1?wid=630&hei=630&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FU7385_a2?wid=630&hei=630&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FU7385_a3?wid=630&hei=630&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FU7385_a4?wid=630&hei=630&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FU7385_a5?wid=630&hei=630&fmt=png-alpha'
  ],
  ARRAY[
      'https://images.footlocker.com/is/image/EBFL2/FU7385_a1?wid=56&hei=56&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FU7385_a2?wid=56&hei=56&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FU7385_a3?wid=56&hei=56&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FU7385_a4?wid=56&hei=56&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FU7385_a5?wid=56&hei=56&fmt=png-alpha'
  ],
  ARRAY[
      'https://images.footlocker.com/is/image/EBFL2/FU7385?wid=185&hei=185&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FW8518?wid=185&hei=185&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FV8961?wid=185&hei=185&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FW8517?wid=185&hei=185&fmt=png-alpha'
  ],
  'Mitchell, Donovan | Glory Mint/Signal Green/Solar Red',
  'Width : Width - D - Medium',
  'Fit Alert: Item runs true to size. We suggest you order your normal size.',
  3
  )`;


let addRow2 = `
INSERT INTO products
SELECT
_id,
shoeName,
gender,
SKU,
price,
size,
currentShoeBigPictures,
currentShoeSmallPictures,
otherColorWays,
colorway,
fit,
fitAlert,
rating
FROM json_populate_record (null::products,
  '{
    "_id": 1,
    "shoename": "adidas D.O.N. ISSUE #2",
    "gender": "Men''s",
    "SKU": "FW8517",
    "price": "$110.00",
    "size": [
        7.5,
        8,
        8.5,
        9,
        9.5,
        10,
        10.5,
        11,
        11.5,
        12,
        12.5,
        13,
        14,
        15,
        16,
        17,
        18
    ],
    "currentShoeBigPictures": [
        "https://images.footlocker.com/is/image/EBFL2/FW8517_a1?wid=630&hei=630&fmt=png-alpha",
        "https://images.footlocker.com/is/image/EBFL2/FW8517_a2?wid=630&hei=630&fmt=png-alpha"
    ],
    "currentShoeSmallPictures": [
        "https://images.footlocker.com/is/image/EBFL2/FW8517_a1?wid=56&hei=56&fmt=png-alpha",
        "https://images.footlocker.com/is/image/EBFL2/FW8517_a2?wid=56&hei=56&fmt=png-alpha"
    ],
    "otherColorWays": [
        "https://images.footlocker.com/is/image/EBFL2/FW8517?wid=185&hei=185&fmt=png-alpha",
        "https://images.footlocker.com/is/image/EBFL2/FW8518?wid=185&hei=185&fmt=png-alpha",
        "https://images.footlocker.com/is/image/EBFL2/FV8961?wid=185&hei=185&fmt=png-alpha",
        "https://images.footlocker.com/is/image/EBFL2/FU7385?wid=185&hei=185&fmt=png-alpha"
    ],
    "colorway": "Signal Cyan/Black/Signal Cyan",
    "fit": "Width : Width - D - Medium",
    "fitAlert": "Fit Alert: Item runs true to size. We suggest you order your normal size.",
    "rating": 3
  }'
)`;

let data = `
  (
    'adidas D.O.N. ISSUE #2',
    'Men''s',
    'FU7385',
    '$100.00',
    ARRAY[7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18],
    ARRAY['https://images.footlocker.com/is/image/EBFL2/FU7385_a1?wid=630&hei=630&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FU7385_a2?wid=630&hei=630&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FU7385_a3?wid=630&hei=630&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FU7385_a4?wid=630&hei=630&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FU7385_a5?wid=630&hei=630&fmt=png-alpha'],
    ARRAY[
      'https://images.footlocker.com/is/image/EBFL2/FU7385_a1?wid=56&hei=56&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FU7385_a2?wid=56&hei=56&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FU7385_a3?wid=56&hei=56&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FU7385_a4?wid=56&hei=56&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FU7385_a5?wid=56&hei=56&fmt=png-alpha'
    ],
    ARRAY['https://images.footlocker.com/is/image/EBFL2/FU7385?wid=185&hei=185&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FW8518?wid=185&hei=185&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FV8961?wid=185&hei=185&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FW8517?wid=185&hei=185&fmt=png-alpha'],
    'Mitchell, Donovan | Glory Mint/Signal Green/Solar Red',
    'Width : Width - D - Medium',
    'Fit Alert: Item runs true to size. We suggest you order your normal size.',
    3
  ),
  (
    'adidas D.O.N. ISSUE #2',
    'Men''s',
    'FW8518',
    '$110.00',
    ARRAY[7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18],
    ARRAY['https://images.footlocker.com/is/image/EBFL2/FW8518_a1?wid=630&hei=630&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FW8518_a2?wid=630&hei=630&fmt=png-alpha'],
    ARRAY[
      'https://images.footlocker.com/is/image/EBFL2/FW8518_a1?wid=56&hei=56&fmt=png-alpha', 'https://images.footlocker.com/is/image/EBFL2/FW8518_a2?wid=56&hei=56&fmt=png-alpha'
    ],
    ARRAY['https://images.footlocker.com/is/image/EBFL2/FW8518?wid=185&hei=185&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FU7385?wid=185&hei=185&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FV8961?wid=185&hei=185&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FW8517?wid=185&hei=185&fmt=png-alpha'],
    'Solar Gold/Black/Solar Gold | Avail to ship early October',
    'Width : Width - D - Medium',
    'Fit Alert: Item runs true to size. We suggest you order your normal size.',
    3
  ),
  (
    'adidas D.O.N. ISSUE #2',
    'Men''s',
    'FV8961',
    '$110.00',
    ARRAY[7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18],
    ARRAY['https://images.footlocker.com/is/image/EBFL2/FV8961_a1?wid=630&hei=630&fmt=png-alpha', 'https://images.footlocker.com/is/image/EBFL2/FV8961_a2?wid=630&hei=630&fmt=png-alpha'],
    ARRAY[
      'https://images.footlocker.com/is/image/EBFL2/FV8961_a1?wid=56&hei=56&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FV8961_a2?wid=56&hei=56&fmt=png-alpha'
    ],
    ARRAY['https://images.footlocker.com/is/image/EBFL2/FV8961?wid=185&hei=185&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FW8518?wid=185&hei=185&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FU7385?wid=185&hei=185&fmt=png-alpha',
      'https://images.footlocker.com/is/image/EBFL2/FW8517?wid=185&hei=185&fmt=png-alpha'],
    'Power Pink/Black/Power Pink',
    'Width : Width - D - Medium',
    'Fit Alert: Item runs true to size. We suggest you order your normal size.',
    3
  ),
  (
    'adidas D.O.N. ISSUE #2',
    'Men''s',
    'FW8517',
    '$110.00',
    ARRAY[7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18],
    ARRAY['https://images.footlocker.com/is/image/EBFL2/FW8517_a1?wid=630&hei=630&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FW8517_a2?wid=630&hei=630&fmt=png-alpha'],
    ARRAY[
      'https://images.footlocker.com/is/image/EBFL2/FW8517_a1?wid=56&hei=56&fmt=png-alpha', 'https://images.footlocker.com/is/image/EBFL2/FW8517_a2?wid=56&hei=56&fmt=png-alpha'
    ],
    ARRAY['https://images.footlocker.com/is/image/EBFL2/FW8517?wid=185&hei=185&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FW8518?wid=185&hei=185&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FV8961?wid=185&hei=185&fmt=png-alpha',
        'https://images.footlocker.com/is/image/EBFL2/FU7385?wid=185&hei=185&fmt=png-alpha'],
    'Signal Cyan/Black/Signal Cyan',
    'Width : Width - D - Medium',
    'Fit Alert: Item runs true to size. We suggest you order your normal size.',
    3
  )
`;
module.exports = data;