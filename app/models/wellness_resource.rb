class WellnessResource < ApplicationRecord
  belongs_to :user
  belongs_to :category
  has_one :resource_preview, dependent: :destroy

  after_commit :generate_link_preview, on: :create

  def generate_link_preview
    preview_data = MetaInspector.new(url)
  
    resource_preview = ResourcePreview.new({
      title: preview_data.best_title,
      image: preview_data.images.best,
      root_url: preview_data.root_url,
      description: preview_data.best_description,
      author: preview_data.author,
      wellness_resource_id: id
    })
    resource_preview.save
  end
end
