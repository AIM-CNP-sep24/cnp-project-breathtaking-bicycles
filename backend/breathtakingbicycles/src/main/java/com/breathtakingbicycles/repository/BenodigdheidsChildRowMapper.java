package com.breathtakingbicycles.repository;

import com.breathtakingbicycles.domein.BenodigdheidChilds;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class BenodigdheidsChildRowMapper implements RowMapper {
    public BenodigdheidChilds mapRow(ResultSet rs, int rowNum) throws SQLException {
        BenodigdheidChilds data = new BenodigdheidChilds();
        data.id = rs.getInt("id");
        return data;
    }
}
