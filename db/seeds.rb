# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create!([{first_name: "Jon", last_name: "Snow", email: "JonSnow@starks.com", password: "gameofthrones", birth_date: DateTime.new(1990-05-26)},
             {first_name: "Ned", last_name: "Stark", email: "NedStark@starks.com", password: "gameofthrones", birth_date: DateTime.new(1965-02-16)},
             {first_name: "Jamie", last_name: "Lannister", email: "JamieLannister@lannisters.com", password: "gameofthrones", birth_date: DateTime.new(1980-06-12)},
             {first_name: "Sansa", last_name: "Stark", email: "SansaStark@starks.com", password: "gameofthrones", birth_date: DateTime.new(1992-5-26)}])

# user1 = User.first
# user2 = User.all[1]
# user3 = User.all[2]
# user4 = User.all[3]

# file1 = File.open('app/assets/images/jon-snow.jpg')
# file2 = File.open('app/assets/images/ned-stark.jpg')
# file3 = File.open('app/assets/images/jamie-lannister.jpg')
# file4 = File.open('app/assets/images/sansa-stark.jpg')

# user1.photo.attach(file1)
# user2.photo.attach(file2)
# user3.photo.attach(file3)
# user4.photo.attach(file4)