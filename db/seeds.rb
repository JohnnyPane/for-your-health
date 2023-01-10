# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

2.times do |i|
    User.create(email: "user-#{i+1}@example.com", password: "password", password_confirmation: "password")
end

User.all.each do |u|
    3.times do |i|
        u.blurbs.create(title: "Blurb #{i+1} for #{u.email}", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices, elit quis tempor tristique, massa tellus aliquam libero, ut venenatis orci sem vitae orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa enim, commodo vitae metus eu, feugiat laoreet erat. Nam porttitor commodo magna. Fusce auctor cursus odio, ut venenatis purus lobortis ut. Donec enim metus, sodales ut ligula at, commodo tincidunt leo. Cras tincidunt mi a leo tincidunt, id dapibus urna elementum. Cras bibendum eros sed mi porta euismod. Cras a mollis turpis, id tempus urna."  )
    end
end

["Exercise", "Sustainability", "Food", "Mental Health", "Financial", "Outdoors", "Community", "Meditation", "Friends", "Family", "Hobbies"].each do |category|
    Category.create(name: category, top_level: true)
end

5.times do |i|
    User.first.wellness_resources.create(
        title: "Resource #{i}", 
        url: "https://www.siftandsimmer.com/pork-mazesoba-ramen-noodles/",
        category_id: 2,
    )
end

User.first.wellness_groups.create(name: "HEC Paris")
WellnessGroup.first.categories << Category.first

3.times do |i|
    WellnessGroup.first.wellness_activities.create(
        name: "Group Exercise #{i}",
        activity_type: "Exercise",
        category_id: 1,
        start_time: Time.now + i.hours,
        end_time: Time.now + (i + 1).hours
    )
end