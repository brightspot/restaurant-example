package com.brightspot.example.restaurant;

import java.util.Set;

import com.psddev.dari.db.Singleton;
import com.psddev.graphql.gca.GCAEndpoint;
import com.psddev.graphql.gca.GCASchemaSettings;

public class RestaurantEndpoint extends GCAEndpoint implements Singleton {

    @Override
    public Set<String> getPaths() {
        return Set.of("/gca");
    }

    @Override
    protected GCASchemaSettings getSchemaSettings() {
        return GCASchemaSettings.newBuilder()
            .readonlyEntryClass(Restaurant.class)
            .build();
    }
}
