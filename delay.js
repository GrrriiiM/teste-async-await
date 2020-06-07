function delay(segundos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(segundos);
        }, segundos*1000);
    })
}