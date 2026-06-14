import './filter.scss'

const Filter = () => {
  return (
    <div className='filter'>
      <h1>Tìm kiếm bất động sản ở <b>Đà Nẵng</b></h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Vị Trí</label>
          <input type="text" id="city" name="city" placeholder='Vị Trí Thành Phố' />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Hình Thức</label>
          <select name="type" id="type">
            <option value="any">Bất Kì</option>
            <option value="buy">Mua </option>
            <option value="rent">Thuê</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Tài Sản</label>
          <select name="property" id="property">
            <option value="any">Bất Kì</option>
            <option value="apartment">Căn Hộ</option>
            <option value="house">Nhà</option>
            <option value="condo">Chung Cư</option>
            <option value="land">Đất Đai</option>

          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Giá trị thấp nhất</label>
          <input type="number" id="minPrice" name="minPrice" placeholder='Bất Kì' />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Giá trị cao nhất</label>
          <input type="number" id="maxPrice" name="maxPrice" placeholder='Bất Kì' />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Số Phòng Ngủ</label>
          <input type="text" id="bedroom" name="bedroom" placeholder='Bất Kì' />
        </div>
        <button><img src="/search.png" alt="" /></button>
      </div>

    </div>
  )
}

export default Filter
