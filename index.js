// let test = document.getElementById("test");
// test.innerHTML+="iniciando...<br>"
// test.innerHTML+="esperando 5 segundos<br>";
// delay(5).then(s => {
//     test.innerHTML += `Passou ${s} segundos`
// })
// .catch(erro => {
//     console.log(erro);
// });
// test.innerHTML+="seguindo<br>";

// function init() {
//     let test = document.getElementById("test");
//     test.innerHTML+="iniciando...<br>"
//     test.innerHTML+="esperando 5 segundos<br>";
//     passou();
//     test.innerHTML+="seguindo<br>";
// }


// async function passou() {

//     try {
//         test.innerHTML+="seguindo1<br>";
//         let s  = await delay(5);
//     } catch (error) {
//         console.log(erro);
//     }
   
//     test.innerHTML += `Passou ${s} segundos`
// }
// ;

//init();





// try {
//     throw Error("erro")
// } catch (error) {
//     console.log(error)
// }











let txtContador1 = document.getElementById("contador1");
let btSync1 = document.getElementById("sync1");
let btAsync1 = document.getElementById("async1");
let txtContador2 = document.getElementById("contador2");
let btSync2 = document.getElementById("sync2");
let btAsync2 = document.getElementById("async2");
let txtContador3 = document.getElementById("contador3");
let btSync3 = document.getElementById("sync3");
let btAsync3 = document.getElementById("async3");
let btPromiseAll = document.getElementById("promise-all");
let btPromiseRace = document.getElementById("promise-race");



btSync1.addEventListener("click", () => {
    btSync1.disabled = true;
    btAsync1.disabled = true;
    let vezes = 10;
    while(vezes>=0) {
        txtContador1.innerHTML = vezes;
        loop();
        vezes -= 1;
    }
    btSync1.disabled = false;
    btAsync1.disabled = false;
})


btAsync1.addEventListener("click", () => {
    btSync1.disabled = true;
    btAsync1.disabled = true;
    let vezes = 10;

    let exec = () => {
        loopAsync().then((s) => {
            console.log(s);
            txtContador1.innerHTML = vezes;
            vezes -= 1;
            if (vezes>=0) {
                exec();
            }
            else {
                btSync1.disabled = false;
                btAsync1.disabled = false;
            }
        })
    }

    exec();
    
})



btSync2.addEventListener("click", () => {
    btSync2.disabled = true;
    btAsync2.disabled = true;
    let vezes = 15;
    while(vezes>=0) {
        txtContador2.innerHTML = vezes;
        loop();
        vezes -= 1;
    }
    btSync2.disabled = false;
    btAsync2.disabled = false;
})


btAsync2.addEventListener("click", async () => {
    btSync2.disabled = true;
    btAsync2.disabled = true;
    let vezes = 15;
    while(vezes>=0) {
        txtContador2.innerHTML = vezes;
        await loopAsync();
        vezes -= 1;
    }
    btSync2.disabled = false;
    btAsync2.disabled = false;
    
})




btSync3.addEventListener("click", () => {
    btSync3.disabled = true;
    btAsync3.disabled = true;
    let vezes = 20;
    while(vezes>=0) {
        txtContador3.innerHTML = vezes;
        loop();
        vezes -= 1;
    }
    btSync3.disabled = false;
    btAsync3.disabled = false;
})


btAsync3.addEventListener("click", async () => {
    btSync3.disabled = true;
    btAsync3.disabled = true;
    let vezes = 15;
    while(vezes>=0) {
        txtContador3.innerHTML = vezes;
        await loopWebWorkerAsync();
        vezes -= 1;
    }
    btSync3.disabled = false;
    btAsync3.disabled = false;
    
})


async function rotina(c, v) {
    let vezes = v;
    while(vezes>=0) {
        c.innerHTML = vezes;
        await loopWebWorkerAsync();
        vezes -= 1;
    }
}

btPromiseAll.addEventListener("click", async () => {
    btSync1.disabled = true;
    btAsync1.disabled = true;
    btSync2.disabled = true;
    btAsync2.disabled = true;
    btSync3.disabled = true;
    btAsync3.disabled = true;
    
    let p1 = rotina(txtContador1, 5);
    let p2 = rotina(txtContador2, 10);
    let p3 = rotina(txtContador3, 15);

    await Promise.all([p1, p2, p3]);

    alert("finalizou");

    btSync1.disabled = false;
    btAsync1.disabled = false;
    btSync2.disabled = false;
    btAsync2.disabled = false;
    btSync3.disabled = false;
    btAsync3.disabled = false;
    
})

btPromiseRace.addEventListener("click", async () => {
    btSync1.disabled = true;
    btAsync1.disabled = true;
    btSync2.disabled = true;
    btAsync2.disabled = true;
    btSync3.disabled = true;
    btAsync3.disabled = true;
    
    let p1 = rotina(txtContador1, 5);
    let p2 = rotina(txtContador2, 10);
    let p3 = rotina(txtContador3, 15);

    await Promise.race([p1, p2, p3]);

    alert("finalizou");

    btSync1.disabled = false;
    btAsync1.disabled = false;
    btSync2.disabled = false;
    btAsync2.disabled = false;
    btSync3.disabled = false;
    btAsync3.disabled = false;
    
})



