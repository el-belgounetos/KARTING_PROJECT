package fr.eb.tournament.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ConsoleDTO {
    private String name;
    private String picture;
    private List<CupsDTO> cups;
    private int count;
}
