package com.breathtakingbicycles.repository;

import com.breathtakingbicycles.domein.BenodigdheidTitel;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;


public class BenodigdheidTitelRowMapper implements RowMapper<BenodigdheidTitel> {
    public BenodigdheidTitel mapRow(ResultSet rs, int rowNum) throws SQLException {
        BenodigdheidTitel data = new BenodigdheidTitel();
        data.id = rs.getInt("id");
        data.taal1 = rs.getString("naamTaal1");
        data.taal2 = rs.getString("naamTaal2");
        return data;
    }
}
