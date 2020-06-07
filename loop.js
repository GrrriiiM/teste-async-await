
function loop() {
    for(let i=0; i<Math.pow(10,9); i++) {

    }
}


function loopAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                loop();
                resolve("aaa");   
            } catch (error) {
                reject();
            }
             
        }, 1);
    });
}


function loopWebWorkerAsync() {
    return new Promise((resolve, reject) => {
        var worker = new Worker('./web-worker-loop.js');

        worker.onmessage = function(event) {
            if (event.data.sucesso){
                resolve();
            } else {
                reject();
            }
        };

        worker.onerror = function(e) {
            reject(e);
        };

        worker.postMessage({ command: 'loop' });
    });
}   