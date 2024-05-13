import React, { useState } from 'react';
import EventCard from '../../components/EventCard';
import Modal from '../Modal';
import ModalEvent from '../ModalEvent';
import { useData } from '../../contexts/DataContext';
import './style.css';

const EventList = () => {
  const { data, error } = useData();
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Gestion de l'erreur de chargement des données
  if (error) {
    return <div>Erreur lors du chargement des événements : {error}</div>;
  }

  // Affichage d'un message de chargement si les données ne sont pas encore disponibles
  if (!data?.events || !Array.isArray(data.events)) {
    return <div>Chargement des événements...</div>;
  }

  // Fonction pour gérer le clic sur un événement, ouvrant le modal avec les détails
  const handleEventClick = event => {
    setSelectedEvent(event);
  };

  // Fonction pour fermer le modal
  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div>
      {data.events.map(event => (
        <Modal key={event.id} onClose={handleCloseModal} Content={<ModalEvent event={event} />}>
          {({ setIsOpened }) => (
            <EventCard
              onClick={() => {
                handleEventClick(event);
                setIsOpened(true);
              }}
              imageSrc={event.cover}
              title={event.title}
              date={new Date(event.date)}
              label={event.type}
            />
          )}
        </Modal>
      ))}
      {selectedEvent && (
        <Modal onClose={handleCloseModal}>
          <ModalEvent event={selectedEvent} />
        </Modal>
      )}
    </div>
  );
};

export default EventList;