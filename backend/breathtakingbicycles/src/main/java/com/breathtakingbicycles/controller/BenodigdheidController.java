package com.breathtakingbicycles.controller;


import com.breathtakingbicycles.domein.*;
import com.breathtakingbicycles.repository.BenodigdheidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.ServletRequestBindingException;
import org.springframework.web.bind.annotation.*;

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
        return benodigdheidRepository.getAlleBenodigdheden(taal1, taal2);
    }

    @GetMapping("/benodigdheden-ophalen")
    public List<Benodigdheid> getBenodigdhedenOphaalData(@RequestHeader ("taal1") String taal1, @RequestHeader ("taal2") String taal2, @RequestHeader ("parentId") int parentId ) throws ServletRequestBindingException {
        return benodigdheidRepository.getBenodigdheidOphaalData(parentId, taal1, taal2);
    }

    @PostMapping("/boomstructuur-wijzigen")
    public String boomstructuurWijzigen(@RequestBody Benodigdheid benodigdheid){
        benodigdheidRepository.haalBenodigdheidUitBoomStructuur(benodigdheid.parentId);
        return benodigdheidRepository.plaatsBenodigdheidInBoom(benodigdheid.parentId, benodigdheid.rangnr, benodigdheid.laag, benodigdheid.id);
    }

    @PostMapping("/maak-benodigdheid")
    public ResponseEntity<Map<String, String>> maakBenodigdheid(@RequestHeader("body") BenodigdheidInvoerData invoerData) {
        Map<String, String> response = new HashMap<>();
        String message;
        if (benodigdheidRepository.checkOfBenodigdheidNaamAlBestaat(invoerData.naam)) {
            ArrayList<VertalingData> vertalingData = benodigdheidRepository.maakVertalingData(invoerData.naam);
            boolean status = benodigdheidRepository.maakBenodigdheid(invoerData, vertalingData);
            if (status) {
                message = "Benodigdheid toegevoegd";
                response.put("message", message);
                return (ResponseEntity.status(200).body(response));
            } else {
                message = "Er is iets mis gegaan";
                response.put("message", message);
                return (ResponseEntity.status(403).body(response));
            }
        } else {
            message = "Benodigdheid bestaat al";
            response.put("message", message);
            return (ResponseEntity.status(403).body(response));
        }
    }

    @PostMapping("/verwijder-benodigdheden")
    public ResponseEntity<Map <String, String>> verwijderBenodigdheid(@RequestHeader("benodigdheidId") int benodigdheidId){
        boolean status;
        if (benodigdheidRepository.checkOfBenodigdheidBestaat(benodigdheidId)) {
            status = benodigdheidRepository.verwijderBenodigdheid(benodigdheidId);
        } else {
            status = false;
        }
        Map<String, String> response = new HashMap<>();
        String message = "Succes";
        response.put("message", message);
        return(ResponseEntity.status(200).body(response));
    }

    @GetMapping("/hoogste-benodigdheid-id")
    public int getHoogsteBenodigdheidId(){
        return benodigdheidRepository.getHoogsteBenodigdheidId();
    }

    @GetMapping("/benodigdheid-titel-ophalen")
    public List<BenodigdheidTitel> getBenodigdheidTitel(@RequestHeader("parentId") int parentId, @RequestHeader("taal1") String taal1, @RequestHeader("taal2") String taal2){
        return benodigdheidRepository.getBenodigdheidTitel(parentId, taal1, taal2);
    }

    @GetMapping("/benodigdheid-childs-ophalen")
    public boolean getBenodigdheidChilds(@RequestHeader("parentId") int parentId){
        return benodigdheidRepository.getBenodigdheidChilds(parentId);
    }

    @PostMapping("/benodigdheden-uit-boomstructuur-halen")
    public String haalBenodigdheidUitBoomStructuur(@RequestBody int parentId){
        benodigdheidRepository.haalBenodigdheidUitBoomStructuur(parentId);
        return "succes";
    }

    @GetMapping("/parent-benodigdheid-ophalen")
    public List<Benodigdheid> haalParentBenodigdheidOp(@RequestHeader("id") int id, @RequestHeader("taal1") String taal1, @RequestHeader("taal2") String taal2){
        return benodigdheidRepository.haalParentBenodigdheidOp(id, taal1, taal2);
    }




}
