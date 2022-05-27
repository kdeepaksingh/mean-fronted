import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TextEditorComponent } from './text-editor/text-editor.component';


const routes: Routes = [
    {path:'about-us', component:AboutUsComponent},
    {path:'contact-us',component:ContactUsComponent},
    {path:'text-editor',component:TextEditorComponent},
    {path:'chat-box',component:ChatBoxComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StaticpagesRoutingModule { }
