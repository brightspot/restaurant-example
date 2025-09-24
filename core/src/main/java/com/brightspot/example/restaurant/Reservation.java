package com.brightspot.example.restaurant;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalTime;

import com.psddev.cms.db.Content;
import com.psddev.cms.db.ToolUi;

public class Reservation extends Content {

    @Required
    private String customerName;

    @Required
    @Indexed
    private String customerEmail;

    @Required
    private String customerPhone;

    @Required
    @Indexed
    @ToolUi.CssClass("is-minimal")
    private LocalDate reservationDate;

    @Required
    @Indexed
    @ToolUi.CssClass("is-minimal")
    private LocalTime reservationTime;

    @Required
    private Integer partySize;

    @Required
    @Indexed
    private RestaurantLocation location;

    private String specialRequests;

    @Required
    @Indexed
    private ReservationStatus status;

    @Required
    @Indexed
    private Instant createdDate;

    private String confirmationNumber;

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    public String getCustomerPhone() {
        return customerPhone;
    }

    public void setCustomerPhone(String customerPhone) {
        this.customerPhone = customerPhone;
    }

    public LocalDate getReservationDate() {
        return reservationDate;
    }

    public void setReservationDate(LocalDate reservationDate) {
        this.reservationDate = reservationDate;
    }

    public LocalTime getReservationTime() {
        return reservationTime;
    }

    public void setReservationTime(LocalTime reservationTime) {
        this.reservationTime = reservationTime;
    }

    public Integer getPartySize() {
        return partySize;
    }

    public void setPartySize(Integer partySize) {
        this.partySize = partySize;
    }

    public RestaurantLocation getLocation() {
        return location;
    }

    public void setLocation(RestaurantLocation location) {
        this.location = location;
    }

    public String getSpecialRequests() {
        return specialRequests;
    }

    public void setSpecialRequests(String specialRequests) {
        this.specialRequests = specialRequests;
    }

    public ReservationStatus getStatus() {
        return status;
    }

    public void setStatus(ReservationStatus status) {
        this.status = status;
    }

    public Instant getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Instant createdDate) {
        this.createdDate = createdDate;
    }

    public String getConfirmationNumber() {
        return confirmationNumber;
    }

    public void setConfirmationNumber(String confirmationNumber) {
        this.confirmationNumber = confirmationNumber;
    }
}
