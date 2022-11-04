@restaurants.each do |restaurant|
    json.set! restaurant.id do
        json.extract! restaurant, :id, :name, :description, :location, :cuisine, :opening_hour, :closing_hour, :reservation_interval
        # json.photoUrl restaurant.photo.url
    end
end