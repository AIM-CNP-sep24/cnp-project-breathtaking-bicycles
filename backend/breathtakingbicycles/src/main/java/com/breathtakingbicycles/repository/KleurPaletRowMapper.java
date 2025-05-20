package com.breathtakingbicycles.repository;

import com.breathtakingbicycles.domein.KleurPalet;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class KleurPaletRowMapper implements RowMapper<KleurPalet> {
    @Override
    public KleurPalet mapRow(ResultSet rs, int rowNum) throws SQLException {
        KleurPalet kleurPalet = new KleurPalet();
        kleurPalet.id = rs.getInt("id");
        kleurPalet.color_one = rs.getString("color_one");
        kleurPalet.color_one_shadow = rs.getString("color_one_shadow");
        kleurPalet.color_two = rs.getString("color_two");
        kleurPalet.color_two_shadow = rs.getString("color_two_shadow");
        kleurPalet.color_three = rs.getString("color_three");
        kleurPalet.color_three_shadow = rs.getString("color_three_shadow");
        kleurPalet.color_four = rs.getString("color_four");
        kleurPalet.color_four_shadow = rs.getString("color_four_shadow");
        return kleurPalet;
    }
}
