import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  CARD: 'card',
};

const DraggableItem = ({ id, text, index, moveCard }: any) => {
  const [, ref] = useDrag({
    type: ItemTypes.CARD,
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveCard(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} style={{ border: '1px solid black', margin: '4px', padding: '4px' }}>
      {text}
    </div>
  );
};

const SortableList = () => {
  const [cards, setCards] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ]);

  const moveCard = (fromIndex: any, toIndex: any) => {
    const updatedCards = [...cards];
    const [movedCard] = updatedCards.splice(fromIndex, 1);
    updatedCards.splice(toIndex, 0, movedCard);
    setCards(updatedCards);
  };

  return (
    <div>
      {cards.map((card, index) => (
        <DraggableItem key={card.id} index={index} {...card} moveCard={moveCard} />
      ))}
    </div>
  );
};

const SortableInput = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <SortableList />
    </DndProvider>
  );
};

export default SortableInput;
