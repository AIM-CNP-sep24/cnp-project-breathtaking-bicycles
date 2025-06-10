package com.breathtakingbicycles;

import com.breathtakingbicycles.domein.Users;
import com.breathtakingbicycles.repository.UsersRepository;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.*;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;


public class DatabaseUserDetailsService implements UserDetailsService {

    private final UsersRepository usersRepository;

    /**
     * Constructor die de UsersRepository injecteert.
     * @param usersRepository repository waarmee gebruikers uit de database worden opgehaald
     */
    public DatabaseUserDetailsService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    /**
     * Methode die wordt aangeroepen door Spring Security om een gebruiker op te halen op basis van de gebruikersnaam.
     * @param username de gebruikersnaam die wordt gebruikt om de gebruiker op te zoeken
     * @return een instantie van UserDetails met gebruikersinformatie en autoriteiten (rollen)
     * @throws UsernameNotFoundException als de gebruiker niet wordt gevonden in de database
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Zoek de gebruiker in de database op basis van gebruikersnaam
        Users users = usersRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        // Converteer de door komma's gescheiden rollen naar een lijst van SimpleGrantedAuthority objecten
        List<SimpleGrantedAuthority> authorities = Arrays.stream(users.getRoles().split(","))
                .map(String::trim)
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());

        // Maak en retourneer een Spring Security User object met alle gebruikersgegevens en autoriteiten
        return new org.springframework.security.core.userdetails.User(
                users.getUsername(),
                users.getPassword(),
                users.isEnabled(),
                true, true, true,
                authorities
        );
    }
}