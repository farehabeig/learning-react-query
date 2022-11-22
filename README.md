This project is a step by step copy of the React Query explanation by the Codevolution

### Complete Code GitHub Repo

("https://github.com/gopinav/React-Query-Tutorials")

#### Learnings

-   An api response is cached for 5 mins with the provided id and key (given in the reactQuery hook) as unique identifiers

-   however, if a change is made to the response from the api, the reactQuery provide as 'is Fetching' key that determines that a refreshed api call has been sent to fetch, the latest data.

-   when a api is fetched, the state is marked as freshed, but if we set stale time, if will remain fresh till that amount of time, and then it ll be marked as stale, and new data will be loaded on switching route.
