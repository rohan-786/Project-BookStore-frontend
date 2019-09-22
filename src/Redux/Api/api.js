import {URL} from '../../../config';

export const apiCall = {
    /**
     * 
     * @param {*} username 
     * @param {*} password 
     * getLoginCall is api call for login 
     */
    getLoginCall : function(username , password) {
        console.log(username," ",password);
        let url = `${URL.API_URL}/auth-checking`;
        return fetch(url,{
            method :'GET',
            headers: {
                  'Content-Type': 'application/json',
                 'emailid': username,
                 'password':password
             }
        })
    },

    /**
     * 
     * @param {*} username 
     * @param {*} password 
     * 
     * Create New User
     */

    registeredNewUser : function(username , password) {
        console.log(username," ",password);
        let url = `${URL.API_URL}/new-user`;
        return fetch(url,{
            method :'POST',
            headers: {
                  'Content-Type': 'application/json',
                 'emailid': username,
                 'password':password
             }
        })
    },


    getSearchResult : function(serachKeyWord) {
        
        let url = `${URL.API_URL}/Book/user/book`;
        return fetch(url ,{
            method : 'GET',
            headers : {
                'Content-Type': 'application/json',
                'book' : serachKeyWord
            }
        })
    }
} 


