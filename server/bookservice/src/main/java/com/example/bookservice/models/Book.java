package com.example.bookservice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;

import static com.sun.tools.doclint.Entity.trade;

@Entity
@Table(name="books")

public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "author")
    private String author;

    @Column(name = "genre")
    private String genre;

    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "book_trades",
            joinColumns = {@JoinColumn(name = "book_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="trade_id", nullable = false, updatable = false)}
    )


    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private Trade trade;

    public Book(String title, String author, String genre, User user) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.user = user;
        this.trade = null;

    }

    public Book() {
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Trade getTrade() {
        return trade;
    }

    public void setTrade(Trade trade) {
        this.trade = trade;
    }
}
