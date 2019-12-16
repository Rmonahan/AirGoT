require 'open-uri'


User.destroy_all
Spot.destroy_all

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




Spot.create!([{lat: 40.7829, lng: -73.9654, address: "123 Kingsroad",city: "Winterfell", state: "Westeros", zipcode: 10001, title: "Beatiful home on the outskirts of Winterfell.", description: "This home was built by the early Targarians when the MadKing was still ruling. Our family has resided here for 100's of years. Located right on Kingsroad where you are sure to meet some interesting characters.", allegiance: "Starks", danger_rating: 4.67, house_type: "Colonial", max_occupants: 5, price: 139, number_of_bedrooms: 3, number_of_beds: 4, number_of_bathrooms: 2, square_foot: 4000, host_id: user1.id},
              {lat: 40.655603, lng: -73.984931, address: "10 Godsway",city: "Vaes Dothrak", state: "Essos", zipcode: 10001, title: "Great location right in the heart of Dothraki territory.", description: "This home has stood the test of time. The Dothraki often venture here and even Sir Jorah Mormont has stayed here. We take a lot of pride in this location.", allegiance: "Dothraki", danger_rating: 7.32, house_type: "Colonial", max_occupants: 8, price: 224, number_of_bedrooms: 5, number_of_beds: 8, number_of_bathrooms: 2, square_foot: 5200, host_id: user2.id},
              {lat: 40.775603, lng: -73.884931, address: "65 Roseroad",city: "Kings Landing", state: "Westeros", zipcode: 10001, title: "Highend mansion in the ritzy part of King's Landing", description: "If you want to show off your wealth there isn't a better place to do it. This mansion has everything you could imagine and is located right next to the iron throne.", allegiance: "Lannisters", danger_rating: 1.45, house_type: "Mansion", max_occupants: 20, price: 924, number_of_bedrooms: 15, number_of_beds: 20, number_of_bathrooms: 8, square_foot: 9500, host_id: user3.id},
              {lat: 40.745603, lng: -73.9584931, address: "145 River Road",city: "Riverrun", state: "Westeros", zipcode: 10001, title: "Nice cozy location in riverrun.", description: "Rumors are that this is where Ned Stark and Catelyn Stark first met. Come here to kick up the romance or take in the beatiful surroundings.", allegiance: "Starks", danger_rating: 5.04, house_type: "Cottage", max_occupants: 2, price: 98, number_of_bedrooms: 1, number_of_beds: 1, number_of_bathrooms: 1, square_foot: 2000, host_id: user4.id},
              {lat: 40.825603, lng: -73.9584931, address: "2 Dragonstone Road",city: "Dragonstone", state: "Westeros", zipcode: 10001, title: "Amazing vacation spot on the island of Dragonstone.", description: "Located on Dragonstone island. It might be a treck to get here but it is well worth it. Come experience a trip you wiill never forget", allegiance: "Baratheons", danger_rating: 2.13, house_type: "Colonial", max_occupants: 4, price: 320, number_of_bedrooms: 4, number_of_beds: 4, number_of_bathrooms: 2, square_foot: 4200, host_id: user3.id}
            ])
              # {lat: 40.755603,lng: -73.984931, address: "10 Godsway",city: "Vaes Dothrak", state: "Essos", zipcode: 10001, title: "Great location right in the heart of Dothraki territory.", description: "This home was stood the test of time. The Dothraki often venture here and even Sir Jorah Mormont has stayed here. We take a lot of pride in this location.", allegiance: "Dothraki", danger_rating: 7, house_type: "colonial", max_occupants: 8, price: 224, number_of_bedrooms: 5, number_of_beds: 8, number_of_bathrooms: 2, square_foot: 5200},
              # {lat: 40.755603,lng: -73.984931, address: "10 Godsway",city: "Vaes Dothrak", state: "Essos", zipcode: 10001, title: "Great location right in the heart of Dothraki territory.", description: "This home was stood the test of time. The Dothraki often venture here and even Sir Jorah Mormont has stayed here. We take a lot of pride in this location.", allegiance: "Dothraki", danger_rating: 7, house_type: "colonial", max_occupants: 8, price: 224, number_of_bedrooms: 5, number_of_beds: 8, number_of_bathrooms: 2, square_foot: 5200},
              # {lat: 40.755603,lng: -73.984931, address: "10 Godsway",city: "Vaes Dothrak", state: "Essos", zipcode: 10001, title: "Great location right in the heart of Dothraki territory.", description: "This home was stood the test of time. The Dothraki often venture here and even Sir Jorah Mormont has stayed here. We take a lot of pride in this location.", allegiance: "Dothraki", danger_rating: 7, house_type: "colonial", max_occupants: 8, price: 224, number_of_bedrooms: 5, number_of_beds: 8, number_of_bathrooms: 2, square_foot: 5200},
              # {lat: 40.755603,lng: -73.984931, address: "10 Godsway",city: "Vaes Dothrak", state: "Essos", zipcode: 10001, title: "Great location right in the heart of Dothraki territory.", description: "This home was stood the test of time. The Dothraki often venture here and even Sir Jorah Mormont has stayed here. We take a lot of pride in this location.", allegiance: "Dothraki", danger_rating: 7, house_type: "colonial", max_occupants: 8, price: 224, number_of_bedrooms: 5, number_of_beds: 8, number_of_bathrooms: 2, square_foot: 5200},
              # {lat: 40.755603,lng: -73.984931, address: "10 Godsway",city: "Vaes Dothrak", state: "Essos", zipcode: 10001, title: "Great location right in the heart of Dothraki territory.", description: "This home was stood the test of time. The Dothraki often venture here and even Sir Jorah Mormont has stayed here. We take a lot of pride in this location.", allegiance: "Dothraki", danger_rating: 7, house_type: "colonial", max_occupants: 8, price: 224, number_of_bedrooms: 5, number_of_beds: 8, number_of_bathrooms: 2, square_foot: 5200},


              
              
spot1 = Spot.all[0];
spot2 = Spot.all[1];
spot3 = Spot.all[2];
spot4 = Spot.all[3];
spot5 = Spot.all[4];

image1 = open('https://s3.amazonaws.com/airgot-dev/images/house1-1.jpeg')
image2 = open('https://s3.amazonaws.com/airgot-dev/images/house2.jpg')
image3 = open('https://s3.amazonaws.com/airgot-dev/images/house3.jpg')
image4 = open('https://s3.amazonaws.com/airgot-dev/images/house4.jpeg')
image5 = open('https://s3.amazonaws.com/airgot-dev/images/house5.jpg')
image6 = open('https://s3.amazonaws.com/airgot-dev/images/house1-2.jpg')
image7 = open('https://s3.amazonaws.com/airgot-dev/images/house1-3.jpg')
image8 = open('https://s3.amazonaws.com/airgot-dev/images/house1-4.jpg')
image9 = open('https://s3.amazonaws.com/airgot-dev/images/house1-5.jpg')

spot1.photos.attach(io:image1, filename: 'house1-1.jpeg')
spot2.photos.attach(io:image2, filename: 'house2.jpg')
spot3.photos.attach(io:image3, filename: 'house3.jpg')
spot4.photos.attach(io:image4, filename: 'house4.jpeg')
spot5.photos.attach(io:image5, filename: 'house5.jpeg')
spot1.photos.attach(io:image6, filename: 'house1-2.jpg')
spot1.photos.attach(io:image7, filename: 'house1-3.jpg')
spot1.photos.attach(io:image8, filename: 'house1-4.jpg')
spot1.photos.attach(io:image9, filename: 'house1-5.jpg')