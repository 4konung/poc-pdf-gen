const puppeteer = require('puppeteer');
const fs = require('fs');
const renderChartToString = require('./lib/renderChartToString').default

const writeToFile = (buffer, fileName) => new Promise((resolve, reject) => {
  fs.writeFile(fileName, buffer, (error) => {
    if (error) {
      console.error(error);

      reject(error)
    } else {
      resolve(buffer)
    }
  })
});

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    dumpio: true
  });

  const page = await browser.newPage();
  const htmlStr = renderChartToString();

  await page.setViewport({
    width: 1766,
    height: 1000,
  });
  await page.setJavaScriptEnabled(true)
  await page.setContent(htmlStr, { waitUntil: 'networkidle0' });

  const pdfBuffer = await page.pdf({printBackground: true});

  await browser.close();

  await writeToFile(pdfBuffer, 'temp01.pdf')

  process.exit(0);
})().catch(e => {
  console.log(e);

  process.exit(1);
})

