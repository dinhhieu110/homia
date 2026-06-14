import { useState } from "react"
import "./searchbar.scss"


const typeButtons = [
  {
    name: "buy",
    value: "Mua",
  },
  {
    name: "rent",
    value: "Thuê"
  }
]

const Searchbar = () => {
  const [query, setQuery] = useState({
    type: typeButtons[0].name,
    location: "",
    minPrice: 0,
    maxPrice: 0
  })

  const switchType = (type) => {
    setQuery((prev) => ({ ...prev, type }))
  }

  return (
    <div className="searchbar">
      <div className="type">
        {typeButtons.map((btn => <button
          key={btn.name}
          className={btn.name === query.type ? "active" : ""}
          onClick={() => switchType(btn.name)}
        >
          {btn.value}</button>))}
      </div>
      <form>
        <input type="text" name="location" placeholder="Vị Trí" />
        <input type="number" name="minPrice" min={0} max={100000000000} placeholder="Giá Thấp Nhất" />
        <input type="number" name="maxPrice" max={100000000000} placeholder="Giá Cao Nhất" />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  )
}

export default Searchbar
