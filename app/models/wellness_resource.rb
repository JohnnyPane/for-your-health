class WellnessResource < ApplicationRecord
  belongs_to :user
  belongs_to :category
  
  def types
    ["Activity", "Article", "Recipe", "Meditation", "Video", "Blog"]
  end
end
