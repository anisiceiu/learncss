import { useState } from 'react';
import GalleryImage from './GalleryImage';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';


export default function Gallery({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightBox = (index) => {
        setCurrentIndex(index);
    }

    const closeLightbox = () => {
        setCurrentIndex(null);
    };

    const goToPrevious = () => {
       console.log('Current index before:', currentIndex);
  setCurrentIndex((prevIndex) => 
    prevIndex === 0 ? images.length - 1 : prevIndex - 1
  );
  console.log('Current index after:', currentIndex);
    }

    const goToNext = () => {
        console.log('Current index before:', currentIndex);
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1

        );
        console.log('Current index after:', currentIndex);
    }


    return (
        <div className="gallery">
            <div className="gallery-grid">
                {images.map((image, index) => {
                    <GalleryImage
                        key={index}
                        image={image}
                        index={index}
                        onClick={() => openLightBox(index)}
                    />

                })
                }
            </div>
            {currentIndex != null && (

                <div className="lightbox">
                    <button className="lightbox-close" onClick={closeLightbox}>
                        <FiX />
                    </button>
                    <button className="lightbox-nav left" onClick={goToPrevious}>
                        <FiChevronLeft />
                    </button>
                    <img src={images[currentIndex]} alt={`Gallery item ${currentIndex}`}  />
                    <button className="lightbox-nav right" onClick={goToNext}>
                        <FiChevronRight />
                    </button>
                </div>
            )

            }
        </div>
    );
}