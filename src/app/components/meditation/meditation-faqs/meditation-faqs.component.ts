import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { DialogModalComponent } from '../../common/dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-meditation-faqs',
  templateUrl: './meditation-faqs.component.html',
  styleUrls: ['./meditation-faqs.component.css']
})
export class MeditationFaqsComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSubmitQuestionsClick() {
    this.openQuestionsFormInNewTab();
  }

  openQuestionsFormInNewTab() {
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfdAetwF0qYDuO2XVdu5o6t7YYwHuFHmzKhA9iqi2HHn7x9PA/viewform";
    window.open(formUrl, "_blank");
  }
}
