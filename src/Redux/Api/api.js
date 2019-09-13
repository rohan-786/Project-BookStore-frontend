export const apiCall = {
    getLoginCall : function(username , password) {
        console.log(username," ",password);
        let url = `http://localhost:3333/auth-checking`;
        return fetch(url,{
            method :'GET',
            headers: {
                  'Content-Type': 'application/json',
                 'emailid': username,
                 'password':password
             }
        })
    },

    registeredNewUser : function(username , password) {
        console.log(username," ",password);
        let url = `http://localhost:3333/new-user`;
        return fetch(url,{
            method :'POST',
            headers: {
                  'Content-Type': 'application/json',
                 'emailid': username,
                 'password':password
             }
        })
    },
} 


