class UsernamesController < ApplicationController

  def create
    @username = Username.find_or_create_by(name: username_params[:name])

    if @username.save
      render json: @username
    else
      render json: @username.errors, status: :unprocessable_entity
    end

  end

  private

  def username_params
    params.require(:username).permit(:name)
  end
end
