class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :blurbs, dependent: :destroy
  has_many :user_wellness_categories
  has_many :categories, through: :user_wellness_categories
  has_many :wellness_resources
  has_and_belongs_to_many :wellness_groups
  has_and_belongs_to_many :wellness_activities

  def activity_by_category_breakdown
    activities_by_category = wellness_activities.group_by { |activity| activity.category.name }
    categories.map do |category|
      activities_by_category[category.name] = [] if activities_by_category.keys.exclude?(category.name)
    end
    activities_by_category
  end

end
