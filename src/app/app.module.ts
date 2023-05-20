/*
 * This RemoteEntryModule is imported here to allow TS to find the Module during
 * compilation, allowing it to be included in the built bundle. This is required
 * for the Module Federation Plugin to expose the Module correctly.
 * */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {TABLE_PAGE} from "@solenopsys/ui-templates";
import {FormsModule} from "@angular/forms";
import {TABLES} from "./tables.config";
import {CommonModule} from "@angular/common";


const routes: Routes = [
  TABLE_PAGE(':table'),
];

export const PROVIDERS_CONF = [
  {provide: 'tables', useValue: TABLES},
  {provide: 'assets_dir', useValue: "/fm/modules/mf-postgres"},
  {provide: 'mod_name', useValue: "git"}
]

export const IMPORTS_CONF = [
  BrowserModule,
  CommonModule,
  RouterModule.forChild(routes),
  FormsModule,
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...IMPORTS_CONF
  ],
  providers: [...PROVIDERS_CONF],
  bootstrap: [AppComponent],
})
export class AppModule {}
