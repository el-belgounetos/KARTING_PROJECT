import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamDTO } from '../dto/teamDTO';
import { PlayerDTO } from '../dto/playerDTO';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = 'http://localhost:8080/api/teams';

  constructor(private http: HttpClient) {}

  getAllTeams(): Observable<TeamDTO[]> {
    return this.http.get<TeamDTO[]>(this.apiUrl);
  }

  getTeamById(id: number): Observable<TeamDTO> {
    return this.http.get<TeamDTO>(`${this.apiUrl}/${id}`);
  }

  createTeam(team: TeamDTO): Observable<TeamDTO> {
    return this.http.post<TeamDTO>(this.apiUrl, team);
  }

  updateTeam(id: number, team: TeamDTO): Observable<TeamDTO> {
    return this.http.put<TeamDTO>(`${this.apiUrl}/${id}`, team);
  }

  deleteTeam(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getPlayersByTeam(id: number): Observable<PlayerDTO[]> {
    return this.http.get<PlayerDTO[]>(`${this.apiUrl}/${id}/players`);
  }
}
