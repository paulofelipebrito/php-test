import { Dialog } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  return props.isOpen ? (
    <Dialog open={true} onClose={props.onClose} className="relative z-[1000]">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel
          className={twMerge(
            `w-full max-w-xl rounded-lg bg-white`,
            props.className ?? '',
          )}
        >
          {props.title && (
            <Dialog.Title className="w-full flex flex-row px-8 pt-6">
              <p className="font-semibold text-xl text-slate-800 text-center">
                {props.title}
              </p>
            </Dialog.Title>
          )}

          {props.children}
        </Dialog.Panel>
      </div>
    </Dialog>
  ) : null;
};

export default Modal;
