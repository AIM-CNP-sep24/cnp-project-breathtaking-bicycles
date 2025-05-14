package com.breathtakingbicycles.controller;


import com.breathtakingbicycles.domein.BenodigdhedenOphaalData;
import com.breathtakingbicycles.domein.Benodigdheid;
import com.breathtakingbicycles.domein.Taal;
import com.breathtakingbicycles.repository.BenodigdheidRepository;
import com.breathtakingbicycles.repository.TaalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.ServletRequestBindingException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class BenodigdheidController {

    @Autowired
    private JdbcTemplate jdbcTemplate;
    private BenodigdheidRepository benodigdheidRepository;

    public BenodigdheidController(BenodigdheidRepository benodigdheidRepository, JdbcTemplate jdbcTemplate) {
        this.benodigdheidRepository = benodigdheidRepository;
        this.jdbcTemplate = jdbcTemplate;
    }

    @GetMapping("/benodigdheden-ophalen")
    public List<Benodigdheid> getBenodigdhedenOphaalData(@RequestHeader("parentId") int parentId, @RequestHeader("taal1") String taal1, @RequestHeader("taal2") String taal2) throws ServletRequestBindingException {
//        benodigdheidRepository.createBenodigdheidData(parentId, taal1, taal2);
        return benodigdheidRepository.getBenodigdheidOphaalData(parentId, taal1, taal2);
    }

//    @PostMapping("/maak-benodigdheid")
//    public ResponseEntity<String> createBenodigdheid(@Requestheader("body"))

    @PostMapping("/verwijder-benodigdheden")
    public ResponseEntity<Map <String, String>> verwijderBenodigdheid(@RequestHeader("benodigdheidId") int benodigdheidId){
        boolean status = benodigdheidRepository.verwijderBenodigdheid(benodigdheidId);
        Map<String, String> response = new HashMap<>();
        String message = "Succes";
        response.put("message", message);
        return(ResponseEntity.status(200).body(response));
    }


}
