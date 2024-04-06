import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender,
} from '@tanstack/react-table';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Spinner from './Spinner';

interface TableProps<T> {
  columns: Array<ColumnDef<T>>;
  data: Array<T>;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
  hasNextPage: boolean | undefined;
}

const InfiniteTable = <T,>({
  columns,
  data,
  fetchNextPage,
  isFetchingNextPage,
  hasNextPage,
}: TableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    initialState: {
      columnVisibility: { id: false },
    },
  });
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
  return (
    <div className="flex flex-col w-full sticky top-0 overflow-auto scrollbar-thin scrollbar-thumb-[#D9D9D9] scrollbar-thumb-rounded-full pb-5 ">
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="sticky top-0 z-50 bg-white text-[#1a9ed8] h-12 font-graphie"
            >
              {headerGroup.headers.map((header) => {
                const headerClassName =
                  header.column.columnDef.meta?.headerClassName ||
                  'text-[#1a9ed8]';
                return (
                  <td
                    key={header.id}
                    className={`px-2 font-bold text-sm ${headerClassName}`}
                  >
                    {typeof header.column.columnDef.header === 'function'
                      ? header.column.columnDef.header({
                          column: header.column,
                          header: header,
                          table: table,
                        })
                      : header.column.columnDef.header}
                  </td>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className={`odd:bg-[#F1F3FA] h-12`}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={`"px-4 py-1 bg-white ${cell.column.columnDef.meta?.rowClassName || ''}`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {hasNextPage && (
        <div className="flex justify-center" ref={ref}>
          {isFetchingNextPage && <Spinner size={30} />}
        </div>
      )}
    </div>
  );
};

export default InfiniteTable;
