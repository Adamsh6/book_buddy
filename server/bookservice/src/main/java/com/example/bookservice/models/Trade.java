package com.example.bookservice.models;

public class Trade {

    private long id;
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
