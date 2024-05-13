/* import { useEffect, useState } from "react";

export const Slider = () => {
  const [index, setIndex] = useState(0);
  const images = [
    {
      id: 1,
      title: "Image 1",
      description: "Description de l'image 1",
      cover: "/path/to/image1.jpg",
      date: "2023-01-01"
    },
    {
      id: 2,
      title: "Image 2",
      description: "Description de l'image 2",
      cover: "/path/to/image2.jpg",
      date: "2023-02-01"
    },
    {
      id: 3,
      title: "Image 3",
      description: "Description de l'image 3",
      cover: "/path/to/image3.jpg",
      date: "2023-03-01"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prevIndex => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]); // Dépendance sur images.length car les images sont statiques

  return (
    <div className="SlideCardList">
      {images.map((image, idx) => (
        <div
          key={image.id}
          className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}`}
        >
          <img src={image.cover} alt={image.title} />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {images.map((image, idx) => (
            <input
              key={`button-${image.id}`}
              type="radio"
              name="radio-button"
              aria-label={`Slide ${idx + 1}`} // Amélioration pour l'accessibilité
              checked={index === idx}
              onChange={() => setIndex(idx)}
              readOnly
            />
          ))}
        </div>
      </div>
    </div>
  );
}; */