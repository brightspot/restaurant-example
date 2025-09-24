package com.brightspot.example.restaurant;

import java.util.List;

import com.psddev.cms.db.Content;
import com.psddev.dari.db.Singleton;

public class Menu extends Content implements Singleton {

    private List<MenuCategory> categories;

    public List<MenuCategory> getCategories() {
        return categories;
    }

    public void setCategories(List<MenuCategory> categories) {
        this.categories = categories;
    }
}
