json.reservation_date @report.reservation.reservation_date
json.extract! @report,
    :id,
    :user_id,
    :restaurant_id,
    :reservation_id,
    :rating_overall,
    :rating_food,
    :rating_service,
    :rating_ambience,
    :review

json.username @report.user.username