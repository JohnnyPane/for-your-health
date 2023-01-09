class Api::V1::UserWellnessCategoriesController < ApplicationController
  before_action :authenticate_user!, only: [:create]

  def index
    @categories = current_user.categories
  end

  def create

  end

  private

  def authorized?
    @blurb.user == current_user
  end
  
end
