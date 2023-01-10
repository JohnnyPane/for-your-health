class Api::V1::WellnessActivitiesController < ApplicationController
  def index
    @wellness_activities = WellnessActivity.all
  end

  def show
    @wellness_activities = WellnessActivity.find(params[:id])
  end
  
  def group_activities
    # grab activities associated with groups
  end

  def user_activities
    p "🍄🍄🍄🍄🍄 #{params} 🍄🍄🍄🍄🍄"
    @wellness_activities = User.find(params[:id]).wellness_activities
    render :index
  end
end
