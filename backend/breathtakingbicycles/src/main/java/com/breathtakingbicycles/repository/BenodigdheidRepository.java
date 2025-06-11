package com.breathtakingbicycles.repository;

import com.breathtakingbicycles.controller.GeenBenodigdhedenException;
import com.breathtakingbicycles.domein.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public class BenodigdheidRepository {
    private final JdbcTemplate jdbcTemplate;

    public BenodigdheidRepository(@Autowired JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Benodigdheid> getAlleBenodigdheden(String taal1, String taal2){
        try {
            return jdbcTemplate.query("SELECT b.id, MAX(CASE WHEN t.code = ? THEN bv.tekst END) AS naamTaal1, MAX(CASE WHEN t.code = ? THEN bv.tekst END) AS naamTaal2, b.parent_id, b.laag, b.rangnr, b.imgsrc FROM benodigdheid b LEFT OUTER JOIN benodigdheid_vertaling bv ON b.id = bv.benodigdheid_id LEFT OUTER JOIN taal t on bv.taal_id = t.id WHERE t.code IN (?, ?) AND b.id != 0 GROUP BY b.id, b.parent_id, b.laag, b.rangnr, b.imgsrc ORDER BY id ASC", new BenodigdhedenRowMapper(), taal1, taal2, taal1, taal2);
        } catch (EmptyResultDataAccessException erdae) {
            throw erdae;
        }
    }

    public List<Benodigdheid> getBenodigdheidOphaalData(int parentId, String taal1, String taal2){
        try {
            return jdbcTemplate.query("SELECT b.id, MAX(CASE WHEN t.code = ? THEN bv.tekst END) AS naamTaal1, MAX(CASE WHEN t.code = ? THEN bv.tekst END) AS naamTaal2, b.parent_id, b.laag, b.rangnr, b.imgsrc FROM benodigdheid b LEFT OUTER JOIN benodigdheid_vertaling bv ON b.id = bv.benodigdheid_id LEFT OUTER JOIN taal t on bv.taal_id = t.id WHERE t.code IN (?, ?) AND b.parent_id = ? AND b.id != 0 GROUP BY b.id, b.parent_id, b.laag, b.rangnr, b.imgsrc ORDER BY rangnr ASC", new BenodigdhedenRowMapper(), taal1, taal2, taal1, taal2, parentId);
        } catch (EmptyResultDataAccessException erdae) {
            throw erdae;
        }
    }

    public void verwijderBenodigdheid(int benodigdheidId){
            int rowsAffectedBenodigdheid = jdbcTemplate.update("DELETE FROM benodigdheid WHERE id = ?", benodigdheidId);
            int rowsAffectedBenodigdheidVertaling = jdbcTemplate.update("DELETE FROM benodigdheid_vertaling WHERE id = ?", benodigdheidId);
            if (rowsAffectedBenodigdheid == 0 || rowsAffectedBenodigdheidVertaling == 0){
                throw new GeenBenodigdhedenException("Geen benodigdheid gevonden met dit Id");
            }
    }

    public void plaatsBenodigdheidInBoom(int parentId, int rangnr, int laag, int benodigdheidId){
            int affectedRows = jdbcTemplate.update("UPDATE benodigdheid SET parent_id = ?, rangnr = ?, laag = ? WHERE id = ?", parentId, rangnr, laag, benodigdheidId);
            if (affectedRows == 0){
                throw new GeenBenodigdhedenException("Geen benodigdheid gevonden met dit Id");
            }
    }

    public void haalBenodigdheidUitBoomStructuur(int parentId) {
            int affectedRows = jdbcTemplate.update("UPDATE benodigdheid SET parent_id = null, rangnr = null, laag = null WHERE parent_id = ?", parentId);
            if (affectedRows == 0){
                throw new GeenBenodigdhedenException("Geen benodigdheid gevonden met dit Id");
            }
    }

    public int getHoogsteBenodigdheidId(){
        try {
            return jdbcTemplate.queryForObject("SELECT MAX(id) FROM benodigdheid", Integer.class);
        } catch (EmptyResultDataAccessException erdae) {
            throw erdae;
        }
    }

    public List<BenodigdheidTitel> getBenodigdheidTitel(int id, String taal1, String taal2){
        try {
            return jdbcTemplate.query("SELECT b.id, MAX(CASE WHEN t.code = ? THEN bv.tekst END) AS naamTaal1, MAX(CASE WHEN t.code = ? THEN bv.tekst END) AS naamTaal2 FROM benodigdheid b LEFT OUTER JOIN benodigdheid_vertaling bv ON b.id = bv.benodigdheid_id LEFT OUTER JOIN taal t on bv.taal_id = t.id WHERE t.code IN (?, ?) AND b.id = ? GROUP BY b.id", new BenodigdheidTitelRowMapper(), taal1, taal2, taal1, taal2, id);
        } catch (EmptyResultDataAccessException erdae) {
            throw erdae;
        }
    }

    public boolean getBenodigdheidChilds(int id){
        boolean hasRows = false;
        List<BenodigdheidChilds> response = jdbcTemplate.query("SELECT id FROM benodigdheid WHERE parent_id = ?", new BenodigdheidsChildRowMapper(), id);
        if (!response.isEmpty()){
            hasRows = true;
        }
        return hasRows;
    }

    public List<Benodigdheid> haalParentBenodigdheidOp(int id, String taal1, String taal2){
        try {
            int parentId = jdbcTemplate.queryForObject("SELECT parent_id FROM benodigdheid WHERE id = ?", Integer.class, id);
            return jdbcTemplate.query("SELECT b.id, MAX(CASE WHEN t.code = ? THEN bv.tekst END) AS naamTaal1, MAX(CASE WHEN t.code = ? THEN bv.tekst END) AS naamTaal2, b.parent_id, b.laag, b.rangnr, b.imgsrc FROM benodigdheid b LEFT OUTER JOIN benodigdheid_vertaling bv ON b.id = bv.benodigdheid_id LEFT OUTER JOIN taal t on bv.taal_id = t.id WHERE t.code IN (?, ?) AND b.id = ? GROUP BY b.id, b.parent_id, b.laag, b.rangnr, b.imgsrc ORDER BY rangnr ASC", new BenodigdhedenRowMapper(), taal1, taal2, taal1, taal2, parentId);
        } catch (EmptyResultDataAccessException erdae){
            throw erdae;
        }
    }
}
