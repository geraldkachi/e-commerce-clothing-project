import ShopData from "../../pagesapp/shoppage/ShopData"
import ShopActionTypes from "./ShopType";

const initState = {
    collections: ShopData,
    isFetching: false,
    errorMessage: undefined
}
// const initState = {
//     collections: null,
//     isFetching: false
// }

const ShopReducer = (state = initState, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTION_START: 
        return {
            ...state,
            isFetching:false
        }
        case ShopActionTypes.FETCH_COLLECTION_SUCCESS: 
        return {
            ...state,
            isFetching:false,
            collections: action.payload
        }
        case ShopActionTypes.FETCH_COLLECTION_FAILURE: 
        return {
            ...state,
            isFetching:false,
            errorMessage: action.payload,

        }
        // case ShopActionTypes.UPDATE_COLLECTIONS: 
        // return {
        //     ...state,
        //     collections: action.payload
        // }
        default:
            return state;
    }
}

export default ShopReducer


// //  function declartion 
// function greet(){
//     console.log('Hello there');
// }
// // this is calling a function on each time is runs
// greet()
// greet()
// greet()  

// // function expression
// const speak = function () {
//     console.log(" God day for expression");
// }
// speak()

// const speak = function (name='kachi', lastname= 'austine' ) {
//     console.log(`my name is ${name} gerald and what's name ${lastname}`);
// }
// speak()
// speak(kachi', 'austine')

// const calcArea = function(radius){
    // let area = 3.14 * radius**2 
    // return area
    // return 3.14 * radius**3  
// }

// const area = calcArea(5)
// console.log(area);


// Math object

// console.log(Math)
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7
// // rounds to he nearest decimal 7.7 = 8.0
// console.log(Math.round(area));  
// // it floors it to the 7.7 = 7.0
// console.log(Math.floor(area));  
// // this is the opposite of floor.. eg 7.1 = 8.0
// console.log(Math.ceil(area));  
// // all it does is take away the decimal and leave the integar
// console.log(Math.trunc(area));  


// reduce()

// const scores = [10, 20,60, 40,70, 90,30]

// const result = scores.reduce(( acc, curr) => {
//     if (curr > 50 ) {
//         acc++;
//     }
//     return acc;
// }, 0)
// console.log(result);





// // Spread & Rest
// // rest Parameter 
// const double = (...nums) => {
//     // do something 
//     console.log(nums);
//     return nums.map(num => num *2)
// }
// const result = double(1,2,3,4,5,6,7,8,9,)
// console.log(result);

// //  spread syntax (arrays)
// const people = ['shaun', 'ryu', 'crystal']
// // console.log(...people);
// const members = ['mario', 'chun-li', ...people]
// console.log(members);

// // spread syntax (objects)

// const person = {name: 'shaun',age: 30, job: 'software'}
// const company = {...person, loctaion: 'lagos'}
// console.log(company);