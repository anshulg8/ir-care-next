import { useModal } from '../context/ModalContext';

const CustomLink = ({ procedure, children }) => {
    const { openModal } = useModal();

    return (
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                openModal(procedure);
            }}
            className="text-teal-600 hover:text-teal-800"
        >
            {children}
        </a>
    );
};

export default CustomLink;
