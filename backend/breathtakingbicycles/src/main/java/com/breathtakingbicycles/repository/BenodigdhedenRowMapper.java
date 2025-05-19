package com.breathtakingbicycles.repository;

import com.breathtakingbicycles.domein.Benodigdheid;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class BenodigdhedenRowMapper implements RowMapper<Benodigdheid> {
    public Benodigdheid mapRow(ResultSet rs, int rowNum) throws SQLException {
        Benodigdheid data = new Benodigdheid();
        data.id = rs.getInt("id");
        data.naamTaal1 = rs.getString("naamTaal1");
        data.naamTaal2 = rs.getString("naamTaal2");
        data.parentId = rs.getInt("parent_id");
        data.laag = rs.getInt("laag");
        data.rangnr = rs.getInt("rangnr");
        data.imgsrc = rs.getString("imgsrc");
        return data;
    }

}
