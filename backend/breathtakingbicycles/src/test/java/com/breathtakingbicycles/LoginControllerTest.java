package com.breathtakingbicycles;

import com.breathtakingbicycles.controller.LoginController;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import java.util.Map;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class LoginControllerTest {

    @Mock
    private AuthenticationManager authenticationManager;

    @Mock
    private JwtUtil jwtUtil;

    @InjectMocks
    private LoginController loginController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void login_ReturnsToken_WhenAuthenticationIsSuccessful() {
        // Arrange
        var loginRequest = new LoginController.LoginRequest("user", "password");
        Authentication authResponse = mock(Authentication.class);
        when(authenticationManager.authenticate(any(UsernamePasswordAuthenticationToken.class)))
                .thenReturn(authResponse);
        when(authResponse.getName()).thenReturn("user");
        when(jwtUtil.generateToken("user")).thenReturn("mocked-jwt-token");

        // Act
        ResponseEntity<Map<String, String>> response = loginController.login(loginRequest);

        // Assert
        assertThat(response).isNotNull();
        assertThat(response.getStatusCodeValue()).isEqualTo(200);
        assertThat(response.getBody()).containsKey("token");
        assertThat(response.getBody().get("token")).isEqualTo("mocked-jwt-token");

        verify(authenticationManager, times(1)).authenticate(any());
        verify(jwtUtil, times(1)).generateToken("user");
    }

    @Test
    void login_ReturnsUnauthorized_WhenAuthenticationFails() {
        // Arrange
        var loginRequest = new LoginController.LoginRequest("user", "wrongpassword");
        when(authenticationManager.authenticate(any(UsernamePasswordAuthenticationToken.class)))
                .thenThrow(new BadCredentialsException("Bad credentials"));

        // Act
        ResponseEntity<Map<String, String>> response = loginController.login(loginRequest);

        // Assert
        assertThat(response.getStatusCodeValue()).isEqualTo(401);
        assertThat(response.getBody()).containsEntry("error", "Invalid username or password");

        verify(authenticationManager, times(1)).authenticate(any());
        verifyNoInteractions(jwtUtil);
    }
}
