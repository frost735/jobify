import { useEffect } from "react";

function Dashboard() {
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000')
      const data = await response.json()
      console.log(data)
    } catch (error) {
      
    }
    
  }
  useEffect(() => {
    fetchData()
  }, [])
  return <h1>Dashboard</h1>;
}

export default Dashboard;
