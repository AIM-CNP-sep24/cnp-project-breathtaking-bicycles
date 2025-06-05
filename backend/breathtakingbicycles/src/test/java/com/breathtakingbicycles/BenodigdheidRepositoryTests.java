package com.breathtakingbicycles;

import com.breathtakingbicycles.controller.GeenBenodigdhedenException;
import com.breathtakingbicycles.domein.Benodigdheid;
import com.breathtakingbicycles.domein.BenodigdheidChilds;
import com.breathtakingbicycles.domein.BenodigdheidTitel;
import com.breathtakingbicycles.repository.BenodigdhedenRowMapper;
import com.breathtakingbicycles.repository.BenodigdheidRepository;
import com.breathtakingbicycles.repository.BenodigdheidTitelRowMapper;
import com.breathtakingbicycles.repository.BenodigdheidsChildRowMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class BenodigdheidRepositoryTests {

    @InjectMocks
    private BenodigdheidRepository sut;

    @Mock
    private JdbcTemplate jdbcTemplate;

    public BenodigdheidRepositoryTests (){}

    @BeforeEach
    void setup(){
        jdbcTemplate = mock(JdbcTemplate.class);
        sut = new BenodigdheidRepository(jdbcTemplate);
    }

    @Test
    void testBenodigdheidRepository_HaalAlleBenodigdhedenOp(){
        String taal1 = "NL";
        String taal2 = "EN";
        Benodigdheid benodigdheid = new Benodigdheid();
        when(jdbcTemplate.query(
                anyString(),
                any(BenodigdhedenRowMapper.class),
                any(Object[].class)
        )).thenReturn(Arrays.asList(benodigdheid));
        List<Benodigdheid> result = sut.getAlleBenodigdheden(taal1, taal2);
        assertNotNull(result);
        assertEquals(1, result.size());
    }

    @Test
    void testBenodigdheidRepository_GeenBenodigdhedenGevondenTest(){
            String taal1 = "NL";
            String taal2 = "EN";

            when(jdbcTemplate.query(
                    anyString(),
                    any(BenodigdhedenRowMapper.class),
                    any(Object[].class)
            )).thenThrow(new EmptyResultDataAccessException(1));

            assertThrows(EmptyResultDataAccessException.class, () -> sut.getAlleBenodigdheden(taal1, taal2));
    }

    @Test
    void testBenodigdheidRepository_haalBenodigdheidOphaalDataOpTest(){
        Benodigdheid benodigdheid = new Benodigdheid();
        when(jdbcTemplate.query(
                anyString(),
                any(BenodigdhedenRowMapper.class),
                any(Object[].class)
        )).thenReturn(Arrays.asList(benodigdheid));
        List<Benodigdheid> result = sut.getBenodigdheidOphaalData(0, "NL", "EN");
        assertNotNull(result);
        assertEquals(1, result.size());
    }

    @Test
    void testBenodigdheidRepository_geenBenodigdheidOphaalDataGevondenTest(){
        when(jdbcTemplate.query(
                anyString(),
                any(BenodigdhedenRowMapper.class),
                any(Object[].class)
        )).thenThrow(new EmptyResultDataAccessException(1));

        assertThrows(EmptyResultDataAccessException.class, () -> sut.getBenodigdheidOphaalData(-2, "NL", "EN"));
    }

    @Test
    void testBenodigdheidRepository_verwijderBenodigdheidSuccesvolTest(){
        int benodigdheidId = 1;
        when(jdbcTemplate.update(anyString(), eq(benodigdheidId))).thenReturn(1);

        assertDoesNotThrow(() -> sut.verwijderBenodigdheid(benodigdheidId));

        verify(jdbcTemplate, times(2)).update(anyString(), eq(benodigdheidId));

    }

    @Test
    void testBenodigdheidRepository_verwijderBenodigdheidGeenBenodigdheidGevondenTest(){
        int benodigdheidId = 1;

        when(jdbcTemplate.update(anyString(), eq(benodigdheidId)))
                .thenReturn(0)
                .thenReturn(1);

        assertThrows(GeenBenodigdhedenException.class, () -> sut.verwijderBenodigdheid(benodigdheidId));
    }

    @Test
    void testBenodigdheidRepository_verwijderBenodigdheidGeenVertalingenGevondenTest(){
        int benodigdheidId = 1;

        when(jdbcTemplate.update(anyString(), eq(benodigdheidId)))
                .thenReturn(1)
                .thenReturn(0);

        assertThrows(GeenBenodigdhedenException.class, () -> sut.verwijderBenodigdheid(benodigdheidId));
    }

    @Test
    void testBenodigdheidRepository_plaatsBenodigdheidInBoomSuccesvolTest(){
        int parentId = 0;
        int rangnr = 0;
        int laagnr = 0;
        int benodigdheidId = 1;

        when(jdbcTemplate.update(anyString(), eq(parentId), eq(rangnr), eq(laagnr), eq(benodigdheidId))).thenReturn(1);

        assertDoesNotThrow(() -> sut.plaatsBenodigdheidInBoom(parentId, rangnr, laagnr, benodigdheidId));

        verify(jdbcTemplate, times(1)).update(anyString(), eq(parentId), eq(rangnr), eq(laagnr), eq(benodigdheidId));
    }

    @Test
    void testBenodigdheidRepository_plaatsBenodigdheidInBoomOngeldigeBenodigdheidTest(){
        int parentId = 0;
        int rangnr = 0;
        int laagnr = 0;
        int benodigdheidId = 1;

        when(jdbcTemplate.update(anyString(), eq(parentId), eq(rangnr), eq(laagnr), eq(benodigdheidId))).thenReturn(0);

        assertThrows(GeenBenodigdhedenException.class, () -> sut.plaatsBenodigdheidInBoom(parentId, rangnr, laagnr, benodigdheidId));
    }

    @Test
    void testBenodigdheidRepository_haalBenodigdheidUitBoomStructuurSuccesvolTest(){
        int parentId = 0;
        when(jdbcTemplate.update(anyString(), eq(parentId))).thenReturn(1);

        assertDoesNotThrow(() -> sut.haalBenodigdheidUitBoomStructuur(parentId));

        verify(jdbcTemplate, times(1)).update(anyString(), eq(parentId));
    }

    @Test
    void testBenodigdheidRepository_haalBenodigdheidUitBoomStructuurOngeldigeBenodigdheidTest(){
        int parentId = -2;

        when(jdbcTemplate.update(anyString(), eq(parentId))).thenReturn(0);

        assertThrows(GeenBenodigdhedenException.class, () -> sut.haalBenodigdheidUitBoomStructuur(parentId));
    }

    @Test
    void testBenodigdheidRepository_getHoogsteBenodigdheidIdSuccesvolTest(){
        int verwachtId = 1;
        when(jdbcTemplate.queryForObject(anyString(), eq(Integer.class))).thenReturn(verwachtId);

        int result = sut.getHoogsteBenodigdheidId();

        assertEquals(result, verwachtId);
    }

    @Test
    void testBenodigdheidRepository_getHoogsteBenodigdheidIdGeenBenodigdhedenTest(){
        when(jdbcTemplate.queryForObject(anyString(), eq(Integer.class))).thenThrow(EmptyResultDataAccessException.class);

        assertThrows(EmptyResultDataAccessException.class, () -> sut.getHoogsteBenodigdheidId());
    }

    @Test
    void testBenodigdheidRepository_getBenodigdheidTitelSuccesvolTest(){
        int id = 0;
        String taal1 = "NL";
        String taal2 = "EN";
        BenodigdheidTitel benodigdheidtitel = new BenodigdheidTitel();
        when(jdbcTemplate.query(anyString(), any(BenodigdheidTitelRowMapper.class), any(Object[].class))).thenReturn(Arrays.asList(benodigdheidtitel));

        List<BenodigdheidTitel> result = sut.getBenodigdheidTitel(id, taal1, taal2);
        assertNotNull(result);
        assertEquals(1, result.size());
    }

    @Test
    void testBenodigdheidRepository_getBenodigdheidTitelOngeldigeBenodigdheidTest(){
        int id = 1;
        String taal1 = "NL";
        String taal2 = "EN";
        BenodigdheidTitel benodigdheidTitel = new BenodigdheidTitel();

        when(jdbcTemplate.query(
                anyString(),
                any(BenodigdheidTitelRowMapper.class),
                any(Object[].class)
        )).thenThrow(new EmptyResultDataAccessException(1));

        assertThrows(EmptyResultDataAccessException.class, () -> sut.getBenodigdheidTitel(id, taal1, taal2));
    }

    @Test
    void testBenodigdheidRepository_getBenodigdheidChildsIsTrueTest(){
        int id = 1;
        List<BenodigdheidChilds> benodigdheidChildsList = List.of(new BenodigdheidChilds());
        when(jdbcTemplate.query(anyString(), any(BenodigdheidsChildRowMapper.class), eq(id))).thenReturn(benodigdheidChildsList);

        boolean resultaat = sut.getBenodigdheidChilds(id);

        assertTrue(resultaat);
    }

    @Test
    void testBenodigdheidRepository_getBenodigdheidChildsIsFalseTest(){
        int id = 1;
        List<BenodigdheidChilds> benodigdheidChildsList = List.of(new BenodigdheidChilds());
        when(jdbcTemplate.query(anyString(), any(BenodigdheidsChildRowMapper.class), eq(id))).thenReturn(Collections.emptyList());

        boolean resultaat = sut.getBenodigdheidChilds(id);

        assertFalse(resultaat);
    }

    @Test
    void testBenodigdheidRepository_haalParentBenodigdheidOpSuccesvolTest(){
        int id = 1;
        int parentId = 0;
        String taal1 = "NL";
        String taal2 = "EN";
        List<Benodigdheid> mockResultaat = List.of(new Benodigdheid());

        when(jdbcTemplate.queryForObject(anyString(), eq(Integer.class), eq(id))).thenReturn(parentId);
        when(jdbcTemplate.query(anyString(), any(BenodigdhedenRowMapper.class), eq(taal1), eq(taal2), eq(taal1), eq(taal2), eq(parentId))).thenReturn(mockResultaat);

        List<Benodigdheid> resultaat = sut.haalParentBenodigdheidOp(id, taal1, taal2);

        assertNotNull(resultaat);
        assertEquals(1, resultaat.size());
    }

    @Test
    void testBenodigdheidRepository_haalParentBenodigdheidOpParentNietGevondenTest(){
        int id = 1;
        String taal1 = "NL";
        String taal2 = "EN";

        when(jdbcTemplate.queryForObject(anyString(), eq(Integer.class), eq(id))).thenThrow(new EmptyResultDataAccessException(1));

        assertThrows(EmptyResultDataAccessException.class, () -> sut.haalParentBenodigdheidOp(id, taal1, taal2));
    }
    }
