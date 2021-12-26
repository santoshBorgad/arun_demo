import { Component, OnInit, ViewChild } from '@angular/core';
import { user } from 'src/assets/User';
import { HttpService } from '../http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';  
import { Login } from 'src/assets/Login';
// import HttpClient from '.angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
objLogin=new Login();
arrLogin:any=[]


obj={
  firstName:'',
  lastName:'',
  constactNumber:0

}


  public data:any = [];
  constactNumber:any
  public settings = {};
  loadContent:Boolean = false;
  public formGroup!: FormGroup ;
  @ViewChild('multiSelect') multiSelect:any;
  loginArry=[];
;

  constructor(private httpService:HttpService) { }
userobj:user =new user();
 userData:any=[]
 herder:any=['id','-','name','-','city']
 loginArry11:any=[];
  ngOnInit(): void {
    this.get()
    this.getList();
  this.httpService.getLogin().subscribe(data=>{
    this.loginArry11=data;
 console.log("arun login data",this.loginArry11);
 
  })
   
    this.data = [
      { item_id: 1, item_text: 'kanda' },
      { item_id: 2, item_text: 'batata' },
      { item_id: 3, item_text: 'vanga' },
      { item_id: 4, item_text: 'mirch' },
      { item_id: 5, item_text: 'shev' },
    ];

    this.settings={
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: true,
      selectAllText: 'Select All',
      unSelectAllText: 'unselect all',
      allowSearchFilter: true,
      limitSelection: -1,
      clearSearchFilter: true,
      maxHeight: 197,
      itemsShowLimit: 3,
      searchPlaceholderText: 'mal search kara',
      noDataAvailablePlaceholderText: 'no data',
      closeDropDownOnSelection: false,
      showSelectedItemsAtTop: false,
      defaultOpen: false,
    };
    this.setForm()
    
  }
  
  public setForm() {
    
    this.formGroup = new FormGroup({
     
      mname: new FormControl(this.data, Validators.required)
    });
    this.loadContent = true;
  }
  get f() {
    return this.formGroup.controls;
  }

  public save() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    console.log(this.formGroup.value);
  }

  public resetForm() {
    // beacuse i need select all crickter by default when i click on reset button.
    this.setForm();
    this.multiSelect.toggleSelectAll();
    // i try below variable isAllItemsSelected reference from your  repository but still not working
    // this.multiSelect.isAllItemsSelected = true;
  }


  public onFilterChange(item: any) {
    console.log(item);
  }
  public onDropDownClose(item: any) {
    console.log(item);
  }

  public onItemSelect(item: any) {
    console.log(item);
  }
  public onDeSelect(item: any) {
    console.log(item);
  }

  public onSelectAll(items: any) {
    console.log(items);
  }
  public onDeSelectAll(items: any) {
    console.log(items);
  }
   

  onSubmit(f:any){
    console.log(f.value);
    
  this.httpService.postLogin(this.objLogin).subscribe(data=>{
    this.arrLogin=data;
    console.log(this.arrLogin);
    
  })
}

  getList(){
    this.httpService.getListService().subscribe(data =>{
      this.userData=data;
      console.log(data)
    })
  }

cal(){
  for(let i=1; i<=31; i++){
    for(let j=1; j<=31; j++){
      console.log("ddd",[i][j])
     }
  }
}
 
get(){
  let data:any= {users:[{id:1,name:'sandip'},{id:2,name:'pune'},{id:3,name:'nanded'}]}
    for (let i = 0; i <= 10; i++) {
      data.users.push({ id: i, name: `user${i}` });

      if(data.users[1]==name){
        data.users='om';
        console.log(data.users);
        
      }
      console.log(data);
      
    }
    return data
    console.log(data);
    
  }


}
