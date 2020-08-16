export const apiCall = {
    getUserInfo : function() {
        let url = `http://ec2-52-55-120-15.compute-1.amazonaws.com/get-userinfo`;
        return fetch(url,{
            method :'GET',
            headers: {
                  'Content-Type': 'application/json',
            }
        })
    },

    getUseActivityInfo : function(id) {
        let url = `http://ec2-52-55-120-15.compute-1.amazonaws.com/get-user-activity`;
        return fetch(url,{
            method :'GET',
            headers: {
                  'Content-Type': 'application/json',
                  'id':id
            }
        })
    },

} 


