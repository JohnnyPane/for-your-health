class WellnessGroup < ApplicationRecord
  has_and_belongs_to_many :users
  has_and_belongs_to_many :categories

  def add_users_to_group
    User.find(params[:user_ids]).each do |user|
      @wellness_group.users << user
    end
  end

  
end
