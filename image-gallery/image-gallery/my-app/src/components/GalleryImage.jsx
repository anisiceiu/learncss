const GalleryImage = ({image,onClick})=>
{
    return (
      <div className="gallery-item" onClick={onClick}>
      <img src={image} alt="gallery item"/>
      </div>
    );
}

export default GalleryImage;