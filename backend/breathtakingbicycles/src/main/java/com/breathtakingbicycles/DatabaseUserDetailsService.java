package com.breathtakingbicycles;

import com.breathtakingbicycles.domein.Users;
import com.breathtakingbicycles.repository.UsersRepository;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.*;

import java.util.stream.Collectors;

public class DatabaseUserDetailsService implements UserDetailsService {

    private final UsersRepository usersRepository;

    public DatabaseUserDetailsService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users users = usersRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return new org.springframework.security.core.userdetails.User(
                users.getUsername(),
                users.getPassword(),
                users.isEnabled(),
                true, true, true,
                users.getRoles().stream()
                        .map(SimpleGrantedAuthority::new)
                        .collect(Collectors.toSet())
        );
    }
}
