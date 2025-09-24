package com.brightspot.example.restaurant;

import java.util.List;

import com.psddev.cms.db.Content;
import com.psddev.dari.db.Query;

public class MenuCategory extends Content {

    private String name;
    private String description;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Ignored(false)
    public List<MenuItem> getMenuItems() {
        return Query.from(MenuItem.class)
            .where("category = ?", this)
            .selectAll();
    }
}
