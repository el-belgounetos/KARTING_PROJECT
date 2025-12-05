import { CupsDTO } from './cupsDTO';
import { RankingDTO } from './rankingDTO';
import { ConsoleDTO } from './consoleDTO';

export interface HistoryDTO {
  id?: number;
  player: RankingDTO;
  cups: CupsDTO;
  console: ConsoleDTO;
  points: number;
  victory: boolean;
}
