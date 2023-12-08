async function  getUser(id){
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json() 
    return data.data
}
async function UserPage({params}){
    const user =await getUser(params.id)
    // console.log(data)
    return(
        <div>
            <h1>
                User Details
            </h1>
            <div>
                <img className="border-2" src={user.avatar}/>
                <h1>{user.id} {user.first_name} {user.last_name}</h1>
                <p4>{user.email}</p4>
            </div>
        </div>
    )
}

export default UserPage