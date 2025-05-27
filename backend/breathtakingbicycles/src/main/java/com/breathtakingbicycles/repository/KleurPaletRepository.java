package com.breathtakingbicycles.repository;

import com.breathtakingbicycles.domein.KleurPalet;
import com.breathtakingbicycles.repository.KleurPaletRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KleurPaletRepository {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<KleurPalet> getKleurpaletten(){
        return jdbcTemplate.query("SELECT * FROM kleurenpalet", new KleurPaletRowMapper());
    }
}
