package com.smp.ui;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/schedule")
public class scheduleController {

	@GetMapping
	public ModelAndView getSchedule() {
		return new ModelAndView("scheduleIndex");
	}
	
}
