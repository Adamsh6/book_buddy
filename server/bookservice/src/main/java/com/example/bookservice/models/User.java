package com.example.bookservice.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name= "users")

public class User {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
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
