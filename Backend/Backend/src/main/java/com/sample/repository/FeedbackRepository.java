package com.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.entity.Feedback;


public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

}