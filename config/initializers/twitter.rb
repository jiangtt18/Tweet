$client = Twitter::REST::Client.new do |config|
  config.consumer_key        = ENV['consumer_key']
  config.consumer_secret     = ENV['consumer_secret']
  config.access_token        = ENV['access_token']
  config.access_token_secret = ENV['access_key']
end


# config.consumer_key        = Rails.application.secrets.consumer_key
# config.consumer_secret     = Rails.application.secrets.consumer_secret
# config.access_token        = Rails.application.secrets.access_token
# config.access_token_secret = Rails.application.secrets.access_key
