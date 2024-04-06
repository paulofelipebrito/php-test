import { forwardRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { HiOutlineSearch } from 'react-icons/hi';

interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: React.FC<SearchInputProps> = forwardRef<
  HTMLInputElement,
  SearchInputProps
>(({ ...rest }, ref) => {
  return (
    <div className="relative">
      <input
        {...rest}
        ref={ref}
        className={`w-full h-[38px] min-w-[270px] text-xs pr-2 bg-[#F4F7FE] pl-9 rounded-[10px] outline-ring ${
          rest.className ?? ''
        }`}
      />

      {import.meta.env.DEV ? (
        <BsSearch
          size={16}
          color={'#1B2559'}
          className="absolute top-3 left-3"
        />
      ) : (
        <HiOutlineSearch
          size={16}
          color={'#1B2559'}
          className="absolute top-3 left-3"
        />
      )}
    </div>
  );
});

export default SearchInput;
