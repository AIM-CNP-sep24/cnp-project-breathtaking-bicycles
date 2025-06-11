package com.breathtakingbicycles.controller;

import com.breathtakingbicycles.repository.KleurPaletRepository;
import com.breathtakingbicycles.domein.KleurPalet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
public class KleurenPaletController {
    @Autowired
    KleurPaletRepository kleurPaletRepository;

    public KleurenPaletController(@Autowired KleurPaletRepository kleurPaletRepository) {
        this.kleurPaletRepository = kleurPaletRepository;
    }

    @GetMapping("/kleurpaletten")
    public List<KleurPalet> getKleurpaletten(){
        List<KleurPalet> kleurPalettenList = kleurPaletRepository.getKleurpaletten();

        if (kleurPalettenList == null){throw new GeenKleurenPalettenException("Geen kleurenpaletten gevonden.");}

        return kleurPalettenList;
    }
}
