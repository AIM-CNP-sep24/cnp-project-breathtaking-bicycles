package com.breathtakingbicycles.controller;

import com.breathtakingbicycles.dao.KleurPaletDao;
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
    KleurPaletDao kleurPaletDao;

    @GetMapping("/kleurpaletten")
    public List<KleurPalet> getKleurpaletten(){
        return kleurPaletDao.getKleurpaletten();
    }
}
