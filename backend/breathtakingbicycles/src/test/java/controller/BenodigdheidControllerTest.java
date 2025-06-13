package controller;

import com.breathtakingbicycles.controller.BenodigdheidController;
import com.breathtakingbicycles.controller.GeenBenodigdhedenException;
import com.breathtakingbicycles.domein.Benodigdheid;
import com.breathtakingbicycles.domein.BenodigdheidTitel;
import com.breathtakingbicycles.domein.Taal;
import com.breathtakingbicycles.repository.BenodigdheidRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class BenodigdheidControllerTest {

    @Mock
    private BenodigdheidRepository benodigdheidRepository;

    @InjectMocks
    private BenodigdheidController benodigdheidController;

    @BeforeEach
    void setup() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetAlleBenodigdhedenReturnListWhenBenodigdhedenBestaan() {
        Benodigdheid benodigdheid1 = new Benodigdheid();
        Benodigdheid benodigdheid2 = new Benodigdheid();
        when(benodigdheidRepository.getAlleBenodigdheden("nl", "en"))
                .thenReturn(Arrays.asList(benodigdheid1, benodigdheid2));

        List<Benodigdheid> result = benodigdheidController.getAlleBenodigdheden("nl", "en");

        assertNotNull(result);
        assertEquals(2, result.size());
        verify(benodigdheidRepository, times(1)).getAlleBenodigdheden("nl", "en");

    }

    @Test
    void testGetAlleBenodigdhedenGooitGeenBenodigdhedenExceptionWhenRepositoryReturnNull() {
        when(benodigdheidRepository.getAlleBenodigdheden("nl", "en"))
                .thenReturn(null);

        assertThrows(GeenBenodigdhedenException.class, () -> {
            benodigdheidController.getAlleBenodigdheden("nl", "en");
        });

        verify(benodigdheidRepository, times(1)).getAlleBenodigdheden("nl", "en");
    }

    @Test
    void testGetBenodigdhedenOphaalDataRetunListWhenBenodigdhedenBestaan() {
        Benodigdheid benodigdheid1 = new Benodigdheid();
        Benodigdheid benodigdheid2 = new Benodigdheid();
        when(benodigdheidRepository.getBenodigdheidOphaalData(5, "nl", "en"))
                .thenReturn(Arrays.asList(benodigdheid1, benodigdheid2));

        List<Benodigdheid> result = benodigdheidController.getBenodigdhedenOphaalData("nl", "en", 5);

        assertNotNull(result);
        assertEquals(2, result.size());
        verify(benodigdheidRepository, times(1)).getBenodigdheidOphaalData(5, "nl", "en");
    }

    @Test
    void testGetBenodigdhedenOphaalDataGooitGeenBenodigdhedenExceptionWhenRepositoryReturnNull() {
        when(benodigdheidRepository.getBenodigdheidOphaalData(5,"nl", "en"))
                .thenReturn(null);

        assertThrows(GeenBenodigdhedenException.class, () -> {
            benodigdheidController.getBenodigdhedenOphaalData("nl", "en", 5);
        });

        verify(benodigdheidRepository, times(1)).getBenodigdheidOphaalData(5,"nl", "en");
    }

    @Test
    void testBoomstructuurWijzigenSuccess() {
        Benodigdheid benodigdheid = new Benodigdheid();
        benodigdheid.id = 1;
        benodigdheid.parentId = 2;
        benodigdheid.rangnr = 3;
        benodigdheid.laag = 4;

        ResponseEntity<Map<String, String>> response = benodigdheidController.boomstructuurWijzigen(benodigdheid);

        assertEquals(200, response.getStatusCodeValue());
        assertEquals("Boomstructuur gewijzigd.", response.getBody().get("message"));

        verify(benodigdheidRepository, times(1)).haalBenodigdheidUitBoomStructuur(2);
        verify(benodigdheidRepository, times(1)).plaatsBenodigdheidInBoom(2, 3, 4, 1);


    }

    @Test
    void testBoomstructuurWijzigenGooitExceptionWhenRepositoryFails() {
        Benodigdheid benodigdheid = new Benodigdheid();
        benodigdheid.id = 1;
        benodigdheid.parentId = 2;
        benodigdheid.rangnr = 3;
        benodigdheid.laag = 4;

        doThrow(new RuntimeException("DB error"))
                .when(benodigdheidRepository).haalBenodigdheidUitBoomStructuur(2);

        assertThrows(RuntimeException.class, () -> {
            benodigdheidController.boomstructuurWijzigen(benodigdheid);
        });

        verify(benodigdheidRepository, times(1)).haalBenodigdheidUitBoomStructuur(2);
        verify(benodigdheidRepository, never()).plaatsBenodigdheidInBoom(anyInt(), anyInt(), anyInt(), anyInt());
    }

    @Test
    void testVerwijderBenodigdheidSuccess() {
        int benodigdheidId = 2;

        ResponseEntity<Map<String, String>> response = benodigdheidController.verwijderBenodigdheid(benodigdheidId);

        assertEquals(200, response.getStatusCodeValue());
        assertEquals("Benodigdheid verwijderd.", response.getBody().get("message"));

        verify(benodigdheidRepository, times(1)).verwijderBenodigdheid(benodigdheidId);
    }

    @Test
    void testVerwijderBenodigdheidRepositoryThrowsException() {
        int benodigdheidId = 2;

        doThrow(new RuntimeException("Database error"))
                .when(benodigdheidRepository).verwijderBenodigdheid(benodigdheidId);

        assertThrows(RuntimeException.class, () -> {
            benodigdheidController.verwijderBenodigdheid(benodigdheidId);
        });

        verify(benodigdheidRepository, times(1)).verwijderBenodigdheid(benodigdheidId);
    }

    @Test
    void testGetHoogsteBenodigdheidIdReturnsIdWhenIdIsGreaterThanZero() {
        when(benodigdheidRepository.getHoogsteBenodigdheidId()).thenReturn(3);

        int result = benodigdheidController.getHoogsteBenodigdheidId();

        assertEquals(3, result);
        verify(benodigdheidRepository, times(1)).getHoogsteBenodigdheidId();
    }

    @Test
    void testGetHoogsteBenodigdheidIdRepositoryThrowsException() {
        when(benodigdheidRepository.getHoogsteBenodigdheidId())
                .thenThrow(new RuntimeException("Database failure"));

        assertThrows(RuntimeException.class, () -> {
            benodigdheidController.getHoogsteBenodigdheidId();
        });

        verify(benodigdheidRepository, times(1)).getHoogsteBenodigdheidId();
    }

    @Test
    void testGetBenodigdheidTitelReturnsListWhenDataExists() {
        BenodigdheidTitel titel1 = new BenodigdheidTitel();
        BenodigdheidTitel titel2 = new BenodigdheidTitel();
        when(benodigdheidRepository.getBenodigdheidTitel(1, "nl", "en"))
                .thenReturn(Arrays.asList(titel1, titel2));

        List<BenodigdheidTitel> result = benodigdheidController.getBenodigdheidTitel(1, "nl", "en");

        assertNotNull(result);
        assertEquals(2, result.size());
        verify(benodigdheidRepository, times(1)).getBenodigdheidTitel(1, "nl", "en");
    }

    @Test
    void testGetBenodigdheidTitelGooitExceptionWhenResultIsNull() {
        when(benodigdheidRepository.getBenodigdheidTitel(1, "nl", "en"))
                .thenReturn(null);

        assertThrows(GeenBenodigdhedenException.class, () -> {
            benodigdheidController.getBenodigdheidTitel(1, "nl", "en");
        });

        verify(benodigdheidRepository, times(1)).getBenodigdheidTitel(1, "nl", "en");
    }

    @Test
    void testGetBenodigdheidChildsReturnsTrue() {
        when(benodigdheidRepository.getBenodigdheidChilds(10)).thenReturn(true);

        boolean result = benodigdheidController.getBenodigdheidChilds(10);

        assertTrue(result);
        verify(benodigdheidRepository, times(1)).getBenodigdheidChilds(10);
    }

    @Test
    void testGetBenodigdheidChildsReturnsFalse() {
        when(benodigdheidRepository.getBenodigdheidChilds(10)).thenReturn(false);

        boolean result = benodigdheidController.getBenodigdheidChilds(10);

        assertFalse(result);
        verify(benodigdheidRepository, times(1)).getBenodigdheidChilds(10);
    }

    @Test
    void testHaalParentBenodigdheidOpReturnsList() {
        Benodigdheid benodigdheid1 = new Benodigdheid();
        Benodigdheid benodigdheid2 = new Benodigdheid();

        when(benodigdheidRepository.haalParentBenodigdheidOp(5, "nl", "en"))
                .thenReturn(Arrays.asList(benodigdheid1, benodigdheid2));

        List<Benodigdheid> result = benodigdheidController.haalParentBenodigdheidOp(5, "nl", "en");

        assertNotNull(result);
        assertEquals(2, result.size());
        verify(benodigdheidRepository, times(1)).haalParentBenodigdheidOp(5, "nl", "en");
    }

    @Test
    void testHaalParentBenodigdheidOpGooitGeenBenodigdhedenExceptionWhenResultIsNull() {
        when(benodigdheidRepository.haalParentBenodigdheidOp(5, "nl", "en"))
                .thenReturn(null);

        assertThrows(GeenBenodigdhedenException.class, () -> {
            benodigdheidController.haalParentBenodigdheidOp(5, "nl", "en");
        });

        verify(benodigdheidRepository, times(1)).haalParentBenodigdheidOp(5, "nl", "en");
    }

}
