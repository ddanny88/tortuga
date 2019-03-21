import { updateUsername, updateFirstName, updateLastName, updateAddress, updateCity, updateState } from '../reducer';
import reducer from '../reducer';
import { state } from './fixtures/reducerState';



// TESTING THE ACTION FUNCTIONS: 
test("Should have type of 'UPDATE_USERNAME'", () => {
    const test = updateUsername('testing');
    expect(test).toEqual({
        type: 'UPDATE_USERNAME',
        payload: expect.any(String)
    });
});

test("Should have type of 'UPDATE_FIRST_NAME'", () => {
    const test = updateFirstName('Jeremy');
    expect(test).toEqual({
        type: 'UPDATE_FIRST_NAME',
        payload: 'Jeremy'
    })
})

test("Should have type of 'UPDATE_LAST_NAME'", () => {
    const test = updateLastName('Smith');
    expect(test).toEqual({
        type: 'UPDATE_LAST_NAME',
        payload: "Smith"
    })
})

test('Should have type of "UPDATE_ADDRESS"', () => {
    const test = updateAddress('111 Main Ave');
    expect(test).toEqual({
        type: 'UPDATE_ADDRESS',
        payload: '111 Main Ave'
    })
})

test("Should have type of 'UPDATE_CITY'", () => {
    const test = updateCity('Dallas');
    expect(test).toEqual({
        type: 'UPDATE_CITY',
        payload: 'Dallas'
    })
})

test("Should have type of 'UPDATE_ST'", () => {
    const test = updateState('TX');
    expect(test).toEqual({
        type: 'UPDATE_ST',
        payload: 'TX'
    })
})


// TESTING THE REDUCER: 
test("Should set username", () => {
    const username = 'test_username'
    const action = {
        type: 'UPDATE_USERNAME',
        payload: username 
    };
    const test = reducer(state, action);
    expect(test).toEqual({
        ...state, 
        username: action.payload
    });
})

test('Should set first name', () => {
    const firstName = "Bob";
    const action = {
        type: 'UPDATE_FIRST_NAME',
        payload: firstName
    }
    const test = reducer(state, action);
    expect(test).toEqual({
        ...state,
        firstName: action.payload
    })
})

test('Should set address', () => {
    const address = '500 S Ervay';
    const action = {
        type: 'UPDATE_ADDRESS',
        payload: address
    }
    const test = reducer(state, action);
    expect(test).toEqual({
        ...state,
        address: action.payload
    })
})

test("Should update email", () => {
    const email = "name@email.com";
    const action = {
        type: 'UPDATE_EMAIL',
        payload: email
    }
    const test = reducer(state, action);
    expect(test).toEqual({
        ...state, 
        email: action.payload
    })
})