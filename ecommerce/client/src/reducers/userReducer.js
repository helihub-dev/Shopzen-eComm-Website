export function userReducer(state = null, action) {  // from firebase get user
    switch(action.type) {
        case "LOGGED_IN_USER": 
            return action.payload;   //type, payload
        case "LOGOUT":
            return action.payload;
        default:
            return state;        
    }
}