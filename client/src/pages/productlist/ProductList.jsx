import "./productlist.scss"
import Filter from "../../components/shared/filter/Filter"
import Card from "../../components/shared/card/Card"
import { dummyData } from "./dummyData"


const ProductList = () => {
  const list = dummyData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {list.map(item => <Card key={item.id} item={item} />)}
        </div>
      </div>
      <div className="mapContainer">map</div>
    </div>
  )
}

export default ProductList
