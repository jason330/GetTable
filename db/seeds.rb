require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Restaurant.destroy_all
    Report.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('restaurants')
    ApplicationRecord.connection.reset_pk_sequence!('reports')

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

    largeImageArray = [
      "https://gettableproject.s3.us-west-1.amazonaws.com/scarpetta.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/akikos.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/coldDrinks.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/cafeJuanita.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/palmCourt.png",
      "https://gettableproject.s3.us-west-1.amazonaws.com/star.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/stFrancis.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/vaultGarden.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/okane.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/membersOnly.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/steak.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/heroicItalian.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/toro.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/canela.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/mockingbird.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/aCote.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/barcha.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/lola.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/maybecks.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/littleOwl.jpeg"
    ]

    smallImageArray = [
      "https://gettableproject.s3.us-west-1.amazonaws.com/scarpettaSmall.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/akikosSmall.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/coldDrinksSmall.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/cafeJuanitaSmall.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/palmCourtSmall.png",
      "https://gettableproject.s3.us-west-1.amazonaws.com/starSmall.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/stFrancisSmall.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/vaultGardenSmall.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/okaneSmall.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/membersOnlySmall.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/steakSmall.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/heroicItalianSmall.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/toroSmall.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/canelaSmall.jpeg",      
      "https://gettableproject.s3.us-west-1.amazonaws.com/mockingbirdSmall.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/aCoteSmall.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/barchaSmall.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/lolaSmall.jpeg",      
      "https://gettableproject.s3.us-west-1.amazonaws.com/maybecksSmall.jpeg",
      "https://gettableproject.s3.us-west-1.amazonaws.com/littleOwlSmall.jpeg"
    ]

    Restaurant.all.each_with_index do |restaurant, ind|
      small = URI.open(smallImageArray[ind])
      large = URI.open(largeImageArray[ind])
      restaurant.photos.attach(io: small, filename: "small#{ind}")
      restaurant.photos.attach(io: large, filename: "large#{ind}")
    end
    # picRestaurant = Restaurant.create!({
    #     name: Faker::Restaurant.name,
    #     description: Faker::Restaurant.description,
    #     location: ['San Francisco', 'Oakland', 'San Jose', 'Marin', 'San Mateo', 'Walnut Creek'].sample,
    #     cuisine: Faker::Restaurant.type,
    #     opening_hour: [11, 12, 4, 5].sample,
    #     closing_hour: [9, 10, 11, 12].sample,
    #     reservation_interval: [15, 30].sample,
    #   })
      # file = URI.open("https://gettableproject.s3.us-west-1.amazonaws.com/steak.jpeg")
      # picRestaurant.photo.attach(io: file, filename: "default")
      
    puts "Done!"