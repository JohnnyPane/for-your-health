class Category < ApplicationRecord
  has_many :user_wellness_categories
  has_many :users, through: :user_wellness_category
  
end
