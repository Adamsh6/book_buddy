package com.example.bookservice.projections;

import com.example.bookservice.models.Book;
import com.example.bookservice.models.Trade;
import com.example.bookservice.models.User;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;


@Projection(name = "embedBooks", types = User.class)
public interface EmbedBooks {

        long getId();
        String getName();
        List<Book> getBooks();
        List<Trade> getTrades();
        List<String> getWishlist();


}

