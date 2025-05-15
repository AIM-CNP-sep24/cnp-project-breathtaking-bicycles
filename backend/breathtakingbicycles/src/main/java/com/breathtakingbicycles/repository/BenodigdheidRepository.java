package com.breathtakingbicycles.repository;

import com.breathtakingbicycles.domein.Benodigdheid;
import com.breathtakingbicycles.domein.BenodigdheidChilds;
import com.breathtakingbicycles.domein.BenodigdheidInvoerData;
import com.breathtakingbicycles.domein.BenodigdheidTitel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BenodigdheidRepository {
    private final JdbcTemplate jdbcTemplate;

    public BenodigdheidRepository(@Autowired JdbcTemplate jdbcTemplate){this.jdbcTemplate = jdbcTemplate; }

    public List<Benodigdheid> getBenodigdheidOphaalData(int parentId, String taal1, String taal2){
        return jdbcTemplate.query("SELECT b.id, MAX(CASE WHEN t.code = ? THEN bv.tekst END) AS naamTaal1, MAX(CASE WHEN t.code = ? THEN bv.tekst END) AS naamTaal2, b.parent_id, b.laag, b.rangnr, b.imgsrc FROM benodigdheid b LEFT OUTER JOIN benodigdheid_vertaling bv ON b.id = bv.benodigdheid_id LEFT OUTER JOIN taal t on bv.taal_id = t.id WHERE t.code IN (?, ?) AND b.parent_id = ? GROUP BY b.id, b.parent_id, b.laag, b.rangnr, b.imgsrc ORDER BY rangnr ASC", new BenodigdhedenRowMapper(), taal1, taal2, taal1, taal2, parentId);
    }

    public boolean createBenodigdheid(BenodigdheidInvoerData data){
        jdbcTemplate.update("INSERT INTO benodigdheid (id, imgsrc) VALUES (?, ?)", data.id, data.imgsrc);
        return true;
    }

    public boolean verwijderBenodigdheid(int benodigdheidId){
        jdbcTemplate.update("DELETE FROM benodigdheid WHERE id = ?", benodigdheidId);
        jdbcTemplate.update("DELETE FROM benodigdheid_vertaling WHERE id = ?", benodigdheidId);
        return true;
    }

    public boolean voegBenodigdheidTaalToe(int id, int benodigdheidId, String tekst, int taalId){
        jdbcTemplate.update("INSERT INTO benodigdheid_vertaling (id, benodigdheid_id, tekst, taal_id) VALUES (?, ?, ?, ?)", id, benodigdheidId, tekst, taalId);
        return true;
    }

    public String plaatsBenodigdheidInBoom(int parentId, int rangnr, int laag, int benodigdheidId){
        jdbcTemplate.update("UPDATE benodigdheid SET parent_id = ? WHERE id = ?", parentId, benodigdheidId);
        jdbcTemplate.update("UPDATE benodigdheid SET rangnr = ? WHERE id = ?", rangnr, benodigdheidId);
        jdbcTemplate.update("UPDATE benodigdheid SET laag = ? WHERE id = ?", laag, benodigdheidId);
        return ("succes");
    }

    public int getHoogsteBenodigdheidId(){
        return jdbcTemplate.queryForObject("SELECT MAX(id) FROM benodigdheid", Integer.class);
    }

    public List<BenodigdheidTitel> getBenodigdheidTitel(int parentId, String taal1, String taal2){
        return jdbcTemplate.query("SELECT b.id, MAX(CASE WHEN t.code = ? THEN bv.tekst END) AS naamTaal1, MAX(CASE WHEN t.code = ? THEN bv.tekst END) AS naamTaal2 FROM benodigdheid b LEFT OUTER JOIN benodigdheid_vertaling bv ON b.id = bv.benodigdheid_id LEFT OUTER JOIN taal t on bv.taal_id = t.id WHERE t.code IN (?, ?) AND b.id = ? GROUP BY b.id", new BenodigdheidTitelRowMapper(), taal1, taal2, taal1, taal2, parentId);

    }

    public boolean getBenodigdheidChilds(int id){
        boolean hasRows = false;
        List<BenodigdheidChilds> response = jdbcTemplate.query("SELECT id FROM benodigdheid WHERE parent_id = ?", new BenodigdheidsChildRowMapper(), id);
        if (!response.isEmpty()){
            hasRows = true;
        }
        return hasRows;
    }

}
