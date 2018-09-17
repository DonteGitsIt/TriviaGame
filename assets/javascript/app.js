$(document).ready(function(){
    var game = {
        questions: [{
            question: 'Which Lil Pump song went 3x platinum in the United States?',
            answers: ['D-rose', 'Gucci Gang', 'Esskeetit', 'Molly'],
            correct: 'Gucci Gang',
            image: 'assets/images/gucci-gang.gif'
        },
        {
            question: 'Which member of "A Tribe Called Quest" died in 2016?',
            answers: ['Q-tip', 'Jarobi', 'Ali Shaheed', 'Phife Dawg'],
            correct: 'Phife Dawg',
            image: 'assets/images/phife.jpg'
        },
        {
            question: 'What year did Drake release his hit single "Hotline Bling"?',
            answers: ['1999', '2017', '2016', '2014'],
            correct: '2016',
            image: 'assets/images/hotline-bling.gif'
        },
        {
            question: '"Bad and Boujee" is a song by:',
            answers: ['Lil Uzi Vert', 'Gucci Mane', 'Future', 'Migos'],
            correct: 'Migos',
            image: 'assets/images/migos.gif'
        },
        {
            question: 'Which of these rappers died at a young age in 2018?',
            answers: ['Lil Peep', 'XXXTentacion', 'Ugly God', 'Tupac'],
            correct: 'XXXTentacion',
            image: 'assets/images/xxxtentacion.jpg'
        },
        {
            question: 'What album does the song "Swimming Pools (Drank)" by Kendrick Lamar appear on?',
            answers: ['Section.80','DAMN.','To Pimp A Butterfly', 'good kid, m.A.A.d city'],
            correct: 'good kid, m.A.A.d city',
            image: 'assets/images/swimming.gif'
        },
        {
            question: "Which 90's rap group made the song "+'"'+"Passin' Me By?"+'"',
            answers: ['A Tribe Called Quest', 'The Pharcyde','Wu-Tang Clan','Goodie Mob'],
            correct: 'The Pharcyde',
            image: 'assets/images/pharcyde.gif'
        },
        {
            question: 'Which of these rappers signed Eminem at the beginning of his career?',
            answers: ['Ice Cube', 'Flava Flav', 'Dr. Dre', 'Eazy-E'],
            correct: 'Dr. Dre',
            image:'assets/images/dre.gif'
        },
        {
            question: 'What was Lil Uzi Vert'+"'"+'s'+' first album?',
            answers: ['Lil Uzi Vert vs. the World', 'The Perfect Luv Tape', 'Culture', 'Luv is Rage'],
            correct: 'Luv is Rage',
            image:'assets/images/luv.jpg'
        },
        {
            question: 'What year did Kanye West release his album "Graduation"?',
            answers: ['2005', '2009', '2002','2007'],
            correct: '2007',
            image: 'assets/images/graduation.jpg'
        }],
        count: function(){
            game.timer--
            $('#time-left').html(game.timer)
            if (game.timer < 1){

                game.timeUpPage()
            }
        },

        timer: 30,
        pageUpdate: function(){
            game.timer = 30
            if (counter < game.questions.length){
                intervalId = setInterval(game.count, 1000)
            
                $('#content').html('<p id='+'"'+'timer'+'"'+'>Time Remaining: <span id='+'"'+'time-left'+'"'+'></span></p>')
                $('#content').append(newQuestion.html(game.questions[counter].question))
                $('time-left').html(game.timer)
                for (i=0; i < 4; i++){
                    $('#content').append('<p><button class='+'"'+'answer'+'"'+'>'+game.questions[counter].answers[i]+'</button></p>')
                }
                
                $('.answer').on('click', function(){
                    if (this.innerHTML === game.questions[counter].correct){
                        game.correctAnswerPage()
                    }else{
                        game.wrongAnswerPage()
                    }
                })
            }else{
                clearInterval(intervalId)
                var score = (answersCorrect/game.questions.length) * 100
                $('#content').html('<h2>All done, here'+"'"+'s how you did:')
                $('#content').append('<p>Correct answers: '+ answersCorrect +'</p>')
                $('#content').append('<p>Wrong answers: '+ answersWrong + '</p>')
                $('#content').append('<p>Unanswered questions: '+ questionsUnanswered + '</p>')
                $('#content').append('<p>You scored a '+score+'%</p>')
                $('#content').append('<p><button id='+'"startOver"><h3>Start Over?</h3></button></p>')
                $('#startOver').on('click', function(){
                    counter = 0
                    questionsUnanswered = 0
                    answersWrong = 0
                    answersCorrect = 0
                    game.pageUpdate()
            
                })
            }
        },
        correctAnswerPage: function(){
            clearInterval(intervalId)
            
            $('#content').html('<h2>Correct!<h2>')
            $('#content').append($('<img>').attr('src', game.questions[counter].image))
            answersCorrect++
            counter++
            setTimeout(game.pageUpdate, 5000)
        },
        wrongAnswerPage: function(){
            clearInterval(intervalId)
            
            $('#content').html('<h2>Wrong!</h2>')
            $('#content').append($('<p>').text('The correct answer was '+game.questions[counter].correct))
            $('#content').append($('<img>').attr('src', game.questions[counter].image))
            answersWrong++
            counter++
            setTimeout(game.pageUpdate, 5000)
        },
        timeUpPage: function(){
            clearInterval(intervalId)
            
            $('#content').html("<h2>Time's Up!</h2>")
            $('#content').append($('<p>').text('The correct answer was '+game.questions[counter].correct))
            $('#content').append($('<img>').attr('src', game.questions[counter].image))
            questionsUnanswered++
            counter++
            setTimeout(game.pageUpdate, 5000)
        }

    }
    var questionsUnanswered = 0
    var answersWrong = 0
    var answersCorrect = 0
    var intervalId;
    var newQuestion = $('<p>').attr('id', 'question')
   
    var counter = 0
    $('#start').on('click', function(){
        game.pageUpdate()
    })
    

    
    
})