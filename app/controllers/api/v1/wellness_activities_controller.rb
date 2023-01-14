class Api::V1::WellnessActivitiesController < ApplicationController
  def index
    @wellness_activities = WellnessActivity.all
  end

  def show
    @wellness_activities = WellnessActivity.find(params[:id])
  end
  
  def create
    @activity = current_user.wellness_activities.build({
      name: params[:activity][:name],
      category_id: params[:activity][:category_id],
      wellness_group_id: params[:activity][:group_id],
      start_time: activity_dates[:start_time],
      end_time: activity_dates[:end_time]
    })
    respond_to do |format|
      if @activity.save
        format.json { render :show, status: :created, location: api_v1_wellness_activity_path(@activity) }
      else
        format.json { render json: @activity.errors, status: :unprocessable_entity }
      end
    end
  end

  def user_activities
    p "🍄🍄🍄🍄🍄 #{params} 🍄🍄🍄🍄🍄"
    @wellness_activities = User.find(params[:id]).wellness_activities
    render :index
  end

  def group_activities
    @wellness_activities = WellnessGroup.find(params[:id]).wellness_activities
    render :index
  end

  private
  
  def activity_dates
    start_time = WellnessActivity.format_date_times(params[:activity][:date], params[:activity][:start_time])
    end_time = WellnessActivity.format_date_times(params[:activity][:date], params[:activity][:start_time])
    formatted_dates = {start_time: start_time, end_time: end_time}
  end
end
