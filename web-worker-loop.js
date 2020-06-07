importScripts("loop.js");
self.onmessage = event => {
    switch (event.data.command) {
        case 'loop': {
            loop();
            self.postMessage({ sucesso: true });
            close(); 
            break;
        }
    }
}