import { CupsDTO } from './cupsDTO';

export interface ConsoleDTO {
  name: string;
  picture: string;
  cups?: CupsDTO[];
}
