Rails.application.routes.draw do
  resources :links
  post 'links/find_post' => 'links#find_post'
end
