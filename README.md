# GetTable

GetTable is a clone of OpenTable, a site where users can find information about restaurants and make reservations. 

Live link: https://get-table.onrender.com/

## Technologies used

- React JavaScript library for front-end UI
- Redux JavaScript library for state management
- Rails backend
- PostgreSQL database
- AWS S3 for storing seed images

## Feature in depth

GetTable users can modify their reservations, either immediately after booking, by clicking on the 'Modify' link, or by clicking on the reservation from the user's 'My Reservations' page, which will take the user to the reservation details. 

This navigation to the Modify Reservation page causes a reset of the Redux state, so the reservation ID is retrieved from the URL with `useParams()` to begin the process of reloading the state. The `fetchReservation(reservationId)` thunk action creator is called inside a `useEffect()` hook, which makes an async fetch request to the Rails backend.

In addition to the reservation information, the restaurant information is also retrieved using the `belongs_to` association, and this combined reservation and restaurant information is structured in a Jbuilder view before being sent in the response.

The `getReservation` action is then dispatched, and both the `reservationReducer` and `restaurantReducer` respond, updating their respective slices of state. Finally, the component can be rendered with the user's existing reservation information above the Reservation Update Form. The latter Update Form component receives both the `reservation` and `restaurant` as props so that the form can be prefilled with the user's previously selected choices before modifying the reservation.

## Future Features

- Search based on location, restaurant, or cuisine
- Reviews