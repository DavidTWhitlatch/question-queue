module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :username

    def connect
      self.username = verified_room
    end

    private

    def verified_room
      # if Room.find_by_code(params[:code])
        "test"
      # else
        # reject_unauthorized_connection
      # end
    end
  end
end
