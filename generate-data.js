const faker = require("faker");
const fs = require("fs");

// set locale to vn
faker.locale = "en";

// random data
// console.log(faker.commerce.productName());
// console.log(faker.random.boolean());

const randomProductList = (n) => {
    if(n <= 0) return [];

    const productList = [];
    var count = 1;
    // loop and push product
    Array.from(new Array(n)).slice().forEach(() => {
        const product = {
            id: count++,
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            status: faker.random.boolean()
        };

        productList.push(product);
    });
    
    return productList;
}

const randomArticleList = (n) => {
    if(n <= 0) return [];

    const articleList = [];
    var count = 1;
    // loop and push product
    Array.from(new Array(n)).forEach(() => {
        const article = {
            id: count++,
            title: faker.name.title(),
            subTitle: faker.lorem.lines(),
            content: faker.lorem.paragraphs(),
            author: faker.name.lastName(),
            imgURL: faker.image.image(),
            createAt: new Date().toISOString(),
        };

        articleList.push(article);
    });

    return articleList;
}

// IFFE
(() => {
    //random data
    const productList = randomProductList(6);
    const articleList = randomArticleList(50);

    //prepare db object
    const db = {
        products: productList,
        articles: articleList,
    };

    //write db object to db.son
    fs.writeFile('db.json', JSON.stringify(db), () => {
        console.log('write data successfully!!!');
    });
})();
