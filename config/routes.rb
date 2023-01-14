Rails.application.routes.draw do
  devise_for :users
  authenticated :user do
    root "pages#blurbs", as: :authenticated_root
    resources :categories, only: [:index, :show], to: "pages#blurbs"
    resources :user, only: [:index, :show], to: "pages#blurbs" 
    resources :user, only: [:show] do
      resources :categories, only: [:show], to: "pages#blurbs"
      resources :wellness_group, to: "pages#blurbs"
      resources :wellness_activities, to: "pages#blurbs"
    end
    resources :wellness_groups, to: "pages#blurbs"
  end

  root 'pages#home'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :users do 
        collection do 
          get "session_user" => "users#session_user"
        end
      end
      resources :blurbs, only: [:index, :show, :create, :update, :destroy]
      resources :categories, only: [:index, :show, :create]
      resources :wellness_activities do 
        collection do 
          get "group_activities/:id" => "wellness_activities#group_activities"
          get "user_activities/:id" => "wellness_activities#user_activities"
        end
      end
      resources :user_wellness_categories, only: [:index, :show]
      resources :wellness_groups do
        collection do
          get "index_user_wellness_groups"
        end
      end
    end
  end
end
