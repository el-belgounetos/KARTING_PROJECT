import { CupsDTO } from './cupsDTO';
import { KarterDTO } from './karterDTO';
import { ConsoleDTO } from './consoleDTO';

export class HistoriqueDTO {
  public player: KarterDTO = new KarterDTO();
  public cups: CupsDTO = new CupsDTO();
  public console: ConsoleDTO = new ConsoleDTO();
  public points: number = 0;
  public victory: boolean = false;
  public id: number = 0;
}
