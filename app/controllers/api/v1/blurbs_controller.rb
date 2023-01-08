class Api::V1::BlurbsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_blurb, only: [:show, :edit, :update, :destroy]

  def index
    @blurbs = current_user.blurbs.all
  end

  def show
    if authorized?
      respond_to do |format|
        format.json { render :show }
      end
    else
      handle_unauthorized
    end
  end

  def create
    @blurb = current_user.blurbs.build(blurb_params)
    if authorized?
      respond_to do |format|
        if @blurb.save
          format.json { render :show, status: :created, location: api_v1_blurb_path(@blurb) }
        else
          format.json { render json: @blurb.errors, status: :unprocessable_entity }
        end
      end
    else
      handle_unauthorized
    end
  end

  def update
    if authorized?
      respond_to do |format|
        if @blurb.update(blurb_params)
          format.json { render :show, status: :ok, location: api_v1_blurb_path(@blurb) }
        else
          format.json { render json: @blurb.errors, status: :unprocessable_entity }
        end
      end
    else
      handle_unauthorized
    end
  end

  def destroy
    if authorized?
      @blurb.destroy
      respond_to do |format|
        format.json { head :no_content }
      end
    else
      handle_unauthorized
    end
  end

  private
  
  def set_blurb
    @blurb = Blurb.find(params[:id])
  end

  def blurb_params
    params.require(:blurb).permit(:title, :body)
  end

  def authorized?
    @blurb.user == current_user
  end

  def handle_unauthorized
    unless authorized?
      respond_to do |format|
        format.json { render :unauthorized, status: 401 }
      end
    end
  end
end
