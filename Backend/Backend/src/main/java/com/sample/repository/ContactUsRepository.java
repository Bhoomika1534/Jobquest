package com.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sample.entity.ContactUs;

@Repository
public interface ContactUsRepository extends JpaRepository<ContactUs, Long> {
}
