import { useState } from "react"

function IndexPopup() {
  const [name, setName] = useState("")

  const handleClick = () => {
    console.log(name)
  }

  return (
    <div>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Send</button>
    </div>
  )
}

export default IndexPopup