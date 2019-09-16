function increment() {
    return {
        type: "INCREASE"
    }
}

function decrement() {
    console.log('Decrement')
    return {
        type: "DECREASE",
    }
}

export { increment, decrement }