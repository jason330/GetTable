class Report < ApplicationRecord
  
  validates :user_id, :restaurant_id, :reservation_id, presence: true
  validates :user_id, uniqueness: { scope: :reservation_id,
    message: "Only one review can be posted for each reservation." }
    
  belongs_to :user
  belongs_to :restaurant
  belongs_to :reservation
end