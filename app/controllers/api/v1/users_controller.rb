class Api::V1::UsersController < ApplicationController
  def session_user
    @user = current_user
    p "let it be"
    render :show
  end
end
