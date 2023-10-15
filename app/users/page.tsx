import { revalidatePath } from "next/cache";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const response = await fetch
    (`https://jsonplaceholder.typicode.com/users`,
      { cache: 'no-store' })
  const users: User[] = await response.json();
  return (
    < >
      <h1>Users</h1>
     
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(User => <tr key={User.id}>
            <td>{User.name}</td>
            <td>{User.email}</td>
            </tr>)}

        </tbody>
      </table>
    </>

  )
}


export default UsersPage;
