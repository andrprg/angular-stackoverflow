import { Component } from '@angular/core';
import { LocalService } from './data/common/local.service';
import { SettingRepositoryService } from './repository/setting.repository.service';
import { QuestionRepositoryService } from './repository/question.repository.service';
import { AnswerRepositoryService } from './repository/answer.repository.service';
import { RequestAnswer, RequestQuestion, RequestTag } from './domain/request';
import { TagRepositoryService } from './repository/tag.repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template-project';


}
