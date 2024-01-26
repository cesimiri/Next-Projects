async function fetchUseres() {
  const res = await fetch('https://rickandmortyapi.com/api/character/')
  const data = await res.json();
  return data.results
  // console.log(data.results)
}

export default async function rickAndMorty() {
  const users = await fetchUseres();
  return (
    <div>
      <ul className="grid grid-cols-2">
        {
          users.map((user) => (
            <li key={user.id}>

              <div className="border-2 flex ">

                <div className="">
                  <img className=" border-cyan-300 hover:border-t-4" src={user.image} />
                </div>

                <div className=" bg-slate-500 text-lg  w-full flex items-center text-center justify-center">
                  <div className="text-white">
                  <h5>{user.id}</h5>
                  <p>{user.name} </p>
                  <h1>Status: {user.status}</h1>
                  </div>
                  
                </div>
              </div>
            </li>
          ))
        }
      </ul>

    </div>
  )
}