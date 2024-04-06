/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Client, ClientDto, ClientFormGroup } from '../../types/Clients';
import { useForm } from 'react-hook-form';
import ClientService from '../../services/ClientService';
import { toast } from 'react-toastify';
import { useInfiniteQuery } from '@tanstack/react-query';

const useClients = () => {
  const [filteredData, setFilteredData] = useState<ClientDto>({
    cpf: '',
    name: '',
    birthday: null,
    gender: '',
    address: '',
    state: '',
    city: ''
  });
    
  const methods = useForm<ClientFormGroup>();
  const { register, watch } = methods;

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [rowToBeDeleted, setRowToBeDeleted] = useState({} as Client);
  const [clientsRefetch, setClientsRefetch] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [clientEditing, setClientEditing] = useState<Client>({} as Client)

  const fetchClient = async ({
    pageParam = 1
  }): Promise<any> => {
    try {
      setClientsRefetch(false);
      const response = await ClientService.getFilteredClients({
        size: 20,
        page: pageParam,
        cpf: filteredData.cpf,
        name: filteredData.name,
        gender: filteredData.gender,
        birthday: filteredData.birthday, 
        address: filteredData.address,
        state: filteredData.state,
        city: filteredData.city
      });
      
      return response;
    } catch (e) {
      toast.error('Erro ao carregar os dados', {
        theme: 'colored',
        toastId: 'error',
      });
      throw e;
    }
  };
  
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery(['client', filteredData, clientsRefetch], fetchClient, {
    retry: false,
    getNextPageParam: (actualPage) => {
      return actualPage.nextPage;
    },

  });

  const clients: Client[] = data ? data?.pages.flatMap((page) => page?.clients?.data) : [];
  const totalClients: number = data ? data?.pages.flatMap((page) => page?.clients)[0]?.total : 0;

  const handleApplyFilter = (isReseting: boolean, appliedFilters: ClientDto) => {
    if (isReseting) {
      setFilteredData(() => ({
        cpf: '',
        name: '',
        birthday: null,
        gender: '',
        address: '',
        state: '',
        city: ''
      }));
    } else {
      setFilteredData(() => ({
        ...appliedFilters,
      }));
    }
  };

  const handleInputChange = (name: string) => {
    setFilteredData((prev)=> (
      {...prev, name: name}
    ))
  };

  const handleCloseModal = () => {
    setClientEditing({} as Client);
    setIsRegisterModalOpen(false);
  };

  useEffect(() => {
    const subscription = watch((value, { name, type }) => (name === "name" && type === "change" && typeof value?.name == "string" && handleInputChange(value?.name)))
    return () => subscription.unsubscribe()
  }, [watch])

  const handleDeleteClient = async (clientId: number) => {
    try{
      await ClientService.deleteClient(clientId);
      setClientsRefetch(true);
    } catch (e) {
      toast.error('Erro ao carregar os dados', {
        theme: 'colored',
        toastId: 'error',
      });
      throw e;
    } 
  }
  
  const handleEditClick = async (clientId: number) => {
    setClientEditing(clients.find((el:  Client) => el.id === clientId) || {} as Client);
    setIsRegisterModalOpen(true);
  }

  const handleDeleteRow = () => {
    handleCloseDeleteModal();
    if (rowToBeDeleted && handleDeleteClient) handleDeleteClient(rowToBeDeleted.id);
  };
  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setRowToBeDeleted({} as Client);
  };

  const handleOpenDeleteModal = (row: Client) => {
    setRowToBeDeleted(row);
    setIsDeleteModalOpen(true);
  };

  return {
    isLoading,
    clients,
    clientEditing,
    totalClients,
    rowToBeDeleted,
    filteredData,
    methods,
    register,
    isError,
    isRegisterModalOpen,
    isDeleteModalOpen,
    isFetchingNextPage,
    hasNextPage,
    setClientsRefetch,
    fetchNextPage,
    setIsRegisterModalOpen,
    handleApplyFilter,
    handleEditClick,
    handleOpenDeleteModal,
    handleCloseModal,
    handleDeleteRow,
    handleCloseDeleteModal,
  }
}

export default useClients