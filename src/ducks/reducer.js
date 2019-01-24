import axios from 'axios';

const initialState = {
    //customer login/registration:
        username:'',
        password:'',
        firstName:'', 
        lastName:'',
        email: '',
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
        cart: [],

    //chart Component: 
        chartData: {
            labels: ['Dallas', 'El Paso', 'Austin', 'Houston'],
            datasets: [
                {
                    label: 'Size',
                    data: [
                        500,
                        200,
                        300,
                        400
                    ],
                    backgroundColor:[
                        "rgba(255,99,123,0.6)",
                        "rgba(54,162,235,0.6)",
                        "rgba(255,159,64,0.6)",
                        "rgba(75,192,192,0.6)"
                    ]
                }
            ]
        }
}


// ACTION TYPES: 
const GET_PRODUCTS = "GET_PRODUCTS";
const GET_CART = "GET_CART";
const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME";
const UPDATE_LAST_NAME = "UPDATE_LAST_NAME";
const UPDATE_EMAIL = "UPDATE_EMAIL";
const UPDATE_PHONE = "UPDATE_PHONE";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_ST = "UPDATE_ST";
const UPDATE_ZIP = "UPDATE_ZIP";
const HANDLE_MODAL = "HANDLE_MODAL";
const UPDATE_REGISTER = "UPDATE_REGISTER";
const HANDLE_CONTENT = "HANDLE_CONTENT";
const UPDATE_FORM_DISPLAY = "UPDATE_FORM_DISPLAY";
const UPDATE_CART = "UPDATE_CART";
const UPDATE_CHART = "UPDATE_CHART";
const ADD_PRODUCT_NAME = "ADD_PRODUCT_NAME";
const ADD_PRODUCT_PRICE = "ADD_PRODUCT_PRICE";
const ADD_PRODUCT_CATEGORY = "ADD_PRODUCT_CATEGORY";
const ADD_IMG_URL = "ADD_IMG_URL";
const UPDATE_CURRENT_USERNAME = "UPDATE_CURRENT_USERNAME";
const CLEAR_NEW_PRODUCT = "CLEAR_NEW_PRODUCT";
const UPDATE_ORDER_NUMBER = "UPDATE_ORDER_NUMBER";



// ACTION FUNCTIONS: 
export function updateCurrentUsername(currentUsername){
    return {
        type: UPDATE_CURRENT_USERNAME,
        payload: currentUsername
    }
}
export function clearInput(){
    return {
        type: CLEAR_NEW_PRODUCT,
        payload: {
            productName: '',
            price: 0,
            category: '',
            img_url: '',
        }
    }
}
export function updateChart() {
    return {
        type: UPDATE_CHART,
        payload: axios.get('/api/getchartdata')
    }
}
export function getProducts() {
    return {
        type: GET_PRODUCTS,
        payload: axios.get('/api/products')
    }
}
export function getCart() {
    return {
        type: GET_CART,
        payload: axios.get('/api/getcart')
    }
}
export function addToCart(product) {
    return {
        type: UPDATE_CART,
        payload: axios.post('/api/addtocart',  product )
    }
}
export function updateUsername(username) {
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
}
export function updatePassword(password){
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}
export function updateFirstName(firstname){
    return {
        type: UPDATE_FIRST_NAME,
        payload: firstname
    }
}
export function updateLastName(lastname){
    return {
        type: UPDATE_LAST_NAME,
        payload: lastname
    }
}
export function updateAddress(address){
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}
export function updateOrderNumber(orderNum){
    return {
        type: UPDATE_ORDER_NUMBER,
        payload: orderNum
    }
}
export function updateCity(city){
    return {
        type: UPDATE_CITY,
        payload: city
    }
}
export function updateState(st){
    return {
        type: UPDATE_ST,
        payload: st
    }
}
export function updateZip(zip){
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}
export function updateEmail(email){
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}
export function updatePhone(phone){
    return {
        type: UPDATE_PHONE,
        payload: phone
    }
}
// handles the modal: 
export function toggleFormDisplay(toggle) {
    return {
        type: UPDATE_FORM_DISPLAY,
        payload: toggle
    }
}
export function toggleModal(toggle) {
    return {
        type: HANDLE_MODAL,
        payload: toggle
    }
}

export function toggleRegister(toggle) {
    return {
        type: UPDATE_REGISTER,
        payload: toggle
    }
}

export function toggleContent(content) {
    return {
        type: HANDLE_CONTENT,
        payload: content
    }
}

export function addProductName(productName){
    return {
        type: ADD_PRODUCT_NAME,
        payload: productName
    }
}
export function addProductPrice(price){
    return {
        type: ADD_PRODUCT_PRICE,
        payload: price
    }
}
export function addProductCategory(category){
    return {
        type: ADD_PRODUCT_CATEGORY,
        payload: category
    }
}
export function addProductImgUrl(url){
    return {
        type: ADD_IMG_URL,
        payload: url
    }
}


// REDUCER FUNCTION: 
function reducer (state = initialState, action) {
    switch (action.type) {
        case `${GET_PRODUCTS}_FULFILLED`: 
            return {
                ...state,
                products: action.payload.data
            }
        case `${GET_PRODUCTS}_REJECTED`:
            return console.log(`*ERROR: PRODUCTS REJECTED...*`)

        case `${GET_CART}_FULFILLED`:
            console.log('PAYLOAD' ,action.payload)
            return {
                ...state,
                cart: action.payload.data
            }
        case `${GET_CART}_REJECTED`:
            return console.log(`*ERROR: REJECTED...`)

        case `${UPDATE_CART}_FULFILLED`:
            return {
                ...state,
                cart: action.payload.data
            }
        case UPDATE_FIRST_NAME: 
            return {
                ...state,
                firstName: action.payload
            }
        case UPDATE_LAST_NAME: 
            return {
                ...state,
                lastName: action.payload
            }
        case UPDATE_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        case UPDATE_PASSWORD: 
            return {
                ...state,
                password: action.payload
            }
        case UPDATE_EMAIL: 
            return {
                ...state,
                email: action.payload
            }
        case UPDATE_ORDER_NUMBER:
            return {
                ...state,
                orderNum: action.payload
            }
        case UPDATE_ADDRESS:
            return {
                ...state,
                address: action.payload
            }
        case UPDATE_CITY:
            return {
                ...state,
                city: action.payload
            }
        case UPDATE_ST:
            return {
                ...state,
                st: action.payload
            }
        case UPDATE_ZIP:
            return {
                ...state,
                zipcode: action.payload
            }
        case UPDATE_PHONE: 
            return {
                ...state,
                phone: action.payload
            }
        case UPDATE_FORM_DISPLAY:
            return {
                ...state,
                displayForm: action.payload
            }
        case HANDLE_MODAL: 
            return {
                ...state,
                openModal: action.payload,
                displayForm: false,
                register: false
            }
        case UPDATE_REGISTER:
            return {
                ...state,
                register: action.payload
            }
        case HANDLE_CONTENT: 
            return {
                ...state,
                displayLoginContent: action.payload
            }
        case UPDATE_CHART: 
            return {
                ...state,
                chart: action.payload
            }
        case ADD_PRODUCT_NAME: 
            return {
                ...state,
                productName: action.payload
            }
        case ADD_PRODUCT_PRICE: 
            return {
                ...state,
                price: action.payload
            }
        case ADD_PRODUCT_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case ADD_IMG_URL:
            return {
                ...state,
                img_url: action.payload
            }
        case UPDATE_CURRENT_USERNAME: 
            return {
                ...state,
                currentUsername: action.payload
            }
        case CLEAR_NEW_PRODUCT: 
            return {
                ...state, 
                productName: action.payload.productName,
                price: action.payload.price,
                category: action.payload.category,
                img_url: action.payload.img_url
            }
        default:
            return state;
    }
}

export default reducer;