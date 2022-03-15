import './App.css';
import React from 'react';
import Student from './components/Student/student';

class App extends React.Component {
    state = {
        students: [{
                name: 'Anthony Vanoni',
                bio: 'Recovering donut addict.',
                scores: [
                    {
                      date: "2022-01-14",
                      score: 88
                    },
                    {
                      date: "2022-02-09",
                      score: 79
                    },
                    {
                      date: "2022-03-23",
                      score: 91
                    },
                    {
                      date: "2022-04-01",
                      score: 95
                    }
                  ]
                },
            {
                name: 'Tatsiana Prokharchyk',
                bio: 'Just a gal with a lot of spice.',
                scores: [
                    {
                      date: "2022-02-11",
                      score: 62
                    },
                    {
                      date: "2022-03-24",
                      score: 74
                    },
                    {
                      date: "2022-04-19",
                      score: 85
                    }
                ]
              },
            {
                name: 'Dylan Burston',
                bio: 'Gifted napper, talker, and ice cream eater.',
                scores: [
                    {
                      date: "2022-02-08",
                      score: 77
                    },
                    {
                      date: "2022-03-22",
                      score: 92
                    },
                    {
                      date: "2022-04-15",
                      score: 68
                    }
                ]
              }
            ]
          };
        

    render() {
        return (
          <div className="App">
            {this.state.students.map(student => {
              return (
                <Student
                  name={student.name}
                  bio={student.bio}
                  scores={student.scores}
                />
              );
            })}
          </div>
        );
      }
    }
    
    export default App;