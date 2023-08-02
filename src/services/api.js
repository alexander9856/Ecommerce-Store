const getProducts = async () => {
    try {
        const res = await fetch('https://64ca74d3700d50e3c704eb35.mockapi.io/api/store/watches')
        return res.json()
    }
    catch (err) {
        console.log(err.message)
    }
}