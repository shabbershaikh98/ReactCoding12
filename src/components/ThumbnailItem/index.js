// Write your code here.
import './index.css'

const ThumbnailItem = ({imageDetails, isActive, setActiveImageId}) => {
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickThumbnail = () => {
    setActiveImageId(id)
  }

  const activeThumbnailClassName = isActive ? 'active-thumbnail' : ''

  return (
    <li className="thumbnail-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image ${activeThumbnailClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
