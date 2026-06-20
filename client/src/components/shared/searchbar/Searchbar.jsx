import { useState } from "react"
import { useTranslation } from "react-i18next"
import "./searchbar.scss"

const Searchbar = () => {
  const { t } = useTranslation()
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  })

  const switchType = (type) => {
    setQuery((prev) => ({ ...prev, type }))
  }

  const typeButtons = [
    { name: "buy", labelKey: "searchbar.buy" },
    { name: "rent", labelKey: "searchbar.rent" },
  ]

  return (
    <div className="searchbar">
      <div className="type">
        {typeButtons.map((btn) => (
          <button
            key={btn.name}
            className={btn.name === query.type ? "active" : ""}
            onClick={() => switchType(btn.name)}
          >
            {t(btn.labelKey)}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder={t("searchbar.location")} />
        <input type="number" name="minPrice" min={0} max={100000000000} placeholder={t("searchbar.minPrice")} />
        <input type="number" name="maxPrice" max={100000000000} placeholder={t("searchbar.maxPrice")} />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  )
}

export default Searchbar
