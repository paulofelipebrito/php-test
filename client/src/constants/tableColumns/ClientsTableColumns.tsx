/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnDef, RowData } from '@tanstack/react-table';
import { getFirstAndLastName } from '../../utils/getFirstAndLastName';
import EditButton from '../../components/UI/EditButton';
import TrashButton from '../../components/UI/TrashButton';
import { ClientColumns } from '../../types/Clients';
import { format } from 'date-fns';
import { applyCpfMask } from '../../utils/cpfMask';

declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    headerClassName?: string;
    rowClassName?: string;
  }
}

export const columns: Array<ColumnDef<ClientColumns>> = [
  {
    id: 'edit',
    header: '',
    meta: {
      headerClassName: 'text-white bg-primary rounded-tl-xl',
      rowClassName: 'pl-4 w-10'
    },
    cell: (props) => {
      const {onEditClick} = props.row.original;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const row = props?.row?.original;
      return (
        <EditButton
          id={`button-edit-${row.name as string}`}
          color="primary"
          onClick={() => onEditClick(row.id)}
        />
      );
    },
  },
  {
    id: 'delete',
    header: '',
    meta: {
      headerClassName: 'text-white bg-primary',
      rowClassName: 'w-10'
    },
    cell: (props) => {
      const {onDeleteClick} = props.row.original;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const row = props?.row?.original;
      return (
        <TrashButton
          id={`button-delete-${row.name as string}`}
          color="primary"
          onClick={() => onDeleteClick({
            id: row.id,
            cpf: row.cpf,
            name: row.name,
            birthday: row.birthday,
            gender: row.gender,
            address: row.address,
            state: row.state,
            city: row.city,
          })}
        />
      );
    },
  },
  {
    accessorKey: 'name',
    header: 'NOME',
    meta: {
      headerClassName: 'text-white bg-primary',
    },
    cell: (props) => {
      return (
        <div className="flex items-center w-full">
          <p className={('p-2 text-xs text-gray-600 font-semibold whitespace-nowrap px-3 w-44')}>
            {getFirstAndLastName(props.getValue() as string)}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: 'cpf',
    header: 'CPF',
    meta: {
      headerClassName: 'text-white bg-primary', 
    },
    cell: (props) => {
      return (
        <p className={('p-2 text-xs text-gray-600 px-3 overflow-hidden whitespace-nowrap text-ellipsis')}>
          {applyCpfMask(props.getValue() as string)}
        </p>
      )
    },
  },
  {
    accessorKey: 'birthday',
    header: 'DATA NASC.',
    meta: {
      headerClassName: 'text-white bg-primary', 
    },
    cell: (props) => {
      const date = new Date(props.getValue() as string);
      date && date.setDate(date.getDate());
      const dateValue = format(date, 'dd/MM/yyyy');
      
      return (
        <p className={('p-2 text-xs text-gray-600 px-3 overflow-hidden whitespace-nowrap text-ellipsis')}>
          {dateValue}
        </p>
      )
    }
  },
  {
    accessorKey: 'gender',
    header: 'SEXO',
    meta: {
      headerClassName: 'text-white bg-primary', 
    },
    cell: (props) => (
      <p className={('p-2 text-xs text-gray-600 px-3 overflow-hidden whitespace-nowrap text-ellipsis')}>
        {props.getValue() as string}
      </p>
    ),
  },
  {
    accessorKey: 'state',
    header: 'ESTADO',
    meta: {
      headerClassName: 'text-white bg-primary', 
    },
    cell: (props) => (
      <p className={('p-2 text-xs text-gray-600 px-3 overflow-hidden whitespace-nowrap text-ellipsis uppercase')}>
        {props.getValue() as string}
      </p>
    ),
  },
  {
    accessorKey: 'city',
    header: 'CIDADE',
    meta: {
      headerClassName: 'text-white bg-primary', 
    },
    cell: (props) => (
      <p className={('p-2 text-xs text-gray-600 px-3 overflow-hidden whitespace-nowrap text-ellipsis')}>
        {props.getValue() as string}
      </p>
    ),
  },
  {
    accessorKey: 'address',
    header: 'ENDEREÇO',
    meta: {
      headerClassName: 'text-white bg-primary rounded-tr-xl', 
    },
    cell: (props) => (
      <p className={('p-2 text-xs text-gray-600 px-3 overflow-hidden whitespace-nowrap text-ellipsis')}>
        {props.getValue() as string}
      </p>
    ),
  },
];
