package com.example.demo.model;

import org.hibernate.annotations.Table;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(appliesTo = "my_movies")
public class MyMovie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String movieApiId;

    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private java.util.Date dateTimeAdded;

    @Column
    private String status;

    @Column
    private int rating;

    public MyMovie(){

    }

    public MyMovie(Long id, String movieId, Date dateTimeAdded, String status, int rating) {
        this.id = id;
        this.movieApiId = movieId;
        this.dateTimeAdded = dateTimeAdded;
        this.status = status;
        this.rating = rating;
    }

    public Long getId() {
        return id;
    }

    public String getMovieId() {
        return movieApiId;
    }

    public void setMovieId(String movieId) {
        this.movieApiId = movieId;
    }

    public Date getDateTimeAdded() {
        return dateTimeAdded;
    }

    public void setDateTimeAdded(Date dateTimeAdded) {
        this.dateTimeAdded = dateTimeAdded;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
