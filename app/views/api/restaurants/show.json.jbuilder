json.restaurant do
    json.extract! @restaurant, :id, :name, :description, :location, :cuisine, :opening_hour, :closing_hour, :reservation_interval
    json.photoUrl @restaurant.photos[1].url
end
puts '@restaurant.reports is ', @restaurant.reports
puts '@restaurant.reservations is ',@restaurant.reservations
json.reports do
    @restaurant.reports.each do |report|
        puts 'report is ',report
        puts 'report.id is ',report.id
        puts 'report.reservation_id is ',report.reservation_id
        json.set! report.id do
            json.reservation_date @restaurant.reservations.select {|res| res.id == report.reservation_id}[0].reservation_date
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