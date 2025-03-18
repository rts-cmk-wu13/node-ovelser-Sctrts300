 const basket = (function () {
    let items =[];

    return{
        items,

        addItem: function (item) {
            items.push(item);
        },
        removeItem: function(itemnametoremove) {
            let itemIndex = items.findIndex(function(item){return item.name == itemnametoremove})
            console.log(itemIndex)
            items.splice (itemIndex, 1)
        },
        totalItems: function () {
            return items.length
        },
        totalPrice: function () {
            // let totalPrice = 0
            // items.forEach(function(item) {totalPrice = totalPrice + item.price})
            // return totalPrice
            let totalPr = items.reduce((prev, current) => prev + current.price, 0)
            return totalPr
        }
    }

}) ()

module.exports = basket;







