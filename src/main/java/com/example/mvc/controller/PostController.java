package com.example.mvc.controller;

import com.example.mvc.model.Post;
import com.example.mvc.repository.PostRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5500", allowCredentials = "true")
@RestController
@RequestMapping("/api/posts")
public class PostController {

    @Autowired
    private PostRepository postRepository;

    @GetMapping
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @PostMapping
    public String addPost(@RequestBody Post post, HttpSession session) {
        if (session.getAttribute("user") != null) {
            postRepository.save(post);
            return "Post added";
        }
        return "Unauthorized";
    }

    @DeleteMapping("/{id}")
    public String deletePost(@PathVariable Long id, HttpSession session) {
        if (session.getAttribute("user") != null) {
            postRepository.deleteById(id);
            return "Post deleted";
        }
        return "Unauthorized";
    }
}