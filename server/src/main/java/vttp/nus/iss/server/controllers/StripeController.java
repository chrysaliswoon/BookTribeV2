package vttp.nus.iss.server.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;

import vttp.nus.iss.server.models.CheckoutPayment;

@Controller
@RequestMapping(path = "/api")
@CrossOrigin(origins = "*")
public class StripeController {
    
    @Value("${STRIPE.SECRET.KEY}")
    private String stripeSecretKey;

    private String CLIENT_URL = "http://localhost:4200/";

    @PostMapping(path = "/payment", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public ResponseEntity<String> checkout(@RequestBody CheckoutPayment payment) throws StripeException{
        SessionCreateParams params =
          SessionCreateParams.builder()
            .setMode(SessionCreateParams.Mode.PAYMENT)
            .setSuccessUrl(CLIENT_URL + "/success")
            .setCancelUrl(CLIENT_URL + "/cancel")
            .addLineItem(
              SessionCreateParams.LineItem.builder()
                .setQuantity(1L)
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                .setPrice("{{PRICE_ID}}")
                .build())
            .build();
    
            Session session = Session.create(params);

    return new ResponseEntity<String>("Success", HttpStatus.OK);


    }





    
}
