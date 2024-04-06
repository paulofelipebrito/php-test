export interface ClientFormGroup {
  name: string
}

export interface ClientDto {
  cpf: string;
  name: string;
  birthday: Date | null;
  gender: string;
  address: string;
  state: string;
  city: string;
}

export interface Client {
  id: number;
  cpf: string;
  name: string;
  birthday: Date;
  gender: string;
  address: string;
  state: string;
  city: string;
}

export interface ClientColumns {
  id: number;
  cpf: string;
  name: string;
  birthday: Date;
  gender: string;
  address: string;
  state: string;
  city: string;
  onEditClick: (clientId: number) => Promise<void>;
  onDeleteClick: (client: Client) => void;
}