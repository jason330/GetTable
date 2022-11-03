class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :location, null: false
      t.string :cuisine, null: false
      t.string :days_open, null: false
      t.integer :opening_hour, null: false
      t.integer :closing_hour, null: false
      t.integer :reservation_interval, null: false
      t.integer :tables_per_time, null: false

      t.timestamps
    end
    add_index :restaurants, :name
    add_index :restaurants, :location
    add_index :restaurants, :cuisine
  end
end