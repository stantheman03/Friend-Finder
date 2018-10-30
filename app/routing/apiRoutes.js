var friends = require('../data/friends')
module.exports = function(app){
    app.get('/api/friends',function(req,res){
        res.json(friends);
    });
    app.post('/api/friends',function(req,res){

        var Match = {
            name: '',
            photo: '',
            userDifference: 1000
        };
        
        var userData = req.body
        var userScore = userData.score;
        var userName = userData.name;
        var userPhoto = userData.photo;
        var totalDiffernce  = 0;
       

        // userscore = userScore and friendsscore = friends.score
        userScore;
        friends.score;
        for(j=0;j<friends.length;j++){
            console.log(friends[j])
        
        for(i=0;i<userScore;i++){
            totalDiffernce += Math.abs(parseInt(userScore[i]) - parseInt(friends[j].score[i]))
            if(totalDiffernce <= Match.userDifference){
                Match.name = friends[i].name
                Match.photo = friends[i].photo
                Match.userDifference = totalDiffernce
            }
        } 
    }
friends.push(userData);
res.json(Match)

    });
}