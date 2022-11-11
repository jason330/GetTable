json.extract! @restaurant, :id, :name, :description, :location, :cuisine, :opening_hour, :closing_hour, :reservation_interval
json.photoUrl @restaurant.photos[1].url