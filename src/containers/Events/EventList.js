/* import React, { useState } from 'react';
import EventCard from '../../components/EventCard';
import Modal from '../Modal';
import ModalEvent from '../ModalEvent';
import { useData } from './contexts/DataContext';

const EventList = () => {
  const { data, error } = useData();
  const [selectedEvent, setSelectedEvent] = useState(null);

  if (error) {
    return <div>Erreur lors du chargement des événements : {error}</div>;
  }

  if (!data?.events || !Array.isArray(data.events)) {
    return <div>Chargement des événements...</div>;
  }

  const handleEventClick = event => setSelectedEvent(event);
  const handleCloseModal = () => setSelectedEvent(null);

  return (
    <div>
      {data.events.map(event => (
        <EventCard
          key={event.id}
          onClick={() => handleEventClick(event)}
          imageSrc={event.cover}
          title={event.title}
          date={new Date(event.date)}
          label={event.type}
        />
      ))}
      {selectedEvent && (
        <Modal onClose={handleCloseModal}>
          <ModalEvent event={selectedEvent} />
        </Modal>
      )}
    </div>
  );
};

export default EventList; */