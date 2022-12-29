class Restaurant < ApplicationRecord

    validates :name, :description, :location, :cuisine, :opening_hour, :closing_hour, :reservation_interval, presence: true

    has_many :reservations
    has_many :reports
    
    has_many_attached :photos
end
