package repository;

import com.breathtakingbicycles.domein.KleurPalet;
import com.breathtakingbicycles.repository.KleurPaletRepository;
import com.breathtakingbicycles.repository.KleurPaletRowMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class KleurPaletRepositoryTest {

    private JdbcTemplate jdbcTemplate;
    private KleurPaletRepository kleurPaletRepository;

    @BeforeEach
    void setup() {
        jdbcTemplate = mock(JdbcTemplate.class);
        kleurPaletRepository = new KleurPaletRepository(jdbcTemplate);
    }

    @Test
    void testGetKleurpaletten_geefLjstVanKleurpaletten() {
        KleurPalet kleurPalet = new KleurPalet();
        when(jdbcTemplate.query(anyString(), any(KleurPaletRowMapper.class)))
                .thenReturn(Arrays.asList(kleurPalet));

        List<KleurPalet> result = kleurPaletRepository.getKleurpaletten();
        assertNotNull(result);
        assertEquals(1, result.size());
    }

    @Test
    void testGetKleurpaletten_gooitExceptionBijEmptyResult() {
        when(jdbcTemplate.query(anyString(), any(KleurPaletRowMapper.class)))
                .thenThrow(new EmptyResultDataAccessException(1));
                assertThrows(EmptyResultDataAccessException.class, () -> kleurPaletRepository.getKleurpaletten());
    }

}
