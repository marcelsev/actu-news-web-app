import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) {}
  ngOnInit() {}
  async dismissModal() {
    await this.modalCtrl.dismiss();
  }
}
