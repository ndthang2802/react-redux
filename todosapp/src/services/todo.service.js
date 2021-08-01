class TodoService{
    async Add(data,user){
        var response = await fetch(`http://localhost:5000/660/users/${user.user.id}`,{
            method : 'PATCH',
            credentials : 'include',
            headers : {
                'Content-type' : 'application/json',
                'Authorization': `Bearer ${user.accessToken}` 
            },
            body : JSON.stringify(data)
        })
        return response
    }
    async Completed(data,user){
        var response = await fetch(`http://localhost:5000/660/users/${user.user.id}`,{
            method : 'PATCH',
            credentials : 'include',
            headers : {
                'Content-type' : 'application/json',
                'Authorization': `Bearer ${user.accessToken}` 
            },
            body : JSON.stringify(data)
        })
        return response
    }

    async Edit(data,user){
        var response = await fetch(`http://localhost:5000/660/users/${user.user.id}`,{
            method : 'PATCH',
            credentials : 'include',
            headers : {
                'Content-type' : 'application/json',
                'Authorization': `Bearer ${user.accessToken}` 
            },
            body : JSON.stringify(data)
        })
        return response
    }

    async Load(user){
        var response = await fetch(`http://localhost:5000/660/users/${user.user.id}`,{
            method : 'GET',
            credentials : 'include',
            headers : {
                'Content-type' : 'application/json',
                'Authorization': `Bearer ${user.accessToken}` 
            }
        })
        return response
    }
    async Delete(data,user){
        var response = await fetch(`http://localhost:5000/660/users/${user.user.id}`,{
            method : 'PATCH',
            credentials : 'include',
            headers : {
                'Content-type' : 'application/json',
                'Authorization': `Bearer ${user.accessToken}` 
            },
            body : JSON.stringify(data)
        })
        return response
    }
}

export default new TodoService()