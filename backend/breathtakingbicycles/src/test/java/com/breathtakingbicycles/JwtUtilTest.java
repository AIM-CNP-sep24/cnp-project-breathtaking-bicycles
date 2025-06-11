package com.breathtakingbicycles;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.*;

class JwtUtilTest {

    private final JwtUtil jwtUtil = new JwtUtil();

    @Test
    void generateToken_ShouldReturnNonEmptyToken() {
        String username = "testuser";
        String token = jwtUtil.generateToken(username);

        assertThat(token).isNotNull();
        assertThat(token).isNotEmpty();
    }

    @Test
    void getUsernameFromToken_ShouldReturnCorrectUsername() {
        String username = "testuser";
        String token = jwtUtil.generateToken(username);

        String extractedUsername = jwtUtil.getUsernameFromToken(token);

        assertThat(extractedUsername).isEqualTo(username);
    }

    @Test
    void isTokenValid_ShouldReturnTrueForValidToken() {
        String username = "testuser";
        String token = jwtUtil.generateToken(username);

        boolean valid = jwtUtil.isTokenValid(token);

        assertThat(valid).isTrue();
    }

    @Test
    void isTokenValid_ShouldReturnFalseForInvalidToken() {
        // Simuleer een ongeldig token (bijv. verkeerde structuur)
        String invalidToken = "invalid.token.value";

        boolean valid = jwtUtil.isTokenValid(invalidToken);

        assertThat(valid).isFalse();
    }

    @Test
    void getUsernameFromToken_ShouldThrowExceptionForInvalidToken() {
        String invalidToken = "invalid.token.value";

        assertThatThrownBy(() -> jwtUtil.getUsernameFromToken(invalidToken))
                .isInstanceOf(io.jsonwebtoken.JwtException.class);
    }
}
