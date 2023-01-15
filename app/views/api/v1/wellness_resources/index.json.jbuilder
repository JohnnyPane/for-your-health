json.array! @wellness_resources, partial: "api/v1/wellness_resources/wellness_resource", as: :wellness_resource

# json.array! @wellness_resources do |wellness_resource|
#   json.resource wellness_resource
#   json.resource_preview @resource_previews.select { |resource| resource.id == wel}
# end