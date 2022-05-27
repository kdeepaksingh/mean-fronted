import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';

const SOCKET_END_POINT = 'localhost:8000/chat-box';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.less']
})
export class ChatBoxComponent implements OnInit {
  socket: any;
  message!: string;
  constructor() { }

  ngOnInit() {
    this.setupSocketConnection();
  }
  setupSocketConnection() {
    this.socket = io(SOCKET_END_POINT);
    this.socket.on('message-broadcast', (data: string) => {
      console.log(data);
      if (data) {
        const element = document.createElement('li');
        element.innerHTML = data;
        console.log(element.innerHTML);
        element.style.background = 'white';
        element.style.padding = '15px 30px';
        element.style.margin = '15px';
        document.getElementById('message-list')?.appendChild(element);
      }
    });
  }
  sendMessage() {  //Sending message to User
    this.socket.emit('message', this.message);
    console.log(this.message);
    const element = document.createElement('li');
    element.innerHTML = this.message;
    console.log(element.innerHTML);
    // element.style.background = 'white';
    // element.style.padding = '15px 30px';
    // element.style.margin = '15px';
    element.style.textAlign = 'right';
    element.style.listStyle = 'none';
    document.getElementById('message-list')?.appendChild(element);
    this.message = '';
  }
}
