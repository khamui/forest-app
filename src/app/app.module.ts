// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// External Modules
import { MaterialModule } from './modules/material/material.module';
import { FirebaseModule } from './modules/firebase/firebase.module';

// Forest App Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SheetsComponent } from './components/sheets/sheets.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

// Custom Pipes
import { TaxRatesPipe } from './common/tax-rates.pipe'
import { ToYearPipe } from './common/to-year.pipe';
import { ProjectComponent } from './components/project/project.component';

@NgModule
({
  declarations:
  [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SheetsComponent,
    SettingsComponent,
    TaxRatesPipe,
    ToYearPipe,
    ProjectComponent,
    ProjectCardComponent
  ],
  imports:
  [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FirebaseModule
  ],
  bootstrap:
  [
    AppComponent
  ]
})
export class AppModule { }
