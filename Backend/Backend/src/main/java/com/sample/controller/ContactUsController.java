package com.sample.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sample.entity.ContactUs;
import com.sample.service.ContactUsService;


@RestController
@CrossOrigin(origins="*")

public class ContactUsController {
    
    @Autowired
    private ContactUsService contactService;

    @PostMapping("/addcontact")
    public String addcontact(@RequestBody ContactUs contacts){
        return contactService.savecontact(contacts);
    }

    @PutMapping("/updatecontact")
    public String putcontact(@RequestBody ContactUs contacts){
        return contactService.updatecontact(contacts);
    }

    @GetMapping("/getcontact")
    public List<ContactUs> fetchcontact(){
        return contactService.getcontact();

    }

    @DeleteMapping("/deletecontact/{id}")
    public String removecontact(@PathVariable Long id){
        return contactService.deletecontact(id);
    }
}
