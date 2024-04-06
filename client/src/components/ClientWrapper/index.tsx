import React from 'react';
import ErrorIcon from '../../assets/icons/error.svg';
import Spinner from '../UI/Spinner';

interface ClientsWrapperProps {
  children: React.ReactNode;
  isLoading: boolean;
  isError: boolean;
}

const ClientsWrapper: React.FC<ClientsWrapperProps> = (props) => {
  return (
    <React.Fragment>
      {props.isLoading ? (
        <div className="bg-white my-4 w-full rounded-md flex items-center h-[100%]">
          <Spinner size={50} />
        </div>
      ) : props.isError ? (
        <div className="w-full h-full px-[1%]">
          <div className="bg-white w-full rounded-md flex flex-col items-center justify-center h-[100%]">
            <img src={ErrorIcon} className="w-24" />
            <div className="text-center flex flex-col items-center">
              Não foi possível carregar os dados
              <span className="font-semibold text-blue-800">
                tente novamente mais tarde!
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-start w-full h-[100%]  scrollbar-thin scrollbar-thumb-[#D9D9D9] scrollbar-thumb-rounded-full gap-4">
          {props.children}
        </div>
      )}
    </React.Fragment>
  );
};

export default ClientsWrapper;
