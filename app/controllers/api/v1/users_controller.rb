class Api::V1::UsersController < ApplicationController
  def session_user
    @user = current_user
    render :show
  end
end
