/* import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

export const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
  );
  const nextCard = () => {
    setTimeout(
      () =>
        setIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : prevIndex)),
      5000
    );
  
  };
  useEffect(() => {
    nextCard();
  });
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <>
          <div
            key={event.title}
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                  key={`${event.id}`}
                  type="radio"
                  name="radio-button"
                  checked={idx === radioIdx}
                />
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
}; */

import { useEffect, useState } from "react";

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
      setIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

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
          {images.map((_, radioIdx) => (
            <input
              key={radioIdx}
              type="radio"
              name="radio-button"
              checked={index === radioIdx}
              onChange={() => setIndex(radioIdx)}
              readOnly
            />
          ))}
        </div>
      </div>
    </div>
  );
};
