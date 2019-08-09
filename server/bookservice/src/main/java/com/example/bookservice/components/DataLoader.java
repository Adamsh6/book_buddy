package com.example.bookservice.components;

import com.example.bookservice.models.Book;
import com.example.bookservice.models.Trade;
import com.example.bookservice.models.User;
import com.example.bookservice.repositories.BookRepository;
//import com.example.bookservice.repositories.TradeRepository;
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

//    @Autowired
//    TradeRepository tradeRepository;

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

        Book book1 = new Book("The Choice Factory", "Richard Shotton", "Business");
        bookRepository.save(book1);

        Book book2 = new Book("Investing", "Glen Arnold", "Finance");
        bookRepository.save(book2);

//        Trade trade1 = new Trade(True);
//        tradeRepository.save(trade1);
//
//        Trade trade2 = new Trade(True);
//        tradeRepository.save(trade2);


        }
}