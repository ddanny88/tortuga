import axios from 'axios';

const initialState = {
    //customer login/registration
        username:'',
        password:'',
        firstName:'', 
        lastName:'',
        email: '',
        phone: '',
        address: '',
        city: '',
        st: '',
        zipcode: 0,
    //new product
        productName: '',
        price: 0,
        category: '',
        img_url: '',
    //modal
        openModal: false, 
        displayLoginContent: false,
    // products
        products: [],
    //cart
        cart: [],

    //chart Component: 
        chartData: {
            labels: ['Dallas', 'El Paso', 'Austin', 'Houston'],
            datasets: [
                {
                    label: 'Size',
                    data: [
                        100,
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
const HANDLE_CONTENT = "HANDLE_CONTENT";
const UPDATE_CART = "UPDATE_CART";
const UPDATE_CHART = "UPDATE_CHART";





// ACTION FUNCTIONS: 
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
export function toggleModal(toggle) {
    return {
        type: HANDLE_MODAL,
        payload: toggle
    }
}

export function toggleContent(content) {
    return {
        type: HANDLE_CONTENT,
        payload: content
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
        case HANDLE_MODAL: 
            return {
                ...state,
                openModal: action.payload
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
        default:
            return state;
    }
}

export default reducer;