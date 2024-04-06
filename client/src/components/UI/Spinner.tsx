import { CgSpinner } from 'react-icons/cg';

type SpinnerProps = {
  className?: string;
  classNameWrapper?: string;
  color?: string;
  size?: number;
};

const Spinner: React.FC<SpinnerProps> = (props) => {
  return (
    <div
      className={`flex flex-row justify-center w-full ${
        props.classNameWrapper ?? ''
      }`}
    >
      <div className={props.className ?? ''}>
        <CgSpinner
          size={props.size ?? 30}
          color={props.color ?? '#193CB9'}
          className={`animate-spin h-full ${
            props.color ? props.color : 'stroke-dark-gray'
          }`}
        />
      </div>
    </div>
  );
};

export default Spinner;
