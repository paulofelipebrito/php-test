import { Modal } from '@mui/material';
import ClientFormFields from '../ClientFormFields';
import { Client } from '../../types/Clients';
import SubtitleText from '../UI/SubtitleText';
import CloseButton from '../UI/CloseButton';
import Line from '../UI/Line';

interface RegisterClientModalProps {
  clientEditing: Client;
  setClientsRefetch: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean;
  onClose: () => void;
}

const RegisterClientModal: React.FC<RegisterClientModalProps> = ({
  setClientsRefetch,
  clientEditing,
  isOpen,
  onClose,
}) => {
  const isEditing =  Object.keys(clientEditing).length > 0;

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <div className="fixed bg-black/30 inset-0 flex w-screen items-center justify-center p-4">
          <div className="bg-white rounded-lg max-h-[85vh] w-[50rem] overflow-auto flex-col justify-between">
            <div className="h-auto flex justify-between items-center px-4 pt-3 pb-1">
              <SubtitleText
                className="text-[20px]"
                subtitle={`${isEditing ? "Edição" : "Cadastro"} de Cliente`}
              />
              <CloseButton onClick={onClose} className="mt-[-1rem]" />
            </div>
            <Line />
              <ClientFormFields
                setClientsRefetch={setClientsRefetch}
                clientEditing={clientEditing}
                onClose={onClose}
              />
              
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RegisterClientModal;
