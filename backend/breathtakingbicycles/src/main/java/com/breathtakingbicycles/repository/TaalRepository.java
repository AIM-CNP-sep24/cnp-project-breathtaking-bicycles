package com.breathtakingbicycles.repository;

import com.breathtakingbicycles.domein.Taal;
import com.breathtakingbicycles.domein.VertalingData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Repository
public class TaalRepository {
    private final JdbcTemplate jdbcTemplate;

    public TaalRepository(@Autowired JdbcTemplate jdbcTemplate){this.jdbcTemplate = jdbcTemplate; }

    public List<Taal> getTalen(){
        return jdbcTemplate.query("SELECT * FROM Taal", new TaalRowMapper());
    }

    public String vertaalIngevoerdeNaam(String tekst, String taal){
        if (Objects.equals(tekst, "hallo")){
            return "hello";
        } else {
            return "pizza";
        }
    }
}
