import './App.css';
import React from 'react';
import Student from './components/Student/student';

class App extends React.Component {
    state = {
        students: [{
                name: 'Anthony Vanoni',
                bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
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
                bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.',
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
                bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?',
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