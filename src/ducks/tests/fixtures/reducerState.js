const state = {
    //customer login/registration:
        username:'',
        password:'',
        firstName:'', 
        lastName:'',
        email: '',
        isAdmin: false,
        DLFile: 'https://s3.us-east-2.amazonaws.com/users-id/mclovin.jpg',
    //checkout info: 
        orderNumber: 0,
        phone: '',
        address: '',
        city: '',
        st: '',
        zipcode: '',
    //nav username:
        currentUsername: null,
    //new product:
        productName: '',
        price: 0,
        category: '',
        img_url: '',
    //modal:
        openModal: false, 
        displayLoginContent: false,
        displayForm: false,
        register: false,
    // products:
        products: [],
    //cart:
        cart: []
}

module.exports = {
    state
}