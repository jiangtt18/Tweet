export const fetchTweets = (userId) => (
  $.ajax({
    url:'api/tweets',
    method: 'GET',
    data:{userId}
  })
);


export const createTweet = (tweet) => (
  $.ajax({
    url: 'api/tweets',
    method: 'POST',
    data: {tweet}
  })
);
