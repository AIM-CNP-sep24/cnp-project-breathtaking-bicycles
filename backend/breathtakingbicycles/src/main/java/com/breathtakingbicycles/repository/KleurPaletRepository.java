package com.breathtakingbicycles.repository;

import com.breathtakingbicycles.domein.KleurPalet;
import com.breathtakingbicycles.repository.KleurPaletRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KleurPaletRepository {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<KleurPalet> getKleurpaletten(){
        try {
            return jdbcTemplate.query("SELECT * FROM kleurenpalet", new KleurPaletRowMapper());
        } catch (EmptyResultDataAccessException erdae) {
            throw erdae;
        }
    }
}
