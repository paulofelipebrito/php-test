interface Props {
  subtitle: string;
  className?: string;
}

const SubtitleText = ({ subtitle, className }: Props) => {
  return (
    <div
      className={`text-darkerPrimary font-semibold text-[15px] py-2 ${className}`}
    >
      {' '}
      {subtitle}
    </div>
  );
};

export default SubtitleText;
