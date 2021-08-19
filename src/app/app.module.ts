import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbIconModule, NbCardModule, NbDatepickerModule, NbInputModule, NbButtonModule, NbToastrModule, NbListModule, NbDialogModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ListComponent } from './pages/fans/list/list.component';
import { CreateComponent } from './pages/fans/create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { DetailsComponent } from './pages/fans/details/details.component';
import { UpdateComponent } from './pages/fans/update/update.component';
import { ComfirmBoxComponent } from './shared/components/comfirm-box/comfirm-box.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    DetailsComponent,
    UpdateComponent,
    ComfirmBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NbDatepickerModule.forRoot(),
    NbInputModule,
    NbButtonModule,
    NbToastrModule.forRoot(),
    NbListModule,
    NbDialogModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
