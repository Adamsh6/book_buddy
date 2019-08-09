package com.example.bookservice.models;

import javax.persistence.*;

@Entity
@Table(name="trades")

public class Trade {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "trade")
    private Boolean completed;

    public Trade(long id) {
        this.id = id;
        this.completed = false;
    }

    public Trade() {
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
}
