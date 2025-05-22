package com.breathtakingbicycles;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfigurationSource;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class SecurityConfigTest {

    @Autowired
    private SecurityFilterChain securityFilterChain;

    @Autowired
    private CorsConfigurationSource corsConfigurationSource;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ApplicationContext context;

    @Test
    void contextLoads() {
        assertThat(context).isNotNull();
    }

    @Test
    void securityFilterChainBeanIsCreated() {
        assertThat(securityFilterChain).isNotNull();
    }

    @Test
    void corsConfigurationSourceHasCorrectAllowedOrigin() {
        MockHttpServletRequest request = new MockHttpServletRequest();
        var corsConfig = corsConfigurationSource.getCorsConfiguration(request);
        assertThat(corsConfig).isNotNull();
        assertThat(corsConfig.getAllowedOrigins()).contains("http://localhost:5173");
        assertThat(corsConfig.getAllowedMethods()).contains("GET", "POST", "PUT", "DELETE", "OPTIONS");
        assertThat(corsConfig.getAllowCredentials()).isTrue();
    }


    @Test
    void authenticationManagerIsNotNull() {
        assertThat(authenticationManager).isNotNull();
    }

    @Test
    void userDetailsServiceLoadsUser() {
        var user = userDetailsService.loadUserByUsername("user");
        assertThat(user).isNotNull();
        assertThat(user.getUsername()).isEqualTo("user");
        assertThat(user.getAuthorities()).anyMatch(grantedAuthority -> grantedAuthority.getAuthority().equals("ROLE_USER"));
    }

    @Test
    void passwordEncoderMatchesRawPassword() {
        var rawPassword = "password";
        var encoded = userDetailsService.loadUserByUsername("user").getPassword();
        assertThat(passwordEncoder.matches(rawPassword, encoded)).isTrue();
    }
}
