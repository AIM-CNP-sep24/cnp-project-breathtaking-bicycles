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
        kleurPalet.colorOne = rs.getString("color_one");
        kleurPalet.colorOneShadow = rs.getString("color_one_shadow");
        kleurPalet.colorTwo = rs.getString("color_two");
        kleurPalet.colorTwoShadow = rs.getString("color_two_shadow");
        kleurPalet.colorThree = rs.getString("color_three");
        kleurPalet.colorThreeShadow = rs.getString("color_three_shadow");
        kleurPalet.colorFour = rs.getString("color_four");
        kleurPalet.colorFourShadow = rs.getString("color_four_shadow");
        return kleurPalet;
    }
}
