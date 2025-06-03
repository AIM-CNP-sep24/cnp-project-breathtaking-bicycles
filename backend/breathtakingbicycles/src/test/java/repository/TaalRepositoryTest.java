package repository;

import com.breathtakingbicycles.domein.Taal;
import com.breathtakingbicycles.repository.TaalRepository;
import com.breathtakingbicycles.repository.TaalRowMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
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

public class TaalRepositoryTest {
    @Mock
    private JdbcTemplate jdbcTemplate;
    private TaalRepository taalRepository;

    @InjectMocks
    private TaalRepository repository;

    @BeforeEach
    void setUp() {
        jdbcTemplate = mock(JdbcTemplate.class);
        taalRepository = new TaalRepository(jdbcTemplate);
    }

    @Test
    void testGetTalen_geeftLijstVanTalen() {
        Taal dummyTaal = new Taal();
        when(jdbcTemplate.query(anyString(), any(TaalRowMapper.class)))
                .thenReturn(Arrays.asList(dummyTaal));

        List<Taal> result = taalRepository.getTalen();
        assertNotNull(result);
        assertEquals(1, result.size());
    }

    @Test
    void testGetTalen_metLegeResultatenGeeftLegeLijst() {
        when(jdbcTemplate.query(anyString(), any(TaalRowMapper.class)))
                .thenReturn(Collections.emptyList());

        List<Taal> result = taalRepository.getTalen();
        assertTrue(result.isEmpty());
    }

    @Test
    void testGetTalen_gooitExeptionBijEmptyResult() {
        when(jdbcTemplate.query(anyString(), any(TaalRowMapper.class)))
                .thenThrow(new EmptyResultDataAccessException(1));

        assertThrows(EmptyResultDataAccessException.class, () -> taalRepository.getTalen());
    }
}


