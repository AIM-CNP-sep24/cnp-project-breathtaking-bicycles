package com.breathtakingbicycles.repository;

import com.breathtakingbicycles.domein.Taal;
import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class TaalRowMapper implements RowMapper<Taal> {
    public Taal mapRow(ResultSet rs, int rowNum) throws SQLException {
        Taal taal = new Taal();
        taal.id = rs.getInt("id");
        taal.naam = rs.getString("naam");
        taal.code = rs.getString("code");
        return taal;
    }

}
