package com.breathtakingbicycles.controller;


import com.breathtakingbicycles.domein.*;
import com.breathtakingbicycles.repository.BenodigdheidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.ServletRequestBindingException;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin("http://localhost:5173")
@RestController
public class BenodigdheidController {

    @Autowired
    private BenodigdheidRepository benodigdheidRepository;

    public BenodigdheidController(BenodigdheidRepository benodigdheidRepository) {
        this.benodigdheidRepository = benodigdheidRepository;
    }

    @GetMapping("/alle-benodigdheden-ophalen")
    public List<Benodigdheid> getAlleBenodigdheden(@RequestHeader("taal1") String taal1, @RequestHeader("taal2") String taal2){
        List<Benodigdheid> benodigdhedenList = benodigdheidRepository.getAlleBenodigdheden(taal1, taal2);

        if (benodigdhedenList == null){throw new GeenBenodigdhedenException("Geen benodigdheden gevonden.");}

        return benodigdhedenList;
    }

    @GetMapping("/benodigdheden-ophalen")
    public List<Benodigdheid> getBenodigdhedenOphaalData(@RequestHeader ("taal1") String taal1, @RequestHeader ("taal2") String taal2, @RequestHeader ("parentId") int parentId ) {
        List<Benodigdheid> benodigdheidList = benodigdheidRepository.getBenodigdheidOphaalData(parentId, taal1, taal2);

        if (benodigdheidList == null){throw new GeenBenodigdhedenException("Geen benodigdheden gevonden.");}

        return benodigdheidList;
    }

    @PostMapping("/boomstructuur-wijzigen")
    public ResponseEntity<Map<String, String>> boomstructuurWijzigen(@RequestBody Benodigdheid benodigdheid) {
        Map<String, String> response = new HashMap<>();
        benodigdheidRepository.haalBenodigdheidUitBoomStructuur(benodigdheid.parentId);
        benodigdheidRepository.plaatsBenodigdheidInBoom(benodigdheid.parentId, benodigdheid.rangnr, benodigdheid.laag, benodigdheid.id);
        response.put("message", "Boomstructuur gewijzigd.");
        return ResponseEntity.status(200).body(response);
    }

    @PostMapping("/verwijder-benodigdheden")
    public ResponseEntity<Map <String, String>> verwijderBenodigdheid(@RequestHeader("benodigdheidId") int benodigdheidId){
        Map<String, String> response = new HashMap<>();
        benodigdheidRepository.verwijderBenodigdheid(benodigdheidId);
        response.put("message", "Benodigdheid verwijderd.");
        return (ResponseEntity.status(200).body(response));
    }

    @GetMapping("/hoogste-benodigdheid-id")
    public int getHoogsteBenodigdheidId(){
        int id = benodigdheidRepository.getHoogsteBenodigdheidId();

        if (id == 0) {throw new GeenBenodigdhedenException("Geen benodigdheden gevonden.");}

        return id;
    }

    @GetMapping("/benodigdheid-titel-ophalen")
    public List<BenodigdheidTitel> getBenodigdheidTitel(@RequestHeader("parentId") int parentId, @RequestHeader("taal1") String taal1, @RequestHeader("taal2") String taal2){
    List<BenodigdheidTitel> benodigdheidTitelList = benodigdheidRepository.getBenodigdheidTitel(parentId, taal1, taal2);

        if (benodigdheidTitelList == null) {throw new GeenBenodigdhedenException("Geen benodigdheidtitel gevonden.");}

        return benodigdheidTitelList;
    }

    @GetMapping("/benodigdheid-childs-ophalen")
    public boolean getBenodigdheidChilds(@RequestHeader("parentId") int parentId){

        return benodigdheidRepository.getBenodigdheidChilds(parentId);
    }

    @GetMapping("/parent-benodigdheid-ophalen")
    public List<Benodigdheid> haalParentBenodigdheidOp(@RequestHeader("id") int id, @RequestHeader("taal1") String taal1, @RequestHeader("taal2") String taal2){
        List<Benodigdheid> benodigdheidList = benodigdheidRepository.haalParentBenodigdheidOp(id, taal1, taal2);

        if (benodigdheidList == null) { throw new GeenBenodigdhedenException("Geen benodigdheden gevonden.");}

        return benodigdheidList;
    }
}
