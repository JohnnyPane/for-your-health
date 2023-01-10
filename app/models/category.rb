class Category < ApplicationRecord
  has_many :user_wellness_categories
  has_many :users, through: :user_wellness_category
  has_many :wellness_resources
  has_and_belongs_to_many :wellness_groups
  
end
