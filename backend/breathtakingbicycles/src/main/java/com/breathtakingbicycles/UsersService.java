package com.breathtakingbicycles;


import com.breathtakingbicycles.domein.Users;
import com.breathtakingbicycles.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsersService {

    private final UsersRepository usersRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UsersService(UsersRepository usersRepository, PasswordEncoder passwordEncoder) {
        this.usersRepository = usersRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void registerUser(String rawUsername, String rawPassword) {
        String encodedPassword = passwordEncoder.encode(rawPassword);

        Users users = new Users();
        users.setUsername(rawUsername);
        users.setPassword(encodedPassword);

        usersRepository.save(users);
    }
}