class Api::V1::CategoriesController < ApplicationController
  before_action :set_category, only: [:show]

  def index
    @categories = Category.all.where(top_level: true)
  end

  def show
    format.json { render :show }
  end

  private

  def set_blurb
    @category = Category.find(params[:id])
  end

  def blurb_params
    params.require(:category).permit(:name)
  end

end
