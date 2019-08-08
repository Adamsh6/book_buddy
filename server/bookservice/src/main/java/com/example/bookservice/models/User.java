package com.example.bookservice.models;

import java.util.List;

public class User {

    private Long id;
    private String name;
//    private List<Book> books;
//    private List<Trade> trades;
//    private List<TradeHistory> tradesHistory;



    public User(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
