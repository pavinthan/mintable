import classNames from 'classnames';
import { useDrag } from 'react-dnd';

export interface Props {
  id: string;
  name: string;
  image: string;
  type?: string;
  className?: string;
}

function TicketCard({ name, type = 'BOX', id, image, className }: Props) {
  const [collected, drag, dragPreview]: any[] = useDrag(() => ({
    type,
    item: { id },
  }));

  return collected.isDragging ? (
    <div ref={dragPreview} />
  ) : (
    <div ref={drag} {...collected}>
      <div className={classNames('flex justify-center', className)}>
        <img src={image} alt={name} className="object-contain" />
      </div>
    </div>
  );
}

export default TicketCard;
