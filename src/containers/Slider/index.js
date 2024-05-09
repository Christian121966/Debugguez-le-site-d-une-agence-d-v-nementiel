

import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";
import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus ? data.focus.sort((evtA, evtB) => {
    // Convertir les dates en objets Date pour la comparaison
    const dateA = new Date(evtA.date);
    const dateB = new Date(evtB.date);
    // Tri décroissant par date
    return dateB - dateA;
  }) : [];
  /* const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
  ); */


  
  useEffect(() => {
    let timer;
    if (byDateDesc.length > 0) {
      timer = setInterval(() => {
        setIndex((prevIndex) => (prevIndex < byDateDesc.length - 1 ? prevIndex + 1 : 0));
      }, 5000);
      return () => {
        if (timer) clearInterval(timer);
      }
    }
  }, [byDateDesc.length]);

  /* useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex < byDateDesc.length - 1 ? prevIndex + 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, [byDateDesc.length]); */

    return (
      <div className="SlideCardList">
        {byDateDesc?.map((event, idx) => (
          <div
            key={event.id}  // Utilisation de l'ID unique de l'événement pour la clé du div principal
            className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}`}
          >
            <img src={event.cover} alt={event.title} />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
        ))}
        <div className="SlideCard__paginationContainer">
          <div className="SlideCard__pagination">
            {byDateDesc.map((event) => (
              <input
                key={event.id}  // Utilisation de l'ID unique de l'événement pour la clé du bouton radio
                type="radio"
                name="radio-button"
                checked={index === byDateDesc.indexOf(event)}
                onChange={() => setIndex(byDateDesc.indexOf(event))}
                readOnly
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

export default Slider;
