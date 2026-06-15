import { useState } from 'react'
import './slider.scss'

const Slider = ({ images }) => {
  const [firstImage, ...restImages] = images || {}
  const [imageIdx, setImageIdx] = useState(null);

  return (
    <div className='slider'>
      {imageIdx !== null && <div className="fullSlider">
        <div className="arrow">
          <img src="/arrow.png" alt="" onClick={() => setImageIdx((prev) => imageIdx !== 0 ? prev - 1 : images.length - 1)} />
        </div>
        <div className="imgContainer">
          <img src={images[imageIdx]} alt="" />
        </div>
        <div className="arrow">
          <img src="/arrow.png" className="right" alt="" onClick={() => setImageIdx((prev) => imageIdx === images.length - 1 ? 0 : prev + 1)} />
        </div>
        <div className="close" onClick={() => setImageIdx(null)}>
          X
        </div>
      </div>}
      <div className="bigImage">
        <img src={firstImage} alt="" onClick={() => setImageIdx(0)} />
      </div>
      <div className="smallImages">
        {(restImages || []).map((img, idx) => <img src={img} alt="" key={idx} onClick={() => setImageIdx(idx + 1)} />)}
      </div>
    </div>
  )
}

export default Slider
