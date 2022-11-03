class Restaurant < ApplicationRecord

    validates :name, :description, :location, :cuisine, :opening_hour, :closing_hour, :reservation_interval, presence: true

end
