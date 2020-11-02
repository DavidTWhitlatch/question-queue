class RoomsController < ApplicationController

  def show
    @room = Room.find_by_code(params[:code])

    render json: @room
  end

  def create
    @username = Username.find(room_params[:user_id])
    @code = gen_code
    @room = Room.new(code: @code)
    @room.username = @username
    if @room.save
      render json: @room
    else
      render json: @room.errors, status: :unprocessable_entity
    end
  end

  private

  def gen_code
    chars = ('A'..'Z').to_a + (1..9).to_a
    code = ''
    5.times { code << chars.sample.to_s }
    gen_code if Room.find_by_code(code)
    code
  end

  def room_params
    params.require(:room).permit(:user_id, :code)
  end
end
