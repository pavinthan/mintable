import { useDrag } from 'react-dnd';

export interface Props {
  id: string;
  name: string;
  type?: string;
}

function TicketCard({ name, type = 'BOX', id }: Props) {
  const [collected, drag, dragPreview]: any[] = useDrag(() => ({
    type,
    item: { id },
  }));

  return collected.isDragging ? (
    <div ref={dragPreview} />
  ) : (
    <div ref={drag} {...collected}>
      {name}
    </div>
  );
}

export default TicketCard;
