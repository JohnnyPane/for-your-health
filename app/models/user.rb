class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :blurbs, dependent: :destroy
  has_many :user_wellness_categories
  has_many :categories, through: :user_wellness_categories
  has_many :wellness_resources

end
