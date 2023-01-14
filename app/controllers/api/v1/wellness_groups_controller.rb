class Api::V1::WellnessGroupsController < ApplicationController
  def index
    @wellness_groups = WellnessGroup.all
  end

  def show
    @wellness_group = WellnessGroup.find(params[:id])
    @group_categories = @wellness_group.categories
  end

  def index_user_wellness_groups
    @wellness_groups = current_user.wellness_groups
  end
end
