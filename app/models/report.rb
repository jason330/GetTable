class Report < ApplicationRecord
  
  validates :user_id, :restaurant_id, :reservation_id, presence: true

  belongs_to :user
  belongs_to :restaurant
  belongs_to :reservation
end
