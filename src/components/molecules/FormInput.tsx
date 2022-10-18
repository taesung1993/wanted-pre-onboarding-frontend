import { ChangeEvent } from "react";

interface Props {
  id: string;
  type: string;
  title: string;
  error?: string;
  onChange: (e: ChangeEvent, id: string) => void;
}

export default function FormInput({ id, type, title, error, onChange }: Props) {
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <input type={type} id={id} onChange={(e) => onChange(e, id)} />
      {error && <p>{error}</p>}
    </div>
  );
}
