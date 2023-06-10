import { Image } from '@/models';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export interface pieceInterface {
  pieceProps: Image;
}

const Piece: React.FC<pieceInterface> = ({ pieceProps }) => {

  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: pieceProps.id})

  const styles: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <img
      style={styles}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={pieceProps.className}
      src={pieceProps.src}
      alt={pieceProps.alt}
      id={pieceProps.id}
    />
  )
}

export default Piece