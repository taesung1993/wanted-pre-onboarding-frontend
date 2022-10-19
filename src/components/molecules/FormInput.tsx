import { ChangeEvent } from "react";
import Atoms from "../atoms";

interface Props {
  id: string;
  type: string;
  title?: string;
  placeholder?: string;
  error?: string;
  onChange: (e: ChangeEvent, id: string) => void;
}

export default function FormInput({
  id,
  type,
  title,
  placeholder,
  error,
  onChange,
}: Props) {
  return (
    <Atoms.FormInputWrapper>
      {title && <Atoms.FormLabel htmlFor={id}>{title}</Atoms.FormLabel>}
      <Atoms.FormInput
        type={type}
        id={id}
        placeholder={placeholder || ""}
        onChange={(e: ChangeEvent) => onChange(e, id)}
        className={error ? "error" : undefined}
      />
      {error && <p>{error}</p>}
    </Atoms.FormInputWrapper>
  );
}
