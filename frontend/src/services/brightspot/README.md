# Brightspot service

The following instructions detail how to configure Brightspot so that it may be used as the backend service to power the frontend application.

## Running

Make sure Brightspot is running with the latest code and the CMS is accessible at `http://localhost/cms`.

## Verify Endpoint Configuration

Navigate to `Menu > Admin > APIs` and verify that the **Restaurant Endpoint** is present in the left rail.

## Create API Client Credentials.

Navigate to `Menu > Admin > APIs`. In the left rail, select **New API Client**, and fill out the required form fields:

- Fill out the **Name** field with any value you'd like to identify your credentials.
- In the **Endpoints** field, click **Add Item** and select **Restaurant Endpoint** from the dropdown.
- In the **Keys** field, click **Add API Key**.
- **Save** the client.
- Take note of the generated **Client ID** and **Client Secret (API Key)** values that were generated for use in the next step.

## Configure Frontend Environment Variables

In your code, ensure you have the file `frontend/.env` (not to be confused with the `.env` file present at the root of the repository). If not, you can create one by copying the template file at `frontend/.env.example`.

Edit the file to contain the correct Endpoint URL and Client ID and Client Secret values from the previous step.

```dotenv
VITE_GRAPHQL_ENDPOINT=http://localhost/gca
VITE_GRAPHQL_CLIENT_ID=<Your Client ID here>
VITE_GRAPHQL_CLIENT_SECRET=<Your Client Secret here>
```

Also, make sure you have set the service mode to `brightspot`, e.g.

```dotenv
VITE_SERVICE_TYPE=brightspot
```

## Verify Setup

Visit the frontend in your browser at `http://localhost:3000`. As you navigate the site, you should now see API calls in your web inspector being made from the frontend application to the Brightspot GraphQL API. You will still need to publish content for the various data models in your CMS to see live content showing up, but at a minimum the API requests should be succeeding. You can use the debugging tool in the bottom left corner of the site as another way to verify the setup is working as expected.
