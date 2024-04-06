import { Dialog } from '@headlessui/react';
import { cn } from '../../utils/cs';
import { Button } from '../UI/Button';
import Modal from '../UI/Modal';

interface ModalConfirmationProps {
  title: string;
  description?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  confirmAction: () => void | Promise<void>;
  discartAction?: () => void;
  confirmButtonClassName?: string;
}

const ModalConfirmation: React.FC<ModalConfirmationProps> = (
  props: ModalConfirmationProps,
) => {
  const confirmAction = async () => {
    await props.confirmAction();
    props.onClose();
  };

  const discartAction = () => {
    props.discartAction && props.discartAction();
    props.onClose();
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={()=>{}}
      title={props.title}
      className="max-w-lg z-[1000] bg-white shadow-lg"
    >
      {props.description && (
        <Dialog.Description className="w-full flex flex-row justify-center min-h-[10vh] pt-2">
          <div className="font-medium flex flex-col justify-center text-slate-600 max-w-[95%] text-sm mx-auto px-4 text-center">
            {props.description}
          </div>
        </Dialog.Description>
      )}

      <div className="flex w-full gap-2 justify-between h-fit py-6 px-8">
        <Button onClick={discartAction} variant="outline" className="min-w-40 ">
          Cancelar
        </Button>

        <Button
          onClick={confirmAction}
          variant={'default'}
          className={cn('min-w-40 ', props.confirmButtonClassName)}
        >
          Confirmar
        </Button>
      </div>
    </Modal>
  );
};

export default ModalConfirmation;
