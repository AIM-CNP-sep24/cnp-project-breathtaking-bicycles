package com.breathtakingbicycles.repository;

import com.breathtakingbicycles.domein.Taal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TaalRepository {
    private final JdbcTemplate jdbcTemplate;

    public TaalRepository(@Autowired JdbcTemplate jdbcTemplate){this.jdbcTemplate = jdbcTemplate; }

    public List<Taal> getTalen(){
        return jdbcTemplate.query("SELECT * FROM Taal", new TaalRowMapper());
    }
}
