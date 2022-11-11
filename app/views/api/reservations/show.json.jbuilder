json.reservation do
    json.extract! @reservation, :id, :user_id, :restaurant_id, :reservation_date, :reservation_time, :party_size
end

json.restaurant do
    json.extract! @reservation.restaurant, :id, :name, :description, :location, :cuisine, :opening_hour, :closing_hour, :reservation_interval
    json.photoUrl @reservation.restaurant.photos[0].url
end