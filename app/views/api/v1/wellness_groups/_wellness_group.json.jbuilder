group = @wellness_group ? @wellness_group : wellness_group

json.wellness_group do 
  json.id group.id
  json.name group.name
  json.mission group.mission
end

json.categories @group_categories do |category|
  json.id category.id
  json.name category.name
end