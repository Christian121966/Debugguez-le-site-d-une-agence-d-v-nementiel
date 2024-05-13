import React, { useEffect, useState, useMemo } from 'react';
import { useData } from '../../contexts/DataContext';
import { getMonth } from '../../helpers/Date';
import './style.scss';

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);

  // Images statiques utilisées comme fallback
  const staticImages = useMemo(() => [
    {
      id: 1,
      title: 'World economic forum',
      description: 'Oeuvre à la coopération entre le secteur public et le privé.',
      date: '2022-01-29T20:28:45.744Z',
      cover: '/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png'
    },
    {
      id: 2,
      title: 'Nordic design week',
      description: 'Conférences sur le design de demain dans le digital',
      date: '2022-03-29T20:28:45.744Z',
      cover: '/images/teemu-paananen-bzdhc5b3Bxs-unsplash1.png'
    },
    {
      id: 3,
      title: 'Sneakercraze market',
      description: 'Rencontres de spécialistes des Sneakers Européens.',
      date: '2022-05-29T20:28:45.744Z',
      cover: '/images/jakob-dalbjorn-cuKJre3nyYc-unsplash1.png'
    }
  ], []);

  // Choix des images dynamiques ou statiques et tri par date
  const images = useMemo(() => {
    const imagesToDisplay = data?.focus || staticImages;
    return imagesToDisplay.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [data, staticImages]);

  // Mise à jour automatique de l'index pour le défilement des images
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prevIndex => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  // Affichage conditionnel en cas d'absence d'images
  if (!images.length) {
    return <div className="SlideCardList">Aucune image à afficher.</div>;
  }

  return (
    <div className="SlideCardList">
      {images.map((image, idx) => (
        <div
          key={image.id}
          className={`SlideCard SlideCard--${index === idx ? 'display' : 'hide'}`}
        >
          <img src={image.cover} alt={image.title} />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
              <div>{getMonth(new Date(image.date))}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {images.map((image) => (
            <input
              key={image.id}
              type="radio"
              name="radio-button"
              aria-label={`Slide ${image.id}`}
              checked={index === images.indexOf(image)}
              onChange={() => setIndex(images.indexOf(image))}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;