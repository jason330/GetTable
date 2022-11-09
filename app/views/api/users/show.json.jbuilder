json.user do
    json.extract! @user, :id, :email, :username, :created_at, :updated_at, :reservation_ids
end

json.reservations do
    @user.reservations.each do |reservation|
        json.set! reservation.id do
            json.extract! reservation, :id, :user_id, :restaurant_id, :reservation_date, :reservation_time, :party_size
        end
    end
end

json.restaurants do
    @user.reservations.each do |reservation|
        json.set! reservation.restaurant.id do
            json.extract! reservation.restaurant, :id, :name
        end
    end
end