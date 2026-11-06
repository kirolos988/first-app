import { useEffect, useState } from 'react'
import './App.css'
import Card from './card'

type User = {
  id: number
  firstName: string
  lastName: string
}

function App() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const controller = new AbortController()

    async function getUsers() {
      try {
        const response = await fetch('https://dummyjson.com/users', {
          signal: controller.signal,
        })
        if (!response.ok) {
          throw new Error(`Failed to fetch users: ${response.status}`)
        }
        const data: { users: User[] } = await response.json()
        if (!controller.signal.aborted) {
          setUsers(data.users)
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error('Error fetching users:', error)
        }
      }
    }

    void getUsers()
    return () => controller.abort()
  }, [])

  return (
    <>
      <h1>Users</h1>
      {users.map((user) => (
        <Card key={user.id} firstName={user.firstName} lastName={user.lastName} />
      ))}
    </>
  )
}

export default App
