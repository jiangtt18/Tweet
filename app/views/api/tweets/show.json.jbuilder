@tweets.each do |tweet|
  json.set! tweet.id do
    json.extract! tweet, :user, :full_text, :created_at
  end
end

# json.partial! 'api/tweets/tweet', tweet: @tweet
