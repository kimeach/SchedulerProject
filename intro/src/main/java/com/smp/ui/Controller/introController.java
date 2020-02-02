package com.smp.ui.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/intro")
public class introController {
	
	@GetMapping
	public ModelAndView getIntro() {
		return new ModelAndView("index");
	}
}
