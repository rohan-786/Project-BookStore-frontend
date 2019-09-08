export const apiCall = {
    getLoginCall : function(username , password) {
        return fetch(`${process.env.API_URL}/auth-checking`,{
            method:'GET',
            body:JSON.stringify({
                email_Id : username,
                password : password
            })
        })
    },
} 


