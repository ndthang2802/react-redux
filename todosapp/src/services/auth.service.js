class AuthService{
    async Login(data){
        var response = await fetch('http://localhost:5000/login',{
            method : 'POST',
            credentials : 'include',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        return response
    }
    async Register(data){
        var respnose = await fetch('http://localhost:5000/register',{
            method : 'POST',
            credentials : 'include',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        return respnose
    }
}

export default new AuthService()