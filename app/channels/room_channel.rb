class RoomChannel < ApplicationCable::Channel
  def subscribed
    @room = Room.find_by_code(params[:code])
    stream_for @room
  end

  # def received(data)
  #   RoomsChannel.broadcast_to(@room, @room.messages)
  # end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
