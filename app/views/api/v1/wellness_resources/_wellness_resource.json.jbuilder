# json.extract! wellness_resource, :id, :title, :url, :body

json.wellness_resource do 
  json.id wellness_resource.id
  json.title wellness_resource.title
  json.body wellness_resource.body
  json.preview_data wellness_resource.resource_preview
end