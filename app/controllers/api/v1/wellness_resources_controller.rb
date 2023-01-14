class Api::V1::WellnessResourcesController < ApplicationController
  def index
    @wellness_resources = current_user.wellness_resources
    render :index
  end

  def show
  end

  def create
    @wellness_resource = current_user.wellness_resources.build(wellness_resource_params)
    if @wellness_resource.save
      render :index
    else
      p "NAH FAM"
    end
  end

  private 

  def wellness_resource_params
    params.require(:wellness_resource).permit(:title, :url, :body, :category_id)
  end
end
