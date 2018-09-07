import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemAPIService } from 'src/app/item-api.service';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-show-items',
  templateUrl: './show-items.component.html',
  styleUrls: ['./show-items.component.css']
})
export class ShowItemsComponent implements OnInit {

  // constructor() { }
  @ViewChild('f') form: any;
  
  itemList: Item[] = [];
  obj: Item = {
    id: 0,
    itemName: 'Idli',
    image: 'assets/images/3.jpg'
  };
  btnText = 'Add';
  isFormVisible = false;
  pos: number;

  constructor(private service: ItemAPIService) { }

  ngOnInit() {
    this.service.findAll().subscribe(resp => this.itemList = resp);
  }
  submit() {
    if(this.btnText === 'Add') {
      this.service.additem(this.obj).subscribe(resp => {this.itemList.push(resp); } );
      // this.obj.id = 0;
      this.form.reset();
    } else {
      this.service.updateItem(this.obj).subscribe(resp => {this.itemList[this.pos] = resp; });
      this.btnText = 'Add';
    }
  }

  showForm() {
    this.isFormVisible = true;
  }
  remove(item: Item) {
    console.log(item);
    const pos = this.itemList.indexOf(item);
    this.service.removeItem(item).subscribe(res => {
                                                    this.itemList.splice(pos, 1);
                                                    }, err => console.log(err));
  }

  edit(item: Item) {
    console.log(item);
    this.showForm();
    this.btnText = 'Save';
    this.obj = item;
    this.pos = this.itemList.indexOf(item);
  }
}
