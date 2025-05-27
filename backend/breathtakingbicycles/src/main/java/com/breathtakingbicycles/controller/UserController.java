package com.breathtakingbicycles.controller;



import com.breathtakingbicycles.UsersService;
import com.breathtakingbicycles.dto.RegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UsersService usersService;

    @Autowired
    public UserController(UsersService usersService) {
        this.usersService = usersService;
    }

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {
        usersService.registerUser(request.getUsername(), request.getPassword());
        return "User registered successfully!";
    }

}
