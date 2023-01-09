class Api::V1::UserWellnessCategoriesController < ApplicationController
  before_action :authenticate_user!, only: [:create]

  def index
    @categories = current_user.categories
  end

  def show
    @category = Category.find(params[:id])
    @resources = current_user.wellness_resources.where(category_id: params[:id])
  end

  def create

  end

  private

  def authorized?
    @blurb.user == current_user
  end
  
end
