package com.example.gym.web;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.ServletWebRequest;

import java.util.Map;

/**
 * Basic /error handler that returns a friendly JSON message for common errors.
 */
@Controller
public class AppErrorController implements ErrorController {

    private final ErrorAttributes errorAttributes;

    public AppErrorController(ErrorAttributes errorAttributes) {
        this.errorAttributes = errorAttributes;
    }

    @RequestMapping("/error")
    public ResponseEntity<Map<String, Object>> handleError(HttpServletRequest request) {
        HttpStatus status = getStatus(request);
        Map<String, Object> body = errorAttributes.getErrorAttributes(new ServletWebRequest(request),
                ErrorAttributeOptions.of(ErrorAttributeOptions.Include.MESSAGE));
        body.put("message", friendlyMessage(status));
        return new ResponseEntity<>(body, status);
    }

    private HttpStatus getStatus(HttpServletRequest request) {
        Object statusCode = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
        if (statusCode == null) {
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        try {
            return HttpStatus.valueOf(Integer.parseInt(statusCode.toString()));
        } catch (Exception ex) {
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
    }

    private String friendlyMessage(HttpStatus status) {
        return switch (status) {
            case NOT_FOUND -> "Resource not found";
            case INTERNAL_SERVER_ERROR -> "Internal server error";
            default -> "Unexpected error";
        };
    }
}
