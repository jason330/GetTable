class Reservation < ApplicationRecord

  validates :user_id, :restaurant_id, :reservation_date, :reservation_time, :party_size, presence: true
  
  belongs_to :user
  belongs_to :restaurant
  has_one :report
end