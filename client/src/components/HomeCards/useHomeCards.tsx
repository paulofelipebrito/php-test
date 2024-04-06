import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const useHomeCards = (
  redirect?: { to: string; title: string }[]
) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickButton = () => {
    if (!redirect) return;

    if (redirect.length == 1) {
      return navigate(redirect[0].to);
    }

    setIsOpen((old) => !old);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = ({ target }: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, [dropdownRef]);

  return {
    dropdownRef,
    isOpen,
    handleClickButton,
  }
}

export default useHomeCards