package com.brightspot.example.restaurant;

import com.psddev.cms.db.Content;
import com.psddev.cms.db.ToolUi;
import com.psddev.dari.db.Recordable;
import com.psddev.dari.util.StorageItem;

@Recordable.PreviewField("image")
public class MenuItem extends Content {

    @Indexed
    private String name;

    private String description;

    private Float price;

    @Indexed
    private MenuCategory category;

    @ToolUi.CssClass("is-minimal")
    private boolean isSpecial;

    @ToolUi.CssClass("is-minimal")
    private boolean isVegetarian;

    @ToolUi.CssClass("is-minimal")
    private boolean isVegan;

    @ToolUi.CssClass("is-minimal")
    private boolean isGlutenFree;

    @ToolUi.CssClass("is-minimal")
    private boolean isUnavailable;

    private StorageItem image;

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

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public MenuCategory getCategory() {
        return category;
    }

    public void setCategory(MenuCategory category) {
        this.category = category;
    }

    public boolean isSpecial() {
        return isSpecial;
    }

    public void setSpecial(boolean special) {
        isSpecial = special;
    }

    public boolean isVegetarian() {
        return isVegetarian;
    }

    public void setVegetarian(boolean vegetarian) {
        isVegetarian = vegetarian;
    }

    public boolean isVegan() {
        return isVegan;
    }

    public void setVegan(boolean vegan) {
        isVegan = vegan;
    }

    public boolean isGlutenFree() {
        return isGlutenFree;
    }

    public void setGlutenFree(boolean glutenFree) {
        isGlutenFree = glutenFree;
    }

    public boolean isUnavailable() {
        return isUnavailable;
    }

    public void setUnavailable(boolean unavailable) {
        isUnavailable = unavailable;
    }

    public StorageItem getImage() {
        return image;
    }

    public void setImage(StorageItem image) {
        this.image = image;
    }
}
