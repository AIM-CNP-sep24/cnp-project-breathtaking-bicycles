package com.breathtakingbicycles;

import com.breathtakingbicycles.repository.UsersRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    /**
     * Configuratie van de SecurityFilterChain, waarin we instellen hoe verzoeken worden afgehandeld.
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(csrf -> csrf.disable()) // Schakel CSRF-bescherming uit (vaak nodig voor stateless API's)
                .cors(Customizer.withDefaults()) // Schakel CORS in met standaardinstellingen
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll() // Sta alle verzoeken toe (geen beveiliging toegepast)
                )
                .build(); // Bouw en retourneer de filter chain
    }


     // CORS-configuratie: staat verzoeken toe vanaf de frontend (localhost:5173).
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("http://localhost:5173")); // frontend
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS")); // HTTP-methoden
        config.setAllowedHeaders(List.of("*"));
        config.setAllowCredentials(true);

        // Koppel de configuratie aan alle endpoints
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        return source;
    }


     // Bean voor authenticatiebeheer, gebruikt om gebruikersgegevens en wachtwoorden te valideren.
    @Bean
    public AuthenticationManager authenticationManager(
            UserDetailsService userDetailsService,
            PasswordEncoder passwordEncoder) {

        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder); // Stel encoder in voor wachtwoordverificatie

        return new ProviderManager(authProvider);
    }

     // Registreert UserDetailsService die gebruikers uit de database ophaalt.
    @Bean
    public UserDetailsService userDetailsService(UsersRepository usersRepository) {
        return new DatabaseUserDetailsService(usersRepository);
    }

     // Bean voor wachtwoordversleuteling: gebruikt een delegating encoder (ondersteunt meerdere formaten).
    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}
