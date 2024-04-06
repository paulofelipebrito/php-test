import ClientsWrapper from '../../components/ClientWrapper';
import { ClientColumns } from '../../types/Clients';
import EmptyIcon from '../../assets/icons/empty.svg';
import { columns } from '../../constants/tableColumns/ClientsTableColumns';
import InfiniteTable from '../../components/UI/InfiniteTable';
import { FormProvider } from 'react-hook-form';
import SearchInput from '../../components/UI/SearchInput';
import FilterPanel from '../../components/FilterPanel';
import useClients from './useClients';
import { Button } from '../../components/UI/Button';
import RegisterClientModal from '../../components/RegisterClientModal';
import ModalConfirmation from '../../components/ConfirmationModal';

const Clients = () => {
  const {
    isLoading,
    clients,
    clientEditing,
    rowToBeDeleted,
    filteredData,
    methods,
    register,
    isError,
    isRegisterModalOpen,
    isDeleteModalOpen,
    isFetchingNextPage,
    hasNextPage,
    totalClients,
    setClientsRefetch,
    fetchNextPage,
    setIsRegisterModalOpen,
    handleApplyFilter,
    handleEditClick,
    handleOpenDeleteModal,
    handleCloseModal,
    handleDeleteRow,
    handleCloseDeleteModal,
  } = useClients();

  const adjustedData: ClientColumns[] = clients.length > 0 ? clients.map(client => ({
    id: client?.id,
    cpf: client?.cpf,
    name: client?.name,
    birthday: client?.birthday,
    gender: client?.gender,
    address: client?.address,
    state: client?.state,
    city: client?.city,
    onEditClick: handleEditClick, 
    onDeleteClick: handleOpenDeleteModal
  })) : [];

  const RegisterClient = () => {
    return (
      <div className='w-full flex items-center justify-center lg:justify-end m-4 lg:mr-16'>
        <Button
          variant={'secondary'}
          className="mx-5 text-xs rounded-[1rem] font-medium h-7 w-48"
          onClick={() => setIsRegisterModalOpen(true)}
        >
          Cadastrar Cliente
        </Button>
      </div>
    )
  }

  return (
    <>
      <RegisterClient />
      <div className="w-full flex flex-col items-start relative bg-white mt-4" style={{height: "calc(100% - 250px)"}}>    
        <FormProvider {...methods}>
          <form
            className="w-full p-4 pb-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className='w-full'> 
              <SearchInput 
                placeholder='Pesquisar por cliente'
                autoFocus
                {...register("name")}
              />
            </div>
          </form>
        </FormProvider>
        <ClientsWrapper isLoading={isLoading} isError={isError}>
          <FilterPanel
            defaultFilters={filteredData} 
            applyChanges={handleApplyFilter}
          />
          <RegisterClientModal
            clientEditing={clientEditing}
            setClientsRefetch={setClientsRefetch}
            isOpen={isRegisterModalOpen}
            onClose={handleCloseModal}
          />
          <ModalConfirmation
            title={"Excluir cliente"}
            description={`Tem certeza que deseja excluir o cliente ${rowToBeDeleted.name}?`}
            confirmAction={handleDeleteRow}
            isOpen={isDeleteModalOpen}
            onClose={handleCloseDeleteModal}
            discartAction={handleCloseDeleteModal}
          />
          <div className="bg-white p-5 rounded-md overflow-hidden w-full h-full flex flex-col">  
            {clients?.length ? (
              <>
                <div className='flex items-center justify-start gap-2 pl-2 pb-2'>
                  <span className='text-xs text-gray-600 font-semibold whitespace-nowrap'>Total de Clientes:</span>
                  <span className='text-xs text-gray-600 font-semibold whitespace-nowrap'>{totalClients}</span> 
                </div>
                <InfiniteTable
                  hasNextPage={hasNextPage}
                  data={adjustedData}
                  columns={columns.map(column => ({ ...column, onEditClick: handleEditClick, onDeleteClick: handleOpenDeleteModal }))}
                  fetchNextPage={fetchNextPage}
                  isFetchingNextPage={isFetchingNextPage}
                />
              </>
            ) : (
              <div className="w-full flex flex-col justify-center items-center h-full">
                <img src={EmptyIcon} className="w-40" />
                <div className="text-center w-full text-sm">
                  <span className="font-semibold text-blue-800">
                    Nenhum cliente foi encontrado
                  </span>
                </div>
              </div>
            )}
          </div>
        </ClientsWrapper>
      </div>
    </>
  );
};

export default Clients;
