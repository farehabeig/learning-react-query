This project is a step by step copy of the React Query explanation by the Codevolution

### Complete Code GitHub Repo

("https://github.com/gopinav/React-Query-Tutorials")

#### Learnings

##### Fetching data on component load

-   An api response is cached for 5 mins with the provided id and key (given in the reactQuery hook) as unique identifiers

-   however, if a change is made to the response from the api, the reactQuery provide as 'is Fetching' key that determines that a refreshed api call has been sent to fetch, the latest data.

-   when a api is fetched, the state is marked as freshed, but if we set stale time, if will remain fresh till that amount of time, and then it ll be marked as stale, and new data will be loaded on switching route.

-   polling : fetching data on regular intervals in order to sync the UI with the remote date. (refetchInterval) - by default it is set to false. We can set time in milliseconds. The polling stops once the focus is loosed(switching to another route). If we wish to poll the data, even in background, we need to add a flag, (refetchIntervalInBackground) to true.

##### Fetching data on user event (like clicking)

-   when the user performs an event, we need to pass a flag (enabled) set to false, so the api would not run when the component is loaded.

-   In order to call a api, when user performs a action, we know that the useQuery return a function called refetch, to call api. We need to pass this function in the button on click.
