
for (let i = 1; i <= 10; i++) {
    switch (i) {
        case 1:

            document.write('Tasck 1 Вивести на сторінку в один рядок через кому числа від 10 до 20. ');
            document.write('<br>');
            let number = [];
            let counter = 0;
            for (let i = 10; i <= 20; i++) {

                number[counter] = i;
                counter++;
            }
            document.write(number);
            document.write('<br>');
            document.write('<br>');
            break;

        case 2:
            document.write('Tasck 2 Вивести квадрати чисел від 10 до 20. ');
            document.write('<br>');
            let numbertwo = [];
            let countertwo = 0;
            for (let i = 10; i <= 20; i++) {

                numbertwo[countertwo] = Math.pow(i, 2);
                countertwo++;
            }
            document.write(numbertwo);
            document.write('<br>');
            document.write('<br>');
            break;

        case 3:
            document.write(' Tasck 3 Вивести таблицю множення на 7.');

            let tb = [];
            for (let i = 0; i <= 9; i++) {
                tb[i] = ((i + 1) * 7);
                console.log(i);
                console.log(tb)
                document.write(`<br> ${tb[i]}`)

            }
            document.write('<br>');
            document.write('<br>');
            break;

        case 4:
            document.write('Tasck 4 Знайти суму всіх цілих чисел від 1 до 15.');
            document.write('<br>');
            let sum = 0;
            for (let i = 1; i <= 15; i++) {
                sum += i;
            }
            document.write(sum);
            document.write('<br>');
            document.write('<br>');
            break;
        case 5:
            document.write('Tasck 5 Знайти добуток усіх цілих чисел від 15 до 35.');
            document.write('<br>');
            let product = 1;
            for (let i = 15; i <= 35; i++) {
                product *= i;
                console.log(Math.floor(product));
            }
            document.write(product);
            document.write('<br>');
            document.write('<br>');
            break;
        case 6:
            document.write('Tasck 6 Знайти середнє арифметичне всіх цілих чисел від 1 до 500.');
            document.write('<br>');
            let sum1 = 0;
            let i = 1
            for (i = 1; i <= 500; i++) {
                sum1 += i;
            }
            document.write(sum1);
            document.write('<br>');
            document.write('<br>');
            break;
        case 7:
            document.write('Tasck 7 Вивести суму лише парних чисел в діапазоні від 30 до 80.');
            document.write('<br>');
            let sum2 = 0;

            for (let i = 30; i <= 80; i++) {
                if (i % 2 === 0) {
                    sum2 += i;
                }
            }
            document.write(sum2);
            document.write('<br>');
            document.write('<br>');
            break;
        case 8:
            document.write('Tasck 8 Вивести всі числа в діапазоні від 100 до 200 кратні 3.');
            document.write('<br>');
            for (let i = 100; i <= 200; i++) {
                if (i % 3 === 0) {

                    document.write(`${i}<br>`);
                }
            }
            document.write('<br>');
            document.write('<br>');
            break;
        case 9:
            document.write(`Tasck 9/10/11 
            9: Дано  натуральне число. Знайти та вивести на сторінку всі його дільники.
            10: Визначити кількість його парних дільників.
            11: Знайти суму його парних дільників.`);
            document.write('<br>');
            let sum3 = 0;
            let counter3 = 0;
            let usernumber = +prompt("print you'r number!", 2);
            for (let i = 1; i <= usernumber; i++) {
                if (usernumber % i === 0) {

                    document.write(`${i}<br>`);
                    if (i % 2 == 0) {
                        counter3++;

                        sum3 += i;


                    }
                }


            }
            document.write(`парних дільників ${counter3} а   їх сума ${sum3}`);
            document.write('<br>');
            document.write('<br>');
            break;
        case 10:
            document.write('Tasck 12 Надрукувати повну таблицю множення від 1 до 10.');
            document.write('<br>');
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
            document.write(`</table>`)
            document.write('<br>');
            document.write('<br>');
            break;



        default:
            break;
    }

}
