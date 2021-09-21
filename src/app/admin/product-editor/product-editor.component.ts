import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {ProductRepositoryService} from "../../model/product-repository.service";
import {Category} from "../../model/category";
import {CategoryRepositoryService} from "../../model/category-repository.service";

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent implements OnInit {
  preview: string = "";
  previewName: string | undefined = undefined;
  isLoading: boolean = false;
  updating: boolean = false;
  editing: boolean = false;
  productId: string = "";
  isUploading: boolean = false;
  selectedCategory: string | undefined;
  successfulUpload: boolean = false;
  productForm: FormGroup = this.formBuilder.group({
    id: [''],
    title: ['', Validators.required],
    price: [''],
    stoneMaterial: [''],
    weight: [''],
    category: this.formBuilder.group({
      id: ['',],
    })
  });

  categories: Category[] = [];
  fileUploaded: any | null = null;

  constructor(private productRepo: ProductRepositoryService,
              private categoryRepo: CategoryRepositoryService,
              private formBuilder: FormBuilder,
              private router: Router,
              private activeRoute: ActivatedRoute) {

  }

  get image() {
    return this.productForm.controls["image"];
  }


  ngOnInit(): void {
    this.isLoading = true;
    this.editing = this.activeRoute.snapshot.params["mode"] == "edit";
    if (this.editing) {
      this.productId = this.activeRoute.snapshot.params["id"];
    }
    this.categoryRepo.getAllCategories(categories => {

      this.categories = categories;
      if (this.editing) {
        this.productRepo.getProduct(this.productId, product => {
          this.isLoading = false;
          this.productForm.patchValue(product);
          this.isLoading = false;
          this.preview = product?.imageUrl;
          this.previewName = product?.imageName;
          this.selectedCategory = product.category?.id;
        });
      } else {
        this.isLoading = false;
        this.selectedCategory = categories[0].id;
        console.log(this.selectedCategory);
      }
    });


  }

  uploadFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      /* this.productForm.patchValue({
         file: file
       });
       this.productForm.get('file')?.updateValueAndValidity();*/

      // File Preview
      this.filePreview(file);
      this.isUploading = true;
      this.productRepo.updateProductImage(file, parseFile => {
        this.isUploading = false;
        this.successfulUpload = true;
        this.fileUploaded = parseFile;
      });
    }

  }

  filePreview(file: any) {
    // File Preview
    console.log(file);
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    }
    this.previewName = file.name;
    reader.readAsDataURL(file);
  }

  get f() {
    return this.productForm.controls;
  }

  onSubmitForm() {
    if (true) {
      this.updating = true;
      this.productRepo.updateProduct(this.editing, this.productForm.getRawValue(), this.fileUploaded, saved => {
        this.updating = false;
        if (saved)
          this.router.navigateByUrl("/admin");
      })


    } else {

    }


    /* console.log(this.productForm.getRawValue());
     this.productRepo.updateProduct(this.editing, this.productForm.getRawValue(), saved => {
       this.updating = false;
       if (saved)
         this.router.navigateByUrl("admin");
     });*/
  }


}
