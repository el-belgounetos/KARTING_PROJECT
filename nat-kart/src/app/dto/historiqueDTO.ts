import { CupsDTO } from './cupsDTO';
import { KarterDTO } from './karterDTO';
import { ConsoleDTO } from './consoleDTO';

export interface HistoriqueDTO {
  id?: number;
  player: KarterDTO;
  cups: CupsDTO;
  console: ConsoleDTO;
  points: number;
  victory: boolean;
}
