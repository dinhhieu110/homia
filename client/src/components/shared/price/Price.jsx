import { formatVND } from '../../../../utils/currency'
import "./price.scss"
const Price = ({ price, sm }) => {
  return (
    <p className={sm ? "price sm" : "price"}>
      {formatVND(price)}
    </p>
  )
}

export default Price
