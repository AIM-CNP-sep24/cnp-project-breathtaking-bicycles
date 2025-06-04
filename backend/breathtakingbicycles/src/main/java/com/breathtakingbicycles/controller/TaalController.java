package com.breathtakingbicycles.controller;

import com.breathtakingbicycles.domein.Taal;
import com.breathtakingbicycles.repository.TaalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
public class TaalController {

    @Autowired
    private TaalRepository taalRepository;

    public TaalController(TaalRepository taalRepository){
        this.taalRepository = taalRepository;
    }

    @GetMapping("/talen-ophalen")
    public List<Taal> getTalen(){
        List<Taal> talenList = taalRepository.getTalen();

        if (talenList == null){throw new GeenTalenException("Geen talen gevonden");}

        return talenList;
    }
}
