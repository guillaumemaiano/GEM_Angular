import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { SkillsComponent } from './skills/skills.component';
import { MissionsComponent } from './missions/missions.component';
import { KnowledgebaseComponent } from './knowledgebase/knowledgebase.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    SkillsComponent,
    MissionsComponent,
    KnowledgebaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
