const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));



wait(1000).then(
    () => console.log('1 second passed')
)