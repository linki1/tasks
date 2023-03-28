//1
/*
let number = [];
let counter = 0;
for (let i = 10; i <= 20; i++) {

    number[counter] = i;
    counter++;
}
document.write(number);*/
//2
/*
let number = [];
let counter = 0;
for (let i = 10; i <= 20; i++) {

    number[counter] = Math.pow(i, 2);
    counter++;
}
document.write(number);*/
//3
/*
let tb = [];
for (let i = 0; i <= 9; i++) {
    tb[i] = ((i + 1) * 7);
    console.log(i);
    console.log(tb)
    document.write(`<br> ${tb[i]}`)

}*/
//4
/*let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log(sum);*/
//5
/*let product = 1;
for (let i = 15; i <= 35; i++) {
    product *= i;
}
console.log(product);*/
//6
/*let sum = 0;
let i = 1
for (i = 1; i <= 500; i++) {
    sum += i;
}
console.log(sum / i);*/
//7

/*let sum = 0;

for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(sum);*/
//8
/*
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {

        document.write(`${i}<br>`);
    }
}*/
// 9,10,11
/*
let sum = 0;
let counter = 0;
let usernumber = +prompt("print you'r number!", 2);
for (let i = 1; i <= usernumber; i++) {
    if (usernumber % i === 0) {

        document.write(`${i}<br>`);
        if (i % 2 === 0) {
            counter++;
            console.log(counter)
            sum += i;
            console.log(sum)
        }
    }


}
document.write(`парних дільників ${counter} а   їх сума ${sum}`);*/
//12
/*
let arr = [[], []];
document.write(`<table style = "border-collapse: collapse; border-spacing: 0;" >`)
for (let i = 1; i <= 10; i++) {
    document.write(`<tr style ="border: 1px solid black;">`)
    arr[i] = i;
    for (let j = 1; j < 11; j++) {
        document.write(`<td style ="border: 1px solid black;"> ${[i][j] = i * j}</td > `);




    }
    document.write(`</tr>`)

}
document.write(`</table>`)*/
