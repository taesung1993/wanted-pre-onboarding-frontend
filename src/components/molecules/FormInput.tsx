import { useRef } from "react";
import { useEffect } from "react";
import { ChangeEvent } from "react";
import Atoms from "../atoms";

interface Props {
  id: string;
  type: string;
  title?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  style?: {
    border?: string;
    width?: string;
    height?: string;
  };
  initialFocus?: boolean;
  onChange: (e: ChangeEvent, id: string) => void;
}

export default function FormInput({
  id,
  type,
  title,
  value,
  placeholder,
  error,
  style,
  onChange,
  initialFocus,
}: Props) {
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (initialFocus && ref && ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <Atoms.FormInputWrapper>
      {title && <Atoms.FormLabel htmlFor={id}>{title}</Atoms.FormLabel>}
      <Atoms.FormInput
        type={type}
        id={id}
        placeholder={placeholder || ""}
        onChange={(e: ChangeEvent) => onChange(e, id)}
        className={error ? "error" : undefined}
        {...style}
        ref={ref}
      />
      {error && <p>{error}</p>}
    </Atoms.FormInputWrapper>
  );
}
