import './list.scss'
import Card from "../../../../components/shared/card/Card"
import { dummyData } from '../../../../libs/dummyData'

const List = () => {
  return (
    <div className='list'>
      {dummyData.map(item => <Card key={item.id} item={item} />)}
    </div>
  )
}

export default List
