require 'open-uri'


User.destroy_all
Spot.destroy_all

User.create!([{first_name: "Jon", last_name: "Snow", email: "JonSnow@starks.com", password: "gameofthrones", birth_date: DateTime.new(1990-05-26), city: "Castle Black", description: "Jon may have been born a bastard but he was truly born to be a leader. Everywhere he goes people want to follow us lead. You won't be disappointed staying in any of his spots and might even end up joining forces with him before the stay is over.", profile_photo_url: "https://s3.amazonaws.com/airgot-dev/images/jon-snow.jpg"},
             {first_name: "Ned", last_name: "Stark", email: "NedStark@starks.com", password: "gameofthrones", birth_date: DateTime.new(1965-02-16), city: "Winterfell", description: "Ned has led the starks for a long time. He is highly trusted and always well intentioned. Don't take advantage of his kindness though. When he needs to he will assert himself. His spots are known for being well kept and great places for calm getaways.", profile_photo_url: "https://s3.amazonaws.com/airgot-dev/images/ned-stark.jpg"},
             {first_name: "Jamie", last_name: "Lannister", email: "JamieLannister@lannisters.com", password: "gameofthrones", birth_date: DateTime.new(1980-06-12), city: "King's Landing", description: "The kings slayer has been around royalty since he was a young boy. He has a lavish lifestyle but is not afraid to get down and dirty and fight for his rights. His spots are usually in luxorious locations but you may find them less flashy than expected.", profile_photo_url: "https://s3.amazonaws.com/airgot-dev/images/jamie-lannister.jpg"},
             {first_name: "Sansa", last_name: "Stark", email: "SansaStark@starks.com", password: "gameofthrones", birth_date: DateTime.new(1992-5-26), city: "Winterfell", description: "Daughter of Ned Stark who is also a host on here. She always dreamed of being a princess and was raised to be one. Her independence and bravery should not be discounted though. Her stay spots are known to be in great locations with beautiful surrounds that you can get lost in.", profile_photo_url: "https://s3.amazonaws.com/airgot-dev/images/sansa-stark.jpg"},
             {first_name: "Cersei", last_name: "Lannister", email: "CerseiLannister@lannisters.com", password: "gameofthrones", birth_date: DateTime.new(1992-5-26), city: "King's Landing", description: "Cersei was always meant to be a ruler but had to be creative in order to obtain the power she sought. Very hardened on the outside and the inside. Her soft spot is with her family. You will find her spots to be very ritzy and high end locations. Her spots are ones that you will never forget.",  profile_photo_url: "https://s3.amazonaws.com/airgot-dev/images/cersei-lannister.jpg"}
             ])

user1 = User.all[0];
user2 = User.all[1];
user3 = User.all[2];
user4 = User.all[3];
user5 = User.all[4];


Amenity.create!([{name: "Horses Welcome", icon: "fas fa-horse"}, {name:"Dragon Sightings", icon: "fas fa-dragon"}, {name: "Guards on Duty", icon: "fas fa-shield-alt"}, {name: "Starbucks Nearby", icon: "fas fa-coffee"}, {name: "Low Danger Rating!", icon: "fas fa-skull"}, {name: "Warm Location", icon: "fas fa-sun"},
                {name: "Raven Mail Delivery", icon: "fas fa-crow"}, {name: "Cold Location", icon:"fas fa-snowflake"}])

Spot.create!([{lat: 40.829026, lng: -73.912115, address: "123 Kingsroad",city: "Winterfell", state: "Westeros", zipcode: 10001, title: "Beatiful home on the outskirts of Winterfell.", description: "This home was built by the early Targarians when the MadKing was still ruling. Our family has resided here for 100's of years. Located right on Kingsroad where you are sure to meet some interesting characters.", allegiance: "Starks", danger_rating: 4.67, house_type: "Colonial", max_occupants: 5, price: 139, number_of_bedrooms: 3, number_of_beds: 4, number_of_bathrooms: 2, square_foot: 4000, host_id: user2.id},
              {lat: 40.7689688, lng: -73.918427, address: "10 Godsway",city: "Vaes Dothrak", state: "Essos", zipcode: 10001, title: "Great location right in the heart of Dothraki territory.", description: "This home has stood the test of time. The Dothraki often venture here and even Sir Jorah Mormont has stayed here. We take a lot of pride in this location.", allegiance: "Dothraki", danger_rating: 7.32, house_type: "Colonial", max_occupants: 8, price: 224, number_of_bedrooms: 5, number_of_beds: 8, number_of_bathrooms: 2, square_foot: 5200, host_id: user1.id},
              {lat: 40.776173, lng: -73.946887, address: "65 Roseroad",city: "King's Landing", state: "Westeros", zipcode: 10001, title: "Highend mansion in the ritzy part of King's Landing", description: "If you want to show off your wealth there isn't a better place to do it. This mansion has everything you could imagine and is located right next to the iron throne.", allegiance: "Lannisters", danger_rating: 1.45, house_type: "Mansion", max_occupants: 20, price: 924, number_of_bedrooms: 15, number_of_beds: 20, number_of_bathrooms: 8, square_foot: 9500, host_id: user5.id},
              {lat: 40.798600, lng: -73.966828, address: "145 River Road",city: "Riverrun", state: "Westeros", zipcode: 10001, title: "Nice cozy location in riverrun, great for a couples retreat.", description: "Rumors are that this is where Ned Stark and Catelyn Stark first met. Come here to kick up the romance or take in the beatiful surroundings.", allegiance: "Starks", danger_rating: 5.04, house_type: "Cottage", max_occupants: 2, price: 98, number_of_bedrooms: 1, number_of_beds: 1, number_of_bathrooms: 1, square_foot: 2000, host_id: user4.id},
              {lat: 40.787314, lng: -73.925978, address: "2 Dragonstone Road",city: "Dragonstone", state: "Westeros", zipcode: 10001, title: "Amazing vacation spot on the island of Dragonstone.", description: "Located on Dragonstone island. It might be a treck to get here but it is well worth it. Come experience a trip you wiill never forget", allegiance: "Baratheons", danger_rating: 2.13, house_type: "Colonial", max_occupants: 4, price: 320, number_of_bedrooms: 4, number_of_beds: 4, number_of_bathrooms: 2, square_foot: 4200, host_id: user2.id},
              {lat: 40.761657,lng: -73.958890, address: "128 Prince's Pass",city: "Dorne", state: "Westeros", zipcode: 10001, title: "Located in the beautiful city of Dorne. Warm weather here all year round!", description: "This location is right in the main city of Dorne. Enjoy the breathtaking architecture and colonial feel of one of the first inhabited places on all of Westeros.", allegiance: "Martell", danger_rating: 8.34, house_type: "Colonial", max_occupants: 6, price: 274, number_of_bedrooms: 5, number_of_beds: 6, number_of_bathrooms: 2, square_foot: 4400, host_id: user5.id},
              {lat: 40.778665,lng: -73.986963, address: "223 Searoad",city: "Casterly Rock", state: "Westeros", zipcode: 10001, title: "Located right near the gold mine of Casterly Rock.", description: "This spot is located next to Casterly Rock which is Lannisters main point of income. Occasionally the Lannisters come by and give out luxerius items and great food. You could get lucky and see it for yourself on your stay!", allegiance: "Lannisters", danger_rating: 3.45, house_type: "Colonial", max_occupants: 4, price: 324, number_of_bedrooms: 3, number_of_beds: 4, number_of_bathrooms: 1, square_foot: 3100, host_id: user4.id},
              {lat: 40.772067,lng: -73.987350, address: "121 Eastern Road",city: "Lannisport", state: "Westeros", zipcode: 10001, title: "Come view the beatiful city of Lannisport.", description: "Located right in the suburbs outside of Lannisport. Enjoy the beatiful city while also being able to enjoy the surrounding areas that are often less traveled.", allegiance: "Lannisters", danger_rating: 8.11, house_type: "Cottage", max_occupants: 2, price: 124, number_of_bedrooms: 1, number_of_beds: 1, number_of_bathrooms: 1, square_foot: 1300, host_id: user5.id},
              {lat: 40.773094,lng: -73.945919, address: "10 Goldroad",city: "King's Landing", state: "Westeros", zipcode: 10001, title: "Small location located inside of King's Landing.", description: "Located in the lower end area of King's landing but still a lot of great stuff to see. King's Landing is a place that needs to be seen to believe.", allegiance: "Lannisters", danger_rating: 2.54, house_type: "Apartment", max_occupants: 1, price: 104, number_of_bedrooms: 1, number_of_beds: 1, number_of_bathrooms: 1, square_foot: 1000, host_id: user3.id},
              {lat: 40.844052,lng: -73.904828, address: "300 Kingsroad",city: "Castle Black", state: "Westors", zipcode: 10001, title: "If you are looking for an adventure look no further than here.", description: "This location is right next to Castle Black where the Night's Watch is located. This place can be very dangerous but also very adventurous.", allegiance: "None", danger_rating: 9.52, house_type: "colonial", max_occupants: 4, price: 244, number_of_bedrooms: 3, number_of_beds: 4, number_of_bathrooms: 2, square_foot: 2200, host_id: user1.id}
              ])
         
spot1 = Spot.all[0];
spot2 = Spot.all[1];
spot3 = Spot.all[2];
spot4 = Spot.all[3];
spot5 = Spot.all[4];
spot6 = Spot.all[5];
spot7 = Spot.all[6];
spot8 = Spot.all[7];
spot9 = Spot.all[8];
spot10 = Spot.all[9];

image1 = 'https://s3.amazonaws.com/airgot-dev/images/house1-1.jpg'
image2 = 'https://s3.amazonaws.com/airgot-dev/images/house1-2.jpg'
image3 = 'https://s3.amazonaws.com/airgot-dev/images/house1-3.jpg'
image4 = 'https://s3.amazonaws.com/airgot-dev/images/house1-4.jpg'
image5 = 'https://s3.amazonaws.com/airgot-dev/images/house1-5.jpg'
image6 = 'https://s3.amazonaws.com/airgot-dev/images/house2.jpg'
image11 ='https://s3.amazonaws.com/airgot-dev/images/house3.jpg'
image16 ='https://s3.amazonaws.com/airgot-dev/images/house4.jpg'
image21 ='https://s3.amazonaws.com/airgot-dev/images/house5.jpg'
image26= 'https://s3.amazonaws.com/airgot-dev/images/house6.jpg'
image31 ='https://s3.amazonaws.com/airgot-dev/images/house7.jpg'
image36= 'https://s3.amazonaws.com/airgot-dev/images/house8.jpg'
image41 ='https://s3.amazonaws.com/airgot-dev/images/house9.jpg'
image46 ='https://s3.amazonaws.com/airgot-dev/images/house10.jpg'

Photo.create!([{spot_id: spot1.id, image_url: image1}, {spot_id: spot1.id, image_url: image2}, {spot_id: spot1.id, image_url: image3}, {spot_id: spot1.id, image_url: image4}, {spot_id: spot1.id, image_url: image5}, {spot_id: spot2.id, image_url: image6}, {spot_id: spot3.id, image_url: image11}, {spot_id: spot4.id, image_url: image16},
                {spot_id: spot5.id, image_url: image21},{spot_id: spot6.id, image_url: image26},{spot_id: spot7.id, image_url: image31},{spot_id: spot8.id, image_url: image36},{spot_id: spot9.id, image_url: image41}, {spot_id: spot10.id, image_url: image46}])

amen1 = Amenity.all[0];
amen2 = Amenity.all[1];
amen3 = Amenity.all[2];
amen4 = Amenity.all[3];
amen5 = Amenity.all[4];
amen6 = Amenity.all[5];
amen7 = Amenity.all[6];
amen8 = Amenity.all[7];


Assignment.create!([{spot_id: spot1.id, amenities_id: amen1.id}, {spot_id: spot1.id, amenities_id: amen3.id}, {spot_id: spot1.id, amenities_id: amen7.id}, {spot_id: spot1.id, amenities_id: amen8.id},
                   {spot_id: spot2.id, amenities_id: amen2.id}, {spot_id: spot2.id, amenities_id: amen1.id}, {spot_id: spot2.id, amenities_id: amen4.id}, {spot_id: spot2.id, amenities_id: amen6.id},
                   {spot_id: spot3.id, amenities_id: amen5.id}, {spot_id: spot3.id, amenities_id: amen6.id}, {spot_id: spot3.id, amenities_id: amen2.id}, {spot_id: spot3.id, amenities_id: amen3.id},
                   {spot_id: spot4.id, amenities_id: amen3.id}, {spot_id: spot4.id, amenities_id: amen1.id}, {spot_id: spot4.id, amenities_id: amen8.id}, {spot_id: spot4.id, amenities_id: amen7.id},
                   {spot_id: spot5.id, amenities_id: amen2.id}, {spot_id: spot5.id, amenities_id: amen3.id}, {spot_id: spot5.id, amenities_id: amen7.id}, {spot_id: spot5.id, amenities_id: amen5.id},
                   {spot_id: spot6.id, amenities_id: amen6.id}, {spot_id: spot6.id, amenities_id: amen3.id}, {spot_id: spot6.id, amenities_id: amen2.id}, {spot_id: spot6.id, amenities_id: amen4.id},
                   {spot_id: spot7.id, amenities_id: amen1.id}, {spot_id: spot7.id, amenities_id: amen3.id}, {spot_id: spot7.id, amenities_id: amen7.id}, {spot_id: spot7.id, amenities_id: amen5.id},
                   {spot_id: spot8.id, amenities_id: amen5.id}, {spot_id: spot8.id, amenities_id: amen7.id}, {spot_id: spot8.id, amenities_id: amen1.id}, {spot_id: spot8.id, amenities_id: amen3.id},
                   {spot_id: spot9.id, amenities_id: amen2.id}, {spot_id: spot9.id, amenities_id: amen5.id}, {spot_id: spot9.id, amenities_id: amen3.id}, {spot_id: spot9.id, amenities_id: amen6.id},
                   {spot_id: spot10.id, amenities_id: amen8.id}, {spot_id: spot10.id, amenities_id: amen3.id}, {spot_id: spot10.id, amenities_id: amen7.id}, {spot_id: spot10.id, amenities_id: amen1.id}
                   ])