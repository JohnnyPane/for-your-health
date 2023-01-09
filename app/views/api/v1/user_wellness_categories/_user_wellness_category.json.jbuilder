# json.extract! category, :id, :name
json.category do 
  json.id @category.id
  json.name @category.name
end

json.resources @resources do |resource|
  json.id resource.id
  json.title resource.title
  json.body resource.body
  json.url resource.url
end