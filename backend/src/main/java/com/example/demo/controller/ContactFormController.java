package com.example.demo.controller;

import com.example.demo.model.ContactForm;
import com.example.demo.model.MyMovie;
import com.example.demo.repository.ContactFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ContactFormController {

    @Autowired
    ContactFormRepository contactFormRepository;

    @GetMapping("/contactForms")
    List<ContactForm> getContactForms(){
        return contactFormRepository.findAll();
    }

    @PostMapping("/contactForms")
    public ContactForm addContactForm(@RequestBody ContactForm contactForm){
        return contactFormRepository.save(contactForm);
    }
}
