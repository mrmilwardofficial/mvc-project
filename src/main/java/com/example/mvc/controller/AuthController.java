package com.example.mvc.controller;

import com.example.mvc.model.User;
import com.example.mvc.repository.UserRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5500", allowCredentials = "true")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public String login(@RequestBody User loginUser, HttpSession session) {
        User user = userRepository.findByUsername(loginUser.getUsername());
        if (user != null && user.getPassword().equals(loginUser.getPassword())) {
            session.setAttribute("user", user);
            return "Login successful";
        }
        return "Invalid credentials";
    }

    @PostMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "Logged out";
    }
    @GetMapping("/check")
public ResponseEntity<?> checkLogin(HttpSession session) {
    return session.getAttribute("user") != null
        ? ResponseEntity.ok().build()
        : ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
}

}