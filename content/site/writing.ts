export interface Article {
  title: string;
  summary: string;
  note: string;
  url: string;
  /** Display date. Leave empty to hide the date line. */
  date: string;
}

/** Newest first. */
export const articles: Article[] = [
  {
    title: "Configure SQL Storage for Standard Logic Apps",
    summary:
      "When to use SQL instead of Azure Storage for workflow state, and how to set it up in the portal.",
    note: "Preview feature at time of writing",
    url: "https://techcommunity.microsoft.com/blog/integrationsonazureblog/configure-sql-storage-for-standard-logic-apps/4421540",
    // TODO: add publish date.
    date: "",
  },
  {
    title: "Authenticate Standard Logic Apps using OAuth 2.0 Bearer Token",
    summary:
      "Authenticate without user input: generate a bearer token, parse it, and call a downstream API.",
    note: "Example API endpoints have since changed; the technique still applies",
    url: "https://techcommunity.microsoft.com/blog/IntegrationsonAzureBlog/authenticate-standard-logic-apps-using-oauth-2-0-bearer-token/3269576",
    // TODO: add publish date.
    date: "",
  },
  {
    title: "Create a Custom Connector for Logic Apps using the Azure portal",
    summary:
      "Building a Logic Apps custom connector in the portal, among the other approaches (CLI, Postman collection, OpenAPI).",
    note: "Portal steps may have changed since publication",
    url: "https://techcommunity.microsoft.com/blog/integrationsonazureblog/create-a-custom-connector-for-logic-apps-using-the-azure-portal/2887879",
    // TODO: confirm. Taken from the page's last-modified date, not a confirmed publish date.
    date: "Oct 2021",
  },
];
