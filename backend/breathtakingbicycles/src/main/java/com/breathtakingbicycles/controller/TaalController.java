package com.breathtakingbicycles.controller;

import com.breathtakingbicycles.domein.Taal;
import com.breathtakingbicycles.repository.TaalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class TaalController {

    @Autowired
    private TaalRepository taalRepository;

    public TaalController(TaalRepository taalRepository){
        this.taalRepository = taalRepository;
    }

    @GetMapping("/talen-ophalen")
    public List<Taal> getTalen(){
        return taalRepository.getTalen();
    }
}
