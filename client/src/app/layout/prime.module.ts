import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { AppConfigModule } from 'src/app/layout/config/app.config.module';
import {DividerModule} from 'primeng/divider';
import { PasswordModule } from "primeng/password";
import { AvatarModule } from 'primeng/avatar';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast'
import {GMapModule} from 'primeng/gmap';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { DataViewModule } from 'primeng/dataview';
import { MenuModule } from 'primeng/menu';
import {CardModule} from 'primeng/card';

const components: any [] = [
    CommonModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    CheckboxModule,
    AppConfigModule,
    DividerModule,
    PasswordModule,
    AvatarModule,
    CalendarModule,
    DialogModule,
    InputTextareaModule,
    DropdownModule,
    ToastModule,
    GMapModule,
    ToolbarModule,
    FileUploadModule,
    TableModule,
    RatingModule,
    DataViewModule,
    MenuModule,
    ButtonModule,
    CardModule

]

@NgModule({
    imports: components,
    exports: components
})

export class PrimeModule{}