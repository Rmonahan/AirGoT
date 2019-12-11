# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create!([{first_name: "Jon", last_name: "Snow", email: "Johnsnow@starks.com", password: "gameofthrones", birth_date: DateTime.new(1990-05-26)},
             {first_name: "Ned", last_name: "Stark", email: "Nedstark@starks.com", password: "gameofthrones", birth_date: DateTime.new(1965-02-16)},
             {first_name: "Jamie", last_name: "Lannister", email: "JamieLannister@lannisters.com", password: "gameofthrones", birth_date: DateTime.new(1980-06-12)}])