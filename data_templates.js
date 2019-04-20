const Order = {
    id,
    isComplete: False,
    items: [],
    customerEmail
};

const Item = {
    name
};

const Customer = {
    email,
    orders: []
};

module.exports = {
    Order,
    Item,
    Customer
};
