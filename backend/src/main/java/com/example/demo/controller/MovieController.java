package com.example.demo.controller;

import com.example.demo.model.MyMovie;
import com.example.demo.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MovieController {

    @Autowired
    MovieRepository movieRepository;

    @GetMapping("/my_movies")
    public List<MyMovie> getMyMovies(){
        return movieRepository.findAll();
    }

    @PostMapping("/employees")
    public MyMovie addMovie(@RequestBody MyMovie movie){
        return movieRepository.save(movie);
    }

}
