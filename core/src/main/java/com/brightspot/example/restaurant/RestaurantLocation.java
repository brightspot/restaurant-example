package com.brightspot.example.restaurant;

import com.psddev.cms.db.Content;
import com.psddev.dari.util.StorageItem;

public class RestaurantLocation extends Content {

    @Indexed
    @Required
    private String name;
    private String address;
    private String phoneNumber;
    private String openHours;
    private String parkingInfo;
    private String accessibilityInfo;
    private boolean isMainLocation;
    private StorageItem image;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getOpenHours() {
        return openHours;
    }

    public void setOpenHours(String openHours) {
        this.openHours = openHours;
    }

    public String getParkingInfo() {
        return parkingInfo;
    }

    public void setParkingInfo(String parkingInfo) {
        this.parkingInfo = parkingInfo;
    }

    public String getAccessibilityInfo() {
        return accessibilityInfo;
    }

    public void setAccessibilityInfo(String accessibilityInfo) {
        this.accessibilityInfo = accessibilityInfo;
    }

    public boolean isMainLocation() {
        return isMainLocation;
    }

    public void setMainLocation(boolean mainLocation) {
        isMainLocation = mainLocation;
    }

    public StorageItem getImage() {
        return image;
    }

    public void setImage(StorageItem image) {
        this.image = image;
    }
}
