class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.references :user, null: false, foreign_key: true
      t.references :restaurant, null: false, foreign_key: true
      t.string :reservation_date, null: false
      t.string :reservation_time, null: false
      t.integer :party_size, null: false

      t.timestamps
    end
  end
end