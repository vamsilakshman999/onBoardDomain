// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MemberService } from './services/member.service';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule        // ← enable HTTP calls
    ],
    providers: [MemberService],
    bootstrap: [AppComponent]
})
export class AppModule {}
