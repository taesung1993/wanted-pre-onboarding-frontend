import { ChangeEvent } from "react";
import Atoms from "../atoms";

interface Props {
  id: string;
  type: string;
  title: string;
  error?: string;
  onChange: (e: ChangeEvent, id: string) => void;
}

export default function FormInput({ id, type, title, error, onChange }: Props) {
  return (
    <Atoms.FormInputWrapper>
      <Atoms.FormLabel htmlFor={id}>{title}</Atoms.FormLabel>
      <Atoms.FormInput
        type={type}
        id={id}
        onChange={(e: ChangeEvent) => onChange(e, id)}
        className={error ? "error" : undefined}
      />
      {error && <p>{error}</p>}
    </Atoms.FormInputWrapper>
  );
}
