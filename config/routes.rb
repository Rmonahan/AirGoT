Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :bookings
    resources :users do
    end
    resource :session, only: [:create, :destroy]
    resources :spots
  end
end
