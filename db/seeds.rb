require 'open-uri'


User.destroy_all

User.create!([{first_name: "Jon", last_name: "Snow", email: "JonSnow@starks.com", password: "gameofthrones", birth_date: DateTime.new(1990-05-26)},
             {first_name: "Ned", last_name: "Stark", email: "NedStark@starks.com", password: "gameofthrones", birth_date: DateTime.new(1965-02-16)},
             {first_name: "Jamie", last_name: "Lannister", email: "JamieLannister@lannisters.com", password: "gameofthrones", birth_date: DateTime.new(1980-06-12)},
             {first_name: "Sansa", last_name: "Stark", email: "SansaStark@starks.com", password: "gameofthrones", birth_date: DateTime.new(1992-5-26)}])

user1 = User.all[0];
user2 = User.all[1];
user3 = User.all[2];
user4 = User.all[3];

file1 = open('https://s3.amazonaws.com/airgot-dev/images/jon-snow.jpg')
file2 = open('https://s3.amazonaws.com/airgot-dev/images/ned-stark.jpg')
file3 = open('https://s3.amazonaws.com/airgot-dev/images/jamie-lannister.jpg')
file4 = open('https://s3.amazonaws.com/airgot-dev/images/sansa-stark.jpg')


user1.profile_photo.attach(io:file1, filename: 'jon-snow.jpg')
user2.profile_photo.attach(io:file2, filename: 'ned-stark.jpg')
user3.profile_photo.attach(io:file3, filename: 'jamie-lannister.jpg')
user4.profile_photo.attach(io:file4, filename: 'sansa-stark.jpg')




Spot.create!([{lat: 40.7829, lng: -73.9654, address: "123 Kingsroad",city: "Winterfell", state: "Westeros", zipcode: 10001, title: "Beatiful home on the outskirts of Winterfell.", description: "This home was built by the early targarians when the MadKing was still ruling. Our family has resided here for 100's of years. Located right on Kingsroad where you are sure to meet some interesting characters.", allegiance: "Starks", danger_rating: 4, house_type: "colonial", max_occupants: 5, price: 139, number_of_bedrooms: 3, number_of_beds: 4, number_of_bathrooms: 2, square_foot: 4000},
              {lat: 40.655603, lng: -73.984931, address: "10 Godsway",city: "Vaes Dothrak", state: "Essos", zipcode: 10001, title: "Great location right in the heart of Dothraki territory.", description: "This home was stood the test of time. The Dothraki often venture here and even Sir Jorah Mormont has stayed here. We take a lot of pride in this location.", allegiance: "Dothraki", danger_rating: 7, house_type: "colonial", max_occupants: 8, price: 224, number_of_bedrooms: 5, number_of_beds: 8, number_of_bathrooms: 2, square_foot: 5200},
              {lat: 40.775603, lng: -73.884931, address: "65 Roseroad",city: "Kings Landing", state: "Westeros", zipcode: 10001, title: "Highend mansion in the ritzy part of King's Landing", description: "If you want to show off your wealth there isn't a better place to do it. This mansion has everything you could imagine and is located right next to the iron throne.", allegiance: "Lannisters", danger_rating: 1, house_type: "mansion", max_occupants: 20, price: 2524, number_of_bedrooms: 15, number_of_beds: 20, number_of_bathrooms: 8, square_foot: 18200},
              {lat: 40.745603, lng: -73.9584931, address: "145 River Road",city: "Riverrun", state: "Westeros", zipcode: 10001, title: "Nice cozy location in riverrun.", description: "Rumors are that this is where Ned Stark and Catelyn Stark first met. Come here to kick up the romance or take in the beatiful surroundings.", allegiance: "Starks", danger_rating: 5, house_type: "cottage", max_occupants: 2, price: 98, number_of_bedrooms: 1, number_of_beds: 1, number_of_bathrooms: 1, square_foot: 2000},
              {lat: 40.825603, lng: -73.9584931, address: "2 Dragonstone Road",city: "Dragonstone", state: "Westeros", zipcode: 10001, title: "Amazing vacation spot on the island of Dragonstone.", description: "Located on Dragonstone island. It might be a treck to get here but it is well worth it. Come experience a trip you wiill never forget", allegiance: "Baratheons", danger_rating: 2, house_type: "colonial", max_occupants: 4, price: 320, number_of_bedrooms: 4, number_of_beds: 4, number_of_bathrooms: 2, square_foot: 4200}
            ])
              # {lat: 40.755603,lng: -73.984931, address: "10 Godsway",city: "Vaes Dothrak", state: "Essos", zipcode: 10001, title: "Great location right in the heart of Dothraki territory.", description: "This home was stood the test of time. The Dothraki often venture here and even Sir Jorah Mormont has stayed here. We take a lot of pride in this location.", allegiance: "Dothraki", danger_rating: 7, house_type: "colonial", max_occupants: 8, price: 224, number_of_bedrooms: 5, number_of_beds: 8, number_of_bathrooms: 2, square_foot: 5200},
              # {lat: 40.755603,lng: -73.984931, address: "10 Godsway",city: "Vaes Dothrak", state: "Essos", zipcode: 10001, title: "Great location right in the heart of Dothraki territory.", description: "This home was stood the test of time. The Dothraki often venture here and even Sir Jorah Mormont has stayed here. We take a lot of pride in this location.", allegiance: "Dothraki", danger_rating: 7, house_type: "colonial", max_occupants: 8, price: 224, number_of_bedrooms: 5, number_of_beds: 8, number_of_bathrooms: 2, square_foot: 5200},
              # {lat: 40.755603,lng: -73.984931, address: "10 Godsway",city: "Vaes Dothrak", state: "Essos", zipcode: 10001, title: "Great location right in the heart of Dothraki territory.", description: "This home was stood the test of time. The Dothraki often venture here and even Sir Jorah Mormont has stayed here. We take a lot of pride in this location.", allegiance: "Dothraki", danger_rating: 7, house_type: "colonial", max_occupants: 8, price: 224, number_of_bedrooms: 5, number_of_beds: 8, number_of_bathrooms: 2, square_foot: 5200},
              # {lat: 40.755603,lng: -73.984931, address: "10 Godsway",city: "Vaes Dothrak", state: "Essos", zipcode: 10001, title: "Great location right in the heart of Dothraki territory.", description: "This home was stood the test of time. The Dothraki often venture here and even Sir Jorah Mormont has stayed here. We take a lot of pride in this location.", allegiance: "Dothraki", danger_rating: 7, house_type: "colonial", max_occupants: 8, price: 224, number_of_bedrooms: 5, number_of_beds: 8, number_of_bathrooms: 2, square_foot: 5200},
              # {lat: 40.755603,lng: -73.984931, address: "10 Godsway",city: "Vaes Dothrak", state: "Essos", zipcode: 10001, title: "Great location right in the heart of Dothraki territory.", description: "This home was stood the test of time. The Dothraki often venture here and even Sir Jorah Mormont has stayed here. We take a lot of pride in this location.", allegiance: "Dothraki", danger_rating: 7, house_type: "colonial", max_occupants: 8, price: 224, number_of_bedrooms: 5, number_of_beds: 8, number_of_bathrooms: 2, square_foot: 5200},