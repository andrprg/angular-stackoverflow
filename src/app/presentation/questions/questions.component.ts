import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuestion } from 'src/app/domain/question';
import { AnswerRepositoryService } from 'src/app/repository/answer.repository.service';
import { QuestionRepositoryService } from 'src/app/repository/question.repository.service';
import { TagRepositoryService } from 'src/app/repository/tag.repository.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions$!: Observable<IQuestion[]>;

  constructor(
    public questionRepository: QuestionRepositoryService,
    public answerRepository: AnswerRepositoryService,
    public tagRepository: TagRepositoryService,
  ) {
    /*
    this.questionRepository.loadInitialData().subscribe(
      data => console.log('question:', data)
    );
    this.questionRepository.nextPage().subscribe(
      data => console.log('question:', data)
    );



    this.questionRepository.nextPage().subscribe(
      data => console.log('question:', data)
    );
    this.questionRepository.nextPage().subscribe(
      data => console.log('question:', data)
    );

    this.answerRepository.getList().subscribe(
      data => console.log('answer:', data, true)
    );

    this.answerRepository.getList().subscribe(
      data => console.log('answer:', data)
    );


    this.tagRepository.getList().subscribe(
      data => console.log('tag:', data)
    );
    */
  }

  ngOnInit(): void {
    this.questions$ = this.questionRepository.loadInitialData();
  }
}
