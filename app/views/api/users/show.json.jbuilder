# json.user do
  json.partial! 'api/users/user', user: @user
# end

# json.tweets do
#   @user.tweets.each do |tweet|
#     json.set! tweet.id do
#       json.partial! 'api/tweets/tweet', tweet: tweet
#     end
#   end
# end
