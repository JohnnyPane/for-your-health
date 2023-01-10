class WellnessActivity < ApplicationRecord
  belongs_to :wellness_group, required: false
  belongs_to :category, required: false
  has_and_belongs_to_many :users

end
