import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserComment } from 'src/app/models/userComments.model';
import { GuestbookService } from 'src/app/services/guestbook.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  guestBookForm = this.fb.group({
    name:['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    comment:['',[Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
    date: ''
  })

  isSubmitted:boolean = false;
  guestBookEntries:UserComment[] = [];

  constructor(private fb:FormBuilder, private userService:GuestbookService) { }

  ngOnInit() {
    this.userService.getEntries().subscribe(entries => {
      this.guestBookEntries = entries; // 'entries' will be your array of UserComment objects
    });
  }

  onSubmit(){
    this.isSubmitted = true;
    if(!this.guestBookForm.invalid){
    let newDate = new Date;
    let newEntry = new UserComment(this.guestBookForm.value.name!.toString(),this.guestBookForm.value.comment!.toString(),newDate.toString())
    this.guestBookEntries.push(newEntry);
    this.userService.createEntry(newEntry);
    this.isSubmitted = false;
    this.guestBookForm.reset();
    }
  }

  checkInput(value:string):boolean{
    if(this.guestBookForm.get(value)?.invalid && (this.guestBookForm.get(value)?.dirty || this.guestBookForm.get(value)?.touched) || this.isSubmitted){
      return true;
    }
    return false;
  }
}
