package vttp.nus.iss.server.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;

import jakarta.json.Json;

@Controller
@RequestMapping(path = "/api")
@CrossOrigin(origins = "*")
public class StripeController {

  @Value("${STRIPE.SECRET.KEY}")
  private String stripeSecretKey;

  @Value("${CLIENT.URL}")
  private String CLIENT_URL;

  @PostMapping(path = "/payment")
  public ResponseEntity<String> checkout() throws StripeException {

    System.out.println("Hitting Stripe");

    Stripe.apiKey = stripeSecretKey;

    SessionCreateParams.LineItem lineItem = SessionCreateParams.LineItem.builder().setPrice("price_1Myrw6BSvMyG6e5e4xk7Plrb")
        .setQuantity((long) 1).build();

    SessionCreateParams params = SessionCreateParams.builder().setMode(SessionCreateParams.Mode.PAYMENT)
        .setSuccessUrl(CLIENT_URL + "#/dashboard/success")
        .setCancelUrl(CLIENT_URL + "#/dashboard")
        .addLineItem(lineItem)
        .build();
    Session session = Session.create(params);

    return new ResponseEntity<String>(
        Json.createObjectBuilder().add("redirectURL", session.getUrl()).build().toString(), HttpStatus.OK);

  }

}
