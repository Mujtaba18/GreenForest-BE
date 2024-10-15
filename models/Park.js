const mongoose = require("mongoose")

const gameSchema = new mongoose.Schema({
  game_name: { type: String, required: true },
  game_description: { type: String, required: true },
  game_price: { type: Number, required: true },
  game_image: { type: String, required: true },
  total_tickets: { type: Number, required: true },
})

const parkSchema = new mongoose.Schema({
  park_name: { type: String, required: true },
  park_location: { type: String, required: true },
  park_description: { type: String, required: true },
  park_image: { type: String, required: true },
  games: [gameSchema],
})

const Park = mongoose.model("Park", parkSchema)


module.exports = Park


// const parkData = [
//   {
//     park_name: "Adventure Park",
//     park_location: "City A",
//     park_description: "A thrilling park with various rides.",
//     park_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Cedar_Point_roller_coaster_Steel_Venom.jpg/1200px-Cedar_Point_roller_coaster_Steel_Venom.jpg", // Roller coaster image
//     games: [
//       {
//         game_name: "Roller Coaster",
//         game_description: "A high-speed rollercoaster ride.",
//         game_price: 20,
//         game_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Cedar_Point_roller_coaster_Steel_Venom.jpg/1200px-Cedar_Point_roller_coaster_Steel_Venom.jpg",
//         total_tickets: 100,
//       },
//       {
//         game_name: "Ferris Wheel",
//         game_description: "A classic Ferris wheel ride.",
//         game_price: 15,
//         game_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Ferris_wheel_at_night.jpg/1200px-Ferris_wheel_at_night.jpg",
//         total_tickets: 80,
//       },
//       {
//         game_name: "Carousel",
//         game_description: "A classic carousel ride.",
//         game_price: 10,
//         game_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Carousel_in_Central_Park.jpg/1200px-Carousel_in_Central_Park.jpg",
//         total_tickets: 60,
//       },
//       // ... more game objects
//     ],
//   },
//   {
//     park_name: "Water Park",
//     park_location: "City B",
//     park_description: "A refreshing water park with slides and pools.",
//     park_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Schlitterbahn_Galveston_Waterpark_Waco_Texas.jpg/1200px-Schlitterbahn_Galveston_Waterpark_Waco_Texas.jpg", // Water park image
//     games: [
//       {
//         game_name: "Water Slides",
//         game_description: "Exciting water slides for all ages.",
//         game_price: 18,
//         game_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Water_slides_at_Wet_n_Wild_Las_Vegas.jpg/1200px-Water_slides_at_Wet_n_Wild_Las_Vegas.jpg",
//         total_tickets: 120,
//       },
//       {
//         game_name: "Wave Pool",
//         game_description: "A large wave pool for swimming and surfing.",
//         game_price: 15,
//         game_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Wave_pool_at_Schlitterbahn_Galveston_Waterpark.jpg/1200px-Wave_pool_at_Schlitterbahn_Galveston_Waterpark.jpg",
//         total_tickets: 100,
//       },
//       {
//         game_name: "Lazy River",
//         game_description: "A relaxing lazy river ride.",
//         game_price: 12,
//         game_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Lazy_river_at_Schlitterbahn_Galveston_Waterpark.jpg/1200px-Lazy_river_at_Schlitterbahn_Galveston_Waterpark.jpg",
//         total_tickets: 80,
//       },
//       // ... more game objects
//     ],
//   },
//   {
//     park_name: "Amusement Park",
//     park_location: "City C",
//     park_description: "A fun-filled amusement park with various attractions.",
//     park_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Disneyland_California_Adventure_Park_entrance.jpg/1200px-Disneyland_California_Adventure_Park_entrance.jpg", // Amusement park image
//     games: [
//       {
//         game_name: "Giant Drop",
//         game_description: "A thrilling free-fall ride.",
//         game_price: 25,
//         game_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Giant_Drop_at_Six_Flags_Magic_Mountain.jpg/1200px-Giant_Drop_at_Six_Flags_Magic_Mountain.jpg",
//         total_tickets: 70,
//       },
//       {
//         game_name: "Haunted House",
//         game_description: "A spooky haunted house attraction.",
//         game_price: 12,
//         game_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Haunted_House_at_Disneyland.jpg/1200px-Haunted_House_at_Disneyland.jpg",
//         total_tickets: 50,
//       },
//       {
//         game_name: "Spinning Teacups",
//         game_description: "A classic spinning teacups ride.",
//         game_price: 10,
//         game_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Teacups_at_Disneyland.jpg/1200px-Teacups_at_Disneyland.jpg",
//         total_tickets: 40,
//       },
//       // ... more game objects
//     ],
//   },
//   {
//     park_name: "Theme Park",
//     park_location: "City D",
//     park_description: "A themed park with attractions based on a specific theme.",
//     park_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Universal_Studios_Hollywood_logo.svg/1200px-Universal_Studios_Hollywood_logo.svg.png", // Theme park image
//     games: [
//       {
//         game_name: "Space Mountain",
//         game_description: "A thrilling roller coaster in space.",
//         game_price: 20,
//         game_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Space_Mountain_at_Disneyland_Park.jpg/1200px-Space_Mountain_at_Disneyland_Park.jpg",
//         total_tickets: 100,
//       },
//       {
//         game_name: "Pirates of the Caribbean",
//         game_description: "A boat ride through a pirate adventure.",
//         game_price: 15,
//         game_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Pirates_of_the_Caribbean_ride_at_Walt_Disney_World.jpg/1200px-Pirates_of_the_Caribbean_ride_at_Walt_Disney_World.jpg",
//         total_tickets: 80,
//       },
//       {
//         game_name: "Big Thunder Mountain Railroad",
//         game_description: "A thrilling mining train ride.",
//         game_price: 18,
//         game_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Big_Thunder_Mountain_Railroad_at_Walt_Disney_World.jpg/1200px-Big_Thunder_Mountain_Railroad_at_Walt_Disney_World.jpg",
//         total_tickets: 90,
//       },
//       // ... more game objects
//     ],
//   },
//   // ... other park data
// ];

// Park.insertMany(parkData)
//   .then(() => {
//     console.log("Data inserted successfully!");
//   })
//   .catch((error) => {
//     console.error("Error inserting data:", error);
//   });