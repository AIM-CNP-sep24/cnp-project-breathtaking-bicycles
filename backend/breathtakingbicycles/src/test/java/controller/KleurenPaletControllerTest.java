package controller;

import com.breathtakingbicycles.controller.GeenKleurenPalettenException;
import com.breathtakingbicycles.controller.KleurenPaletController;
import com.breathtakingbicycles.domein.KleurPalet;
import com.breathtakingbicycles.repository.KleurPaletRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import java.util.Arrays;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class KleurenPaletControllerTest {
    @Mock
    private KleurPaletRepository kleurPaletRepository;

    @InjectMocks
    private KleurenPaletController kleurenPaletController;

    @BeforeEach
    void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getKleurpaletten_ReturnsList_WhenPalettenBestaan() {
        KleurPalet kleurPalet1 = new KleurPalet();
        KleurPalet kleurPalet2 = new KleurPalet();
        when(kleurPaletRepository.getKleurpaletten())
                .thenReturn(Arrays.asList(kleurPalet1, kleurPalet2));

        List<KleurPalet> result = kleurenPaletController.getKleurpaletten();

        assertNotNull(result);
        assertEquals(2, result.size());
        verify(kleurPaletRepository, times(1)).getKleurpaletten();
    }

    @Test
    void testGetKleurpaletten_gooitGeenKleurenPalettenException_WhenRepositoryReturnsNull() {
        when(kleurPaletRepository.getKleurpaletten())
                .thenReturn(null);
        GeenKleurenPalettenException exception = assertThrows(GeenKleurenPalettenException.class, () -> {
            kleurenPaletController.getKleurpaletten();
        });

        assertEquals("Geen kleurenpaletten gevonden.", exception.getMessage());
        verify(kleurPaletRepository, times(1)).getKleurpaletten();
    }

}
