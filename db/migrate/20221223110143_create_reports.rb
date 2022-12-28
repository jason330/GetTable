class CreateReports < ActiveRecord::Migration[7.0]
  def change
    create_table :reports do |t|
      t.references :user, null: false, foreign_key: true, index: false
      t.references :restaurant, null: false, foreign_key: true
      t.references :reservation, null: false, foreign_key: true, index: false
      t.integer :rating_overall
      t.integer :rating_food
      t.integer :rating_service
      t.integer :rating_ambience
      t.text :review

      t.timestamps
    end
  end
end