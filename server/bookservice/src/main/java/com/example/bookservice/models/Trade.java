package com.example.bookservice.models;

import javax.persistence.*;

@Entity
@Table(name="trades")

public class Trade {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "trade")
    private Boolean completed;

    @ManyToOne
    @JoinColumn(name = "user1_id", nullable = false)
    private User user1;

    @ManyToOne
    @JoinColumn(name = "user2_id", nullable = true)
    private User user2;

    @ManyToOne
    @JoinColumn(name = "book1_id", nullable = false)
    private Book book1;

    @ManyToOne
    @JoinColumn(name = "book2_id", nullable = true)
    private Book book2;


    public Trade(User user, Book book) {
        this.completed = false;
        this.user1 = user;
        this.user2 = null;
        this.book1 = book;
        this.book2 = null;
    }

    public Trade() {
        this.completed = false;
    }

    public User getUser1() {
        return user1;
    }

    public void setUser1(User user1) {
        this.user1 = user1;
    }

    public User getUser2() {
        return user2;
    }

    public void setUser2(User user2) {
        this.user2 = user2;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Boolean getCompleted() {
        return completed;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }

    public Book getBook1() {
        return book1;
    }

    public void setBook1(Book book1) {
        this.book1 = book1;
    }

    public Book getBook2() {
        return book2;
    }

    public void setBook2(Book book2) {
        this.book2 = book2;
    }
}
