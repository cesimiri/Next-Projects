import User from "@/components/User";

async function fetchUseres() {
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json();
  return data.data
}

export default async function IndexPage() {
  const users = await fetchUseres();
  return (
    <div>
      <User users={users}/>
      
    </div>
  )
}