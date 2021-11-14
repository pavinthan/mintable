import classNames from 'classnames';
import { useDrag } from 'react-dnd';

export interface Props {
  id: string;
  name: string;
  image: string;
  type?: string;
  className?: string;
}

function TicketCard({ id, name, type = 'BOX', image, className }: Props) {
  const [collected, drag, dragPreview]: any[] = useDrag(() => ({
    type,
    items: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return collected.isDragging ? (
    <div ref={dragPreview}>
      <div
        className={classNames(
          'flex justify-center filter grayscale contrast-100 opacity-50',
          className
        )}
      >
        <img src={image} alt={name} className="object-contain" />
      </div>
    </div>
  ) : (
    <div ref={drag} {...collected}>
      <div
        className={classNames('flex justify-center cursor-pointer', className)}
      >
        <img src={image} alt={name} className="object-contain" />
      </div>
    </div>
  );
}

export default TicketCard;
