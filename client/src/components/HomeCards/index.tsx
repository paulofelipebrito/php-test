import { Link } from 'react-router-dom';
import { Button } from '../UI/Button';
import useHomeCards from './useHomeCards';

interface HomeCardsProps {
  title: string;
  description: string;
  img: string;
  redirect?: { to: string; title: string }[];
  className?: string;
  disabled?: boolean;
}

const HomeCards: React.FC<HomeCardsProps> = ({
  title,
  description,
  img,
  redirect,
  className,
  disabled = false,
}) => {
  const {
    dropdownRef,
    isOpen,
    handleClickButton,
  } = useHomeCards(redirect)

  return (
    <div
      className={`flex gap-4 bg-white md:px-7 md:py-5 md:pr-5 px-4 py-4 rounded-xl ${
        className ?? ''
      }`}
    >
      <section className="flex flex-1 gap-3 flex-col justify-center">
        <h2 className="md:text-2xl text-[0.800rem] text-primary font-bold">
          {title}
        </h2>

        <p className="text-secondary-light md:text-[0.75rem] text-[0.6rem] font-medium">
          {description}
        </p>

        <div className="relative w-min" ref={dropdownRef}>
          <Button
            variant={'default'}
            className="md:max-w-[200px]  max-w-[80px] md:w-32 mt-2 text-[0.75rem] font-medium rounded-lg h-8"
            onClick={handleClickButton}
            disabled={disabled}
          >
            Acessar
          </Button>

          <div
            className={`
              absolute 
              bg-primary shadow-light
              w-[160px] top-[2.4rem] p-1 
              flex flex-col 
              -translate-x-1/4
              before:content-[''] before:absolute 
              before:left-[70px] before:-top-1 
              before:w-4 before:h-4 
              before:bg-primary before:rotate-45 before:-z-10
              rounded-lg z-50
              transition-all
              ${
                isOpen
                  ? 'opacity-100 translate-y-5 visible'
                  : 'opacity-0 translate-y-0 invisible'
              }
            `}
          >
            {redirect?.map((item) => (
              <Link
                to={item.to}
                key={item.title}
                className="
                  text-[0.75rem] hove whitespace-nowrap 
                  flex justify-center 
                  font-medium w-full py-2 rounded-md 
                  hover:bg-primary-dark text-white transition-all
                "
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <img
        src={img}
        alt={title}
        className="md:w-[210px] w-[100px] h-[200px] aspect-square rounded-xl object-cover"
      />
    </div>
  );
};

export default HomeCards;
