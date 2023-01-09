class Api::V1::CategoriesController < ApplicationController
  before_action :set_category, only: [:show]
  before_action :authenticate_user!, only: [:create_user_categories]

  def index
    @categories = Category.all.where(top_level: true)
  end

  def show
    # format.json { render :show }
  end

  def create
    if !params[:select_categories]
      # create action for user categories
    else
      create_user_categories
    end
  end

  def create_user_categories
    user_category_ids = current_user.categories.map(&:id)
    selected_category_ids = params[:category_ids]
    wellness_categories_to_create = selected_category_ids - user_category_ids
    wellness_categories_to_destroy = current_user.user_wellness_categories.where(category_id: user_category_ids - selected_category_ids)
    
    wellness_categories_to_destroy.map(&:destroy)

    wellness_categories_to_create.each do |category_id|
      current_user.user_wellness_categories.create(category_id: category_id)
    end

    head :ok, content_type: "text/html"
  end

  private

  def set_category
    @category = Category.find(params[:id])
  end

  def blurb_params
    params.require(:category).permit(:name)
  end

  
end
