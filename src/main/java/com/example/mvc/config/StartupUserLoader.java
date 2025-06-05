package com.example.mvc.config;

import com.example.mvc.model.User;
import com.example.mvc.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class StartupUserLoader implements CommandLineRunner {

    private final UserRepository userRepository;

    public StartupUserLoader(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) {
        if (userRepository.findByUsername("admin") == null) {
            User user = new User();
            user.setUsername("admin");
            user.setPassword("password");
            userRepository.save(user);
            System.out.println("✅ Admin user created");
        } else {
            System.out.println("✅ Admin user already exists");
        }
    }
}
