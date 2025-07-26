package com.example.gym.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Forwards any unmapped paths (except those containing a period) to the
 * application index.html so that Angular can handle the routing.
 */
@Controller
public class SpaForwardingController {
    @RequestMapping(value = {"/{path:[^\\.]*}", "/**/{path:[^\\.]*}"})
    public String forward() {
        return "forward:/index.html";
    }
}
