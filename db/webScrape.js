const puppeteer = require('puppeteer');


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const footlockerUrl = (name, _id) =>
    `https://www.footlocker.com/product/${name}/${_id}.html`;
  const name = 'nike-zoom-gravity-mens';
  const _id = 'Q3202003';
  await page.goto(`https://www.footlocker.com/product/${name}/${_id}.html`, { waitUntil: 'networkidle2' });


  let data = await page.evaluate(() => {
    // Query DOM to gather schema data
    let shoeName = document.querySelector(`span[class='ProductName-primary']`).innerText;
    let gender = document.querySelector(`span[class='ProductName-alt']`).innerText;
    let SKU = document.querySelector('div[id="ProductDetails-tabs-details-panel"]').childNodes[1].data;
    let price = document.querySelector(`div[class='ProductPrice']`).innerText;
    let size = Array.from(document.querySelectorAll(
      `div[class='ProductSize-group']
        > div
        > label
        > span[class='c-form-label-content']`))
      .map(size => Number(size.innerText));
    let currentShoePictures = Array.from(document.querySelectorAll(
      `.slick-dots li button span span img`))
      .map(pic => pic.currentSrc);

      let otherColorWays = Array.from(document.querySelectorAll(
        `.SelectStyle img`))
        .map(pic => pic.currentSrc);

    let colorway = document.querySelectorAll(`p[class='ProductDetails-form__label']`)[0].innerText;
    let fit = document.querySelectorAll(`p[class='ProductDetails-form__label']`)[1].innerText;
    let fitAlert = document.querySelectorAll('p[class="ProductDetails-form__label"]')[2].innerText
    let rating = Number(document.querySelector(`span[itemprop='reviewCount']`).innerText);

    return ({ shoeName, gender, SKU, price, size, currentShoePictures, otherColorWays, colorway, fit, fitAlert, rating });
  });

  console.log(data);




  await browser.close();
})();

