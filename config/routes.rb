Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  
  resources :questions
  resources :rooms
  resources :usernames
  post '/upvote/:username_id/:id', to: 'questions#upvote'
  post '/answer/:id', to: 'questions#answer'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
