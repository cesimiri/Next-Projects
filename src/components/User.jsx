"use client";
import { useRouter } from "next/navigation";

function User ({users}){

  const router = useRouter()

    return(
        <ul>
        {
          users.map((user) =>(
            <li key={user.id}
              onClick={()=>{
                router.push(`/user/${user.id}`)
              }}
            >
              <div>
                <h5>{user.id}</h5>
                <p>{user.first_name} {user.last_name}</p>
                <p>{user.email}</p>
                <img className=" w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={user.avatar}/>

              </div>
            </li>
          ))
        }
      </ul>
    )
}

export default User