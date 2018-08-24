var tweets = [
  '.@ariannahuff is unattractive both inside and out. I fully understand why her former husband left her for a man- he made a good decision.',
  'I have never seen a thin person drinking  Diet Coke.',
  'Robert Pattinson should not take back Kristen Stewart. She cheated on him like a dog & will do it again--just watch. He can do much better!',
  "Robert I'm getting a lot of heat for saying you should dump Kristen- but I'm right. If you saw the Miss Universe girls you would reconsider.",
  "So many tweets & stories on Stewart/Pattinson Look, it doesn't matter-- the relationship will never be the same. It is permanently broken.",
  'Everyone knows I am right that Robert Pattinson should dump Kristen Stewart. In a couple of years, he will thank me. Be smart, Robert.',
  '.@katyperry  Katy, what the hell were you thinking when you married loser Russell Brand. There is a guy who has got nothing going, a waste!',
  'Pervert alert.  @RepWeiner is back on twitter. All girls under the age of 18, block him immediately.',
  'Amazing how the haters & losers keep tweeting the name “F**kface Von Clownstick” like they are so original & like no one else is doing it...',
  '“@realDonaldTrump: I would like to extend my best wishes to all, even the haters and losers, on this special date, September 11th.”',
  'This election is a total sham and a travesty. We are not a democracy!',
  "Sorry losers and haters, but my I.Q. is one of the highest -and you all know it! Please don't feel so stupid or insecure,it's not your fault",
  'Amazing how the haters & losers keep tweeting the name “F**kface Von Clownstick” like they are so original & like no one else is doing it...',
  "Thanks- many are saying I'm the best 140 character writer in the world. It's easy when it's fun."
];

function getRandom(amount) {
  return Math.floor(Math.random() * (amount + 1));
}

exports.trumpTweet = function() {
  return tweets[getRandom(0, tweets.length)];
};
