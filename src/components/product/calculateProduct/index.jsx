
function calculateProduct(price, discount) {

    if (price >= discount) {
        const discountPercentage = Math.floor(((price - discount) / price) * 100) ;
        return discountPercentage;    
    }
}

export default calculateProduct
