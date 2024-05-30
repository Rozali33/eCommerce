import { useState } from 'react';
import Modal from 'react-modal';


type Props = {
  title: string;
  price: number;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};

Modal.setAppElement('#root')

export const ItemCard = ({
  title,
  price,
  description,
  imageSrc,
  category,
  rating,
  imageAlt = 'item image',
}: Props) => {

  const [modaIslOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  
  const closeModal = () => {
    setModalIsOpen(!modaIslOpen);
  };

  console.log(modaIslOpen)

  const modalContent = () => (
    <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>${price}</p>
        <p>Category: {category}</p>
        <p>Rating: {rating.rate} ({rating.count})</p>
        <button onClick= {() => setModalIsOpen(false)}>Close</button>
    </div>
  );

  return (
    <>
    <div className="group relative" onClick={openModal}>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <span aria-hidden="true" className="absolute inset-0" />
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price}</p>
      </div>

      
    </div>

    <Modal
    isOpen={modaIslOpen}
    onRequestClose={closeModal}
    contentLabel="Example Modal"
    className="modal"
    overlayClassName="overlay"
    >
    {modalContent()}
    </Modal>
    </>
  );
};