package com.example.bookservice.components;

import com.example.bookservice.models.Book;
import com.example.bookservice.models.Trade;
import com.example.bookservice.models.User;
import com.example.bookservice.repositories.BookRepository;
import com.example.bookservice.repositories.TradeRepository;
import com.example.bookservice.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    BookRepository bookRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    TradeRepository tradeRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {
        DateFormat sfd = new SimpleDateFormat("dd-MM-yy");
        String newDate = "24-07-2018";
        Date date = null;
        try {
        date = sfd.parse(newDate);
        } catch (ParseException e) {
        e.printStackTrace();
        }

        User user1 = new User("William");
        userRepository.save(user1);



        User user2 = new User("Susan");
        userRepository.save(user2);

        Book book1 = new Book("The Choice Factory", "Richard Shotton", "Business", user1);
//        book1.setTrade(trade1);
        bookRepository.save(book1);

        Book book2 = new Book("Investing", "Glen Arnold", "Finance", user1);
        bookRepository.save(book2);

        Book book3 = new Book("Social Ventures", "Yunus Mohammed", "Buisness", user1);
        bookRepository.save(book3);

        Book book4 = new Book("Thinking Fast and Slow", "Daniel Kannemann", "Buisness", user2);
        bookRepository.save(book4);

        Trade trade1 = new Trade(user1, book1);

        trade1.setUser2(user2);
        tradeRepository.save(trade1);


        Trade trade2 = new Trade(user2, book4);
        tradeRepository.save(trade2);


        }
}