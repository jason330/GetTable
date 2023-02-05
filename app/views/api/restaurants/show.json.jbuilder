json.restaurant do
    json.extract! @restaurant, :id, :name, :description, :location, :cuisine, :opening_hour, :closing_hour, :reservation_interval
    json.photoUrl @restaurant.photos[1].url
end

json.reports do
    @restaurant.reports.each do |report|
        json.set! report.id do
            json.reservation_date @restaurant.reservations[report.reservation_id].reservation_date
            json.extract! report,
                :id,
                :user_id,
                :restaurant_id,
                :reservation_id,
                :rating_overall,
                :rating_food,
                :rating_service,
                :rating_ambience,
                :review
        end
    end
end