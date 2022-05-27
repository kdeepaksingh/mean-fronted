import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StaticpagesRoutingModule } from './staticpages-routing.module';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ChatBoxComponent } from './chat-box/chat-box.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUsComponent,
    TextEditorComponent,
    ChatBoxComponent
  ],
  imports: [
    CommonModule,
    StaticpagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule
  ]
})
export class StaticpagesModule { }
