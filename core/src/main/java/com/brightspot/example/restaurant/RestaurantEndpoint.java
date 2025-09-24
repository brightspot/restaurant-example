package com.brightspot.example.restaurant;

import java.util.Set;

import com.psddev.dari.db.Singleton;
import com.psddev.graphql.GraphQLCorsConfiguration;
import com.psddev.graphql.gca.GCAEndpoint;
import com.psddev.graphql.gca.GCASchemaSettings;
import com.psddev.graphql.gca.schema.types.db.write.save.SaveActionDefinition;

public class RestaurantEndpoint extends GCAEndpoint implements Singleton {

    @Override
    public Set<String> getPaths() {
        return Set.of("/gca");
    }

    @Override
    protected GCASchemaSettings getSchemaSettings() {
        return GCASchemaSettings.newBuilder()
            .readonlyEntryClasses(
                Restaurant.class,
                RestaurantLocation.class,
                Menu.class,
                MenuCategory.class,
                MenuItem.class
            )

            .mutableEntryClass(Reservation.class)
            .contentActionType(SaveActionDefinition.class)

            .fieldFilter(field -> field.getParentType() != null)

            .build();
    }

    @Override
    protected void updateCorsConfiguration(GraphQLCorsConfiguration corsConfiguration) {
        super.updateCorsConfiguration(corsConfiguration);

        corsConfiguration.addAllowedOrigin("localhost");
    }
}
