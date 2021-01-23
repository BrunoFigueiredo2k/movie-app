package com.example.demo.repository;

import com.example.demo.model.MyMovie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends JpaRepository<MyMovie, Long> {

}
