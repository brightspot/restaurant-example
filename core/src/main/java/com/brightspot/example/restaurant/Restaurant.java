package com.brightspot.example.restaurant;

import com.psddev.cms.db.Content;
import com.psddev.dari.db.Singleton;

public class Restaurant extends Content implements Singleton {

    private String name;
    private String description;
    private String email;
    private String website;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }
}
