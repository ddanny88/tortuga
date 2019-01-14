import axios from 'axios';

const initialState = {
    // customer login/registration
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
    openModal: false, 

    // products
    products: []
}


// ACTION TYPES: 

const GET_PRODUCTS = "GET_PRODUCTS";

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



// ACTION FUNCTIONS: 
export function getProducts(){
    return {
        type: GET_PRODUCTS,
        payload: axios.get('/api/products')
    }
}

// axios end points: 
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



// REDUCER FUNCTION: 
function reducer (state = initialState, action) {
    switch (action.type) {
        case `${GET_PRODUCTS}_FULFILLED`: 
            return {
                ...state,
                products: action.payload //.data?
            }
        case `${GET_PRODUCTS}_REJECTED`:
            return console.log(`*ERROR: PRODUCTS REJECTED...*`)
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
        default:
            return state;
    }
}

export default reducer;