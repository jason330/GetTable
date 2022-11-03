# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Restaurant.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('restaurants')

    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'Demo-lition', 
      email: 'demo@user.io', 
      password: 'password'
    )
  
    # More users
    10.times do 
      User.create!({
        username: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end
  
    puts "Done!"

    puts "Creating restaurants..."

    20.times do 
      Restaurant.create!({
        name: Faker::Restaurant.name,
        description: Faker::Restaurant.description,
        location: ['San Francisco', 'Oakland', 'San Jose', 'Marin', 'San Mateo', 'Walnut Creek'].sample,
        cuisine: Faker::Restaurant.type,
        opening_hour: [11, 12, 4, 5].sample,
        closing_hour: [9, 10, 11, 12].sample,
        reservation_interval: [15, 30].sample
      }) 
    end

    puts "Done!"
end