json.tweets do
  @tweets.each do |tweet|
    json.set! tweet.id do
      json.partial! 'api/tweets/tweet', tweet: tweet
    end
  end
end
